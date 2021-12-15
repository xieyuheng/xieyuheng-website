import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { Nodes } from "@xieyuheng/postmark"

export class TranslationState {
  texts: Record<string, string>

  constructor(opts: { texts: Record<string, string> }) {
    this.texts = opts.texts
  }

  static async build(opts: {
    gitPath: string
    cache: {
      translations?: {
        texts: Record<string, string>
      }
    }
  }): Promise<TranslationState> {
    const { gitPath, cache } = opts

    const texts =
      cache.translations?.texts || (await this.loadTexts({ gitPath }))

    cache.translations = { texts }

    return new TranslationState({ texts })
  }

  static async loadTexts(opts: {
    gitPath: string
  }): Promise<Record<string, string>> {
    const gitPath = GitPath.decode(opts.gitPath)
    const files = gitPath.createGitFileStore()

    return await files.all()
  }

  get documents(): Array<{ path: string; document: Nodes.Document }> {
    return Object.entries(this.texts).map(([path, text]) => ({
      path,
      document: app.postmarkParser.parseDocument(text),
    }))
  }
}
