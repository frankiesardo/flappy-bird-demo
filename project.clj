(defproject flappy-bird-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [om "0.5.0"]
                 [sablono "0.2.16"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "flappy-bird-demo"
              :source-paths ["src"]
              :compiler {
                         :output-to "resources/public/js/flappy_bird_demo.js"
                         :output-dir "resources/public/js/out"
                         :optimizations :none
                         :source-map true}}]})
