import Vue from "vue"
import router from "./router"
import "./styles/tailwind.css"
import "./assets/fonts/fonts.css"
// import "./plugins/register-service-worker"
import "./app"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(require("./views/root/root-layout.vue").default),
}).$mount("#app")
