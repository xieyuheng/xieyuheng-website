import postmark, { Nodes } from "@xieyuheng/postmark"

export class Note {
  path: string
  text: string
  id: string
  document: Nodes.Document

  constructor(opts: { path: string; text: string }) {
    this.path = opts.path
    this.text = opts.text
    this.document = app.postmarkParser.parseDocument(this.text)
    this.id = this.path.split("-")[0]
  }
}
