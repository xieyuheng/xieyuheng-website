import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"

export class PaperState {
  texts: Record<string, string>

  constructor(opts: { texts: Record<string, string> }) {
    this.texts = opts.texts
  }

  static async build(opts: {
    link: string
    cache: {
      papers?: {
        texts: Record<string, string>
      }
    }
  }): Promise<PaperState> {
    const { link, cache } = opts

    const texts = cache.papers?.texts || (await this.loadTexts({ link }))

    cache.papers = { texts }

    return new PaperState({ texts })
  }

  static async loadTexts(opts: {
    link: string
  }): Promise<Record<string, string>> {
    const link = GitLink.decode(opts.link)
    const files = link.createGitFileStore()

    return await files.all()
  }

  get documents(): Array<{ path: string; document: Nodes.Document }> {
    return Object.entries(this.texts).map(([path, text]) => ({
      path,
      document: app.postmarkParser.parseDocument(text),
    }))
  }
}
