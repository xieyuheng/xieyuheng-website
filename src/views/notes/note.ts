import * as ut from "@/ut"
import { Nodes } from "@xieyuheng/postmark"

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

  get date(): string | undefined {
    return this.document.attributes.date
      ? ut.formatDate(this.document.attributes.date)
      : undefined
  }

  matchLines(word: string): Array<{ lineNumber: number; line: string }> {
    const lines: Array<{ lineNumber: number; line: string }> = []
    for (const [index, line] of this.text.split("\n").entries()) {
      if (line.includes(word)) {
        lines.push({ lineNumber: index + 1, line })
      }
    }

    return lines
  }
}
