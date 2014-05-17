(ns flappy-bird-demo.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [figwheel.client :as fw]
   [cljs.core.async :refer [<! >! chan sliding-buffer put! take! close! timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)

;; Constants

(def board-width 480)
(def board-height 640)
(def board-bottom 561)

(def border-height 10)
(def border-width board-width)
(def border-y 567)

(def bird-x 212)
(def bird-initial-y 312)
(def bird-width 57)
(def bird-height 41)

(def gravity 0.01)
(def jump-speed 15)
(def game-speed -0.15)

(def gap-width 86)
(def gap-height 158)
(def gap-spacing 324)
(def first-gap-position (* 2 board-width))
(def min-pillar-height 60)

;; State

(defn rand-gap-y []
  (+ min-pillar-height
     (rand-int (- board-bottom gap-height (* 2 min-pillar-height)))))

(defn make-gap [x] {:initial-x x
                    :x x
                    :y (rand-gap-y)})

(def initial-state {:status         :waiting
                    :score          0
                    :start-time     0
                    :curr-time      0
                    :last-jump      0
                    :bird-vy        0
                    :bird-y         bird-initial-y
                    :bird-tilt      0
                    :bird-action    :flapping
                    :border-x       0
                    :gaps           []
                    })

(defonce game-state (atom initial-state))

;; System

(defn floor [x] (.floor js/Math x))

(defn abs [x] (.abs js/Math x))

(defn translate [start-pos vel time]
  (floor (+ start-pos (* time vel))))

(defn clamp [min max v]
  (cond
   (< v min) min
   (> v max) max
   :else v))

(defn in-pillar? [{:keys [x]}]
  (and (>= (+ bird-x bird-width) x)
       (< bird-x (+ x gap-width))))

(defn in-pillar-gap? [bird-y {:keys [y]}]
  (and (< y bird-y)
       (> (+ y gap-height)
          (+ bird-y bird-height))))

(defn pillar-collision? [bird-y pillar]
  (and
   (in-pillar? pillar)
   (not (in-pillar-gap? bird-y pillar))))

(defn bottom-collision? [bird-y]
  (>= bird-y (- board-bottom bird-height)))

(defn collision-sys [{:keys [status bird-y gaps] :as state}]
  (if (not= status :playing) state
    (let [collision (or
                     (bottom-collision? bird-y)
                     (some #(pillar-collision? bird-y %) gaps))]
      (if collision
        (assoc state :status :dead)
        state))))

(defn scoring-sys [{:keys [curr-time start-time] :as state}]
  (let [score (- (abs (floor (/ (- (* (- curr-time start-time) game-speed) 544)
                               gap-spacing))) 4)]
  (assoc state :score (if (neg? score) 0 score))))

(defn action-sys [{:keys [bird-vy] :as state}]
  (if (pos? bird-vy)
    (assoc state :bird-action :flapping)
    (assoc state :bird-action :falling)))

(defn tilting-sys [{:keys [bird-vy] :as state}]
  (let [angle (clamp -30 90 (* -2 bird-vy))]
    (assoc state :bird-tilt angle)))

(defn creation-sys [{:keys [status gaps] :as state}]
  (if (not= status :playing) state
    (if (empty? gaps) (assoc state :gaps [(make-gap first-gap-position)])
      (let [visible-gaps (filterv #(> (:x %) (- gap-width)) gaps)]
        (assoc state
          :gaps (if (>= (count visible-gaps) 2) visible-gaps
                  (conj visible-gaps (make-gap (+ gap-spacing (:initial-x (last visible-gaps)))))))))))

(defn waiting-sys [{:keys [status start-time curr-time] :as state}]
  (if (not= status :waiting) state
    (assoc state
      :bird-y (+ bird-initial-y (* 30 (.sin js/Math (/ (- curr-time start-time) 300))))
      :border-x (mod (translate 0 game-speed curr-time) 23))))

(defn moving-sys [{:keys [status start-time curr-time bird-vy bird-y gaps] :as state}]
  (if (not= status :playing) state
    (assoc state
      :bird-y (min (- bird-y bird-vy) (- board-bottom bird-height))
      :border-x (mod (translate 0 game-speed curr-time) 23)
      :gaps (map
             (fn [{:keys [initial-x] :as gap}] (assoc gap :x (translate initial-x game-speed (- curr-time start-time))))
             gaps))))

(defn jumping-sys [{:keys [last-jump curr-time] :as state}]
  (if (not= last-jump curr-time) state
    (assoc state :bird-vy jump-speed)))

(defn gravity-sys [{:keys [status bird-vy last-jump curr-time] :as state}]
  (if (not= status :playing) state
    (assoc state
      :bird-vy (- bird-vy (* (- curr-time last-jump) gravity)))))

(defn input-sys [input-fn]
  (fn [state]
    (-> state
        input-fn
        waiting-sys
        gravity-sys
        jumping-sys
        moving-sys
        tilting-sys
        action-sys
        collision-sys
        scoring-sys
        creation-sys)))

;; Input

(defn input-restart [app]
  (om/update! app initial-state))

(defn input-jump [app]
  (let [jump-fn (fn [{:keys [status curr-time] :as state}]
                  (cond-> state
                    (= status :waiting) (assoc
                                          :status :playing
                                          :last-jump curr-time
                                          :start-time curr-time)
                    (= status :playing) (assoc
                                          :last-jump curr-time)))
        game-sys (input-sys jump-fn)]
    (om/transact! app game-sys)))

(defn input-time [app time]
  (let [game-sys (input-sys #(assoc % :curr-time time))]
    (om/transact! app game-sys)))

;; Rendering

(defn time-loop []
  (let [out (chan (sliding-buffer 1))]
    (go
     (loop []
       (<! (timeout 30))
       (.requestAnimationFrame js/window #(put! out %))
       (recur)))
    out))

(defn px [n] (str n "px"))

(defn render-border [border-x]
  {:style { :background-position-x (px border-x)}})

(defn render-bird [{:keys [bird-y bird-tilt bird-action] :as state}]
  {:style {:left (px bird-x)
           :top (px bird-y)
           :width (px bird-width)
           :height (px bird-height)
           :background (case bird-action
                         :falling "url(./imgs/flappy-base.png)"
                         :flapping "url(./imgs/flappy-flapping.gif)")
           :-webkit-transform (str "rotate(" bird-tilt "deg)")}})


(defn render-gap [{:keys [x y]}]
  (let [upper-pillar-y y
        lower-pillar-y (- board-bottom y gap-height)]
    [:div.pillars
     [:div.pillar.pillar-upper {:style {:left (px x)
                                        :height (px upper-pillar-y)
                                        :width (px gap-width)}}]
     [:div.pillar.pillar-lower {:style {:left (px x)
                                        :height (px lower-pillar-y)
                                        :width (px gap-width)}}]]))

(defn game-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:time-chan (time-loop)})
    om/IDidMount
    (did-mount [_]
      (let [time-chan (om/get-state owner :time-chan)]
        (go (loop []
              (let [time (<! time-chan)]
                (input-time app time)
                (recur))))))
    om/IRender
    (render [_]
      (let [{:keys [status score gaps border-x]} app]
        (sab/html
         [:div.board {:onMouseDown (fn [e]
                                     (input-jump app)
                                     (.preventDefault e))}
          (if (= status :playing)
            [:h1.score score ])
          (if (= status :dead)
            [:a.start-button {:onClick #(input-restart app)} "RESTART"]
            [:span])
          [:div.flappy (render-bird app)]
          [:div (map render-gap gaps)]
          [:div.scrolling-border (render-border border-x)]])))))

(om/root game-view game-state
  {:target (.getElementById js/document "board-area")})

(fw/watch-and-reload  :jsload-callback (fn []
                                         ;; you would add this if you
                                         ;; have more than one file
                                         #_(reset! game-state @game-state)
                                         ))
