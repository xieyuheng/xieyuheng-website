import { createApp } from "vue"
import { createMetaManager, plugin as vueMetaPlugin } from "vue-meta"
import "./app"
import "./fonts/index.css"
import router from "./router"
import "./styles/tailwind.css"

createApp(require("./views/root/RootLayout.vue").default)
  .use(router)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .mount("#app")

async function unregisterServiceWorker(): Promise<void> {
  const registrations = await navigator.serviceWorker.getRegistrations()
  for (let registration of registrations) {
    registration.unregister()
  }
}

unregisterServiceWorker()
