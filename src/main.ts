import Vue from "vue"
import App from "./App.vue"
import "./styles/tailwind.css"
import "./assets/fonts/fonts.css"
import "./registerServiceWorker"
import router from "./router"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
