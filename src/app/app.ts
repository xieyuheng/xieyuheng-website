import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import postmark from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  postmarkParser = postmark.createParser({
    enableTable: true,
  })
}
