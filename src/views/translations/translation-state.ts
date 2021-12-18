import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"

export class TranslationState {
  texts: Record<string, string>

  constructor(opts: { texts: Record<string, string> }) {
    this.texts = opts.texts
  }

  static async build(opts: {
    link: string
    cache: {
      translations?: {
        texts: Record<string, string>
      }
    }
  }): Promise<TranslationState> {
    const { link, cache } = opts

    const texts = cache.translations?.texts || (await this.loadTexts({ link }))

    cache.translations = { texts }

    return new TranslationState({ texts })
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
