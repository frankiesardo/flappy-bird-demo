(ns flappy-bird-demo.core
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [datascript :as d]
   [cljs.core.async :refer [<! >! chan sliding-buffer put! take! close! timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)


;; Constants and utils

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

(defn floor [x] (.floor js/Math x))

(defn abs [x] (.abs js/Math x))

(defn sin [x] (.sin js/Math x))

(def first-id 1)

(def next-id (atom first-id))

(defn id-gen []
  (let [v @next-id]
    (swap! next-id inc)
    v))

(defn entities-with-components [state component & more]
  (let [ids (d/q '[:find ?e
                   :in $ [?comp ...]
                   :where [?e ?comp]] state (cons component more))]
    (map #(d/entity state %) (apply concat ids))))

(defn game-status [state]
  ;; Argh! That's ugly my friend
  (d/entity state first-id))

(extend-type d/DB
  ;; Prevent cursorification
  om/IToCursor
  (-to-cursor
    ([this _] this)
    ([this _ _] this)))

;; Entities

(def initial-state
  (let [db (d/empty-db)]
    (d/with db [{ ; Game status
                 :db/id (id-gen)
                 :step :waiting
                 :score 0
                 :curr-time 0
                 :last-jump 0}
                { ; Bird
                 :db/id (id-gen)
                 :width bird-width
                 :height bird-height
                 :pos-x bird-x
                 :pos-y bird-initial-y
                 :initial-y bird-initial-y
                 :vel-y 0
                 :gravity gravity
                 :jump-speed jump-speed
                 :tilt 0
                 :solid :projectile
                 :action :flapping
                 :renderer :bird}
                { ; Bottom border
                 :db/id (id-gen)
                 :pos-y board-bottom
                 :solid :barrier}
                { ; Scrolling border
                 :db/id (id-gen)
                 :pos-y border-y
                 :pos-x 0
                 :initial-x 0
                 :vel-x game-speed
                 :width border-height
                 :height border-width
                 :renderer :scrolling-border}
                { ; Score
                 :db/id (id-gen)
                 :pos-x :boh
                 :pos-y :boh
                 :renderer :score}
                { ; Button
                 :db/id (id-gen)
                 :pos-x :boh
                 :pos-y :boh
                 :renderer :button}
                ])))

(def game-state (atom initial-state))

;; System

(defn sin-y [{:keys [initial-y] :as entity} {:keys [curr-time] :as status}]
  (assoc entity :pos-y (+ initial-y (* 30 (sin (/ curr-time 300))))))

(defn waiting-sys [state]
    (let [moving-entities (entities-with-components state :vel-y)
        status (game-status state)
        tx-entities (map #(sin-y % status) moving-entities)]
    (d/with state tx-entities)))

(defn move-y [{:keys [vel-y pos-y] :as entity} status]
  (assoc entity :pos-x (- pos-y vel-y)))

(defn vert-move-sys [state]
  (let [moving-entities (entities-with-components state :vel-y)
        status (game-status state)
        tx-entities (map #(move-y % status) moving-entities)]
    (d/with state tx-entities)))

(defn move-x [{:keys [initial-x vel-x] :as entity} {:keys [curr-time] :as status}]
  (assoc entity :pos-x (floor (+ initial-x (* curr-time vel-x)))))

(defn horiz-move-sys [state]
  (let [moving-entities (entities-with-components state :vel-x)
        status (game-status state)
        tx-entities (map #(move-x % status) moving-entities)]
    (d/with state tx-entities)))

(defn fall [{:keys [gravity vel-y] :as entity} {:keys [curr-time last-jump] :as status}]
  (assoc entity :vel-y (- vel-y (* (- curr-time last-jump) gravity))))

(defn gravity-sys [state]
  (let [falling-entities (entities-with-components state :gravity)
        status (game-status state)
        tx-entities (map #(fall % status) falling-entities)]
    (d/with state tx-entities)))

(defn jump [{:keys [jump-speed] :as entity} {:keys [curr-time last-jump] :as status}]
  (cond-> entity
          (= last-jump curr-time) (assoc :vel-y jump-speed)))

(defn jump-sys [state]
    (let [jumping-entities (entities-with-components state :jump-speed)
        status (game-status state)
        tx-entities (map #(jump % status) jumping-entities)]
    (d/with state tx-entities)))

;; Input

(defn input-sys [input-fn]
  (fn [state]
    (let [status (game-status state)
          new-status (input-fn status)
          new-state (d/with state (list new-status))]
    (case (:step new-status)
      :waiting (-> new-state
                   horiz-move-sys
                   waiting-sys)
      :playing (-> new-state
                   gravity-sys
                   jump-sys
                   horiz-move-sys
                   vert-move-sys
                   ; tilting-sys
                   ; action-sys
                   ; collision-sys
                   ; scoring-sys
                   ; creation-sys
                   )
      :dead (-> new-state
                gravity-sys
                vert-move-sys
                ; tilting-sys
                ; collision-sys
                )))))

(defn input-restart [app]
  (om/update! app initial-state))

(defn input-jump [app]
  (let [jump-fn (fn [{:keys [step curr-time] :as status}]
                  (cond-> status
                    (= step :waiting) (assoc
                                          :step :playing
                                          :last-jump curr-time
                                          :start-time curr-time)
                    (= step :playing) (assoc
                                          :last-jump curr-time)))]
    (om/transact! app (input-sys jump-fn))))

(defn input-time [app time]
  (let [time-fn (fn [status]
                  (assoc status :curr-time time))]
    (om/transact! app (input-sys time-fn))))

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

(defmulti renderer (fn [entity status] (:renderer entity)))

(defmethod renderer :bird [{:keys [pos-y pos-x width height tilt action] :as entity} status]
  [:div.flappy {:style {:left (px pos-x)
           :top (px pos-y)
           :width (px width)
           :height (px height)
           :background (case action
                         :falling "url(./imgs/flappy-base.png)"
                         :flapping "url(./imgs/flappy-flapping.gif)")
           :-webkit-transform (str "rotate(" tilt "deg)")}}])

(defmethod renderer :score [_ _])

(defmethod renderer :scrolling-border [_ _])

(defmethod renderer :button [_ _])


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
      (let [
;;             _ (println (d/q '[:find ?e
;;                               :where [?e :renderer]] app))
            visible-entities (entities-with-components app :renderer)
            status (game-status app)]
        (sab/html
         [:div.board {:onMouseDown (fn [e]
                                     (input-jump app)
                                     (.preventDefault e))}
          (map #(renderer % status) visible-entities)])))))

(om/root game-view game-state
  {:target (.getElementById js/document "board-area")})





;; (println (d/q '[:find ?e
;;                 :where [?e :renderer]] initial-state))



(println initial-state)















































;; ;; Constants

;; (def board-width 480)
;; (def board-height 640)
;; (def board-bottom 561)

;; (def border-height 10)
;; (def border-width board-width)
;; (def border-y 567)

;; (def bird-x 212)
;; (def bird-initial-y 312)
;; (def bird-width 57)
;; (def bird-height 41)

;; (def gravity 0.01)
;; (def jump-speed 15)
;; (def game-speed -0.15)

;; (def gap-width 86)
;; (def gap-height 158)
;; (def gap-spacing 324)
;; (def first-gap-position (* 2 board-width))
;; (def min-pillar-height 60)

;; ;; State



;; (defn init-state []
;;   (let [conn (d/create-conn)]
;;     (d/transact! conn [{:db/id -1 ;Bird
;;                         :position/y bird-initial-y
;;                         :velocity/y 0}
;;                        {:db/id -2 ; Gap
;;                         :position/x first-gap-position
;;                         :velocity/x game-speed}
;;                        ])
;;     conn))

;; (defonce conn (init-state))




;; (defn rand-gap-y []
;;   (+ min-pillar-height
;;      (rand-int (- board-bottom gap-height (* 2 min-pillar-height)))))

;; (defn make-gap [x] {:initial-x x
;;                     :x x
;;                     :y (rand-gap-y)})

;; (def initial-state {:status         :waiting
;;                     :score          0
;;                     :start-time     0
;;                     :curr-time      0
;;                     :last-jump      0
;;                     :bird-vy        0
;;                     :bird-y         bird-initial-y
;;                     :bird-tilt      0
;;                     :bird-action    :flapping
;;                     :border-x       0
;;                     :gaps           []
;;                     })

;; (defonce game-state (atom initial-state))

;; ;; System

;; (defn floor [x] (.floor js/Math x))

;; (defn abs [x] (.abs js/Math x))

;; (defn translate [start-pos vel time]
;;   (floor (+ start-pos (* time vel))))

;; (defn clamp [min max v]
;;   (cond
;;    (< v min) min
;;    (> v max) max
;;    :else v))

;; (defn in-pillar? [{:keys [x]}]
;;   (and (>= (+ bird-x bird-width) x)
;;        (< bird-x (+ x gap-width))))

;; (defn in-pillar-gap? [bird-y {:keys [y]}]
;;   (and (< y bird-y)
;;        (> (+ y gap-height)
;;           (+ bird-y bird-height))))

;; (defn pillar-collision? [bird-y pillar]
;;   (and
;;    (in-pillar? pillar)
;;    (not (in-pillar-gap? bird-y pillar))))

;; (defn bottom-collision? [bird-y]
;;   (>= bird-y (- board-bottom bird-height)))

;; (defn collision-sys [{:keys [status bird-y gaps] :as state}]
;;   (if (not= status :playing) state
;;     (let [collision (or
;;                      (bottom-collision? bird-y)
;;                      (some #(pillar-collision? bird-y %) gaps))]
;;       (if collision
;;         (assoc state :status :dead)
;;         state))))

;; (defn scoring-sys [{:keys [curr-time start-time] :as state}]
;;   (let [score (- (abs (floor (/ (- (* (- curr-time start-time) game-speed) 544)
;;                                gap-spacing))) 4)]
;;   (assoc state :score (if (neg? score) 0 score))))

;; (defn action-sys [{:keys [bird-vy] :as state}]
;;   (if (pos? bird-vy)
;;     (assoc state :bird-action :flapping)
;;     (assoc state :bird-action :falling)))

;; (defn tilting-sys [{:keys [bird-vy] :as state}]
;;   (let [angle (clamp -30 90 (* -2 bird-vy))]
;;     (assoc state :bird-tilt angle)))

;; (defn creation-sys [{:keys [status gaps] :as state}]
;;   (if (not= status :playing) state
;;     (if (empty? gaps) (assoc state :gaps [(make-gap first-gap-position)])
;;       (let [visible-gaps (filterv #(> (:x %) (- gap-width)) gaps)]
;;         (assoc state
;;           :gaps (if (>= (count visible-gaps) 2) visible-gaps
;;                   (conj visible-gaps (make-gap (+ gap-spacing (:initial-x (last visible-gaps)))))))))))

;; (defn waiting-sys [{:keys [status start-time curr-time] :as state}]
;;   (if (not= status :waiting) state
;;     (assoc state
;;       :bird-y (+ bird-initial-y (* 30 (.sin js/Math (/ (- curr-time start-time) 300))))
;;       :border-x (mod (translate 0 game-speed curr-time) 23))))

;; (defn moving-sys [{:keys [status start-time curr-time bird-vy bird-y gaps] :as state}]
;;   (if (not= status :playing) state
;;     (assoc state
;;       :bird-y (min (- bird-y bird-vy) (- board-bottom bird-height))
;;       :border-x (mod (translate 0 game-speed curr-time) 23)
;;       :gaps (map
;;              (fn [{:keys [initial-x] :as gap}] (assoc gap :x (translate initial-x game-speed (- curr-time start-time))))
;;              gaps))))

;; (defn jumping-sys [{:keys [last-jump curr-time] :as state}]
;;   (if (not= last-jump curr-time) state
;;     (assoc state :bird-vy jump-speed)))

;; (defn gravity-sys [{:keys [status bird-vy last-jump curr-time] :as state}]
;;   (if (not= status :playing) state
;;     (assoc state
;;       :bird-vy (- bird-vy (* (- curr-time last-jump) gravity)))))

;; (defn input-sys [input-fn]
;;   (fn [state]
;;     (-> state
;;         input-fn
;;         waiting-sys
;;         gravity-sys
;;         jumping-sys
;;         moving-sys
;;         tilting-sys
;;         action-sys
;;         collision-sys
;;         scoring-sys
;;         creation-sys)))

;; ;; Input

;; (defn input-restart [app]
;;   (om/update! app initial-state))

;; (defn input-jump [app]
;;   (let [jump-fn (fn [{:keys [status curr-time] :as state}]
;;                   (cond-> state
;;                     (= status :waiting) (assoc
;;                                           :status :playing
;;                                           :last-jump curr-time
;;                                           :start-time curr-time)
;;                     (= status :playing) (assoc
;;                                           :last-jump curr-time)))
;;         game-sys (input-sys jump-fn)]
;;     (om/transact! app game-sys)))

;; (defn input-time [app time]
;;   (let [game-sys (input-sys #(assoc % :curr-time time))]
;;     (om/transact! app game-sys)))

;; ;; Rendering

;; (defn time-loop []
;;   (let [out (chan (sliding-buffer 1))]
;;     (go
;;      (loop []
;;        (<! (timeout 30))
;;        (.requestAnimationFrame js/window #(put! out %))
;;        (recur)))
;;     out))

;; (defn px [n] (str n "px"))

;; (defn render-border [border-x]
;;   {:style { :background-position-x (px border-x)}})

;; (defn render-bird [{:keys [bird-y bird-tilt bird-action] :as state}]
;;   {:style {:left (px bird-x)
;;            :top (px bird-y)
;;            :width (px bird-width)
;;            :height (px bird-height)
;;            :background (case bird-action
;;                          :falling "url(./imgs/flappy-base.png)"
;;                          :flapping "url(./imgs/flappy-flapping.gif)")
;;            :-webkit-transform (str "rotate(" bird-tilt "deg)")}})


;; (defn render-gap [{:keys [x y]}]
;;   (let [upper-pillar-y y
;;         lower-pillar-y (- board-bottom y gap-height)]
;;     [:div.pillars
;;      [:div.pillar.pillar-upper {:style {:left (px x)
;;                                         :height (px upper-pillar-y)
;;                                         :width (px gap-width)}}]
;;      [:div.pillar.pillar-lower {:style {:left (px x)
;;                                         :height (px lower-pillar-y)
;;                                         :width (px gap-width)}}]]))

;; (defn game-view [app owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:time-chan (time-loop)})
;;     om/IDidMount
;;     (did-mount [_]
;;       (let [time-chan (om/get-state owner :time-chan)]
;;         (go (loop []
;;               (let [time (<! time-chan)]
;;                 (input-time app time)
;;                 (recur))))))
;;     om/IRender
;;     (render [_]
;;       (let [{:keys [status score gaps border-x]} app]
;;         (sab/html
;;          [:div.board {:onMouseDown (fn [e]
;;                                      (input-jump app)
;;                                      (.preventDefault e))}
;;           (if (= status :playing)
;;             [:h1.score score ])
;;           (if (= status :dead)
;;             [:a.start-button {:onClick #(input-restart app)} "RESTART"]
;;             [:span])
;;           [:div.flappy (render-bird app)]
;;           [:div (map render-gap gaps)]
;;           [:div.scrolling-border (render-border border-x)]])))))

;; (om/root game-view game-state
;;   {:target (.getElementById js/document "board-area")})
