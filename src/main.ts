import { createApp } from "vue"
import { createMetaManager, plugin as vueMetaPlugin } from "vue-meta"
import "./app"
import "./assets/fonts/fonts.css"
import "./plugins/highlight"
import "./plugins/register-service-worker"
import router from "./router"
import "./styles/tailwind.css"

createApp(require("./views/root/RootLayout.vue").default)
  .use(router)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .mount("#app")
