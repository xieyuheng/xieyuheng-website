import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

export class PaperState {
  texts: Record<string, string>

  constructor(opts: { texts: Record<string, string> }) {
    this.texts = opts.texts
  }

  static async build(opts: {
    gitPath: string
    cache: {
      papers?: {
        texts: Record<string, string>
      }
    }
  }): Promise<PaperState> {
    const { gitPath, cache } = opts

    const texts = cache.papers?.texts || (await this.loadTexts({ gitPath }))

    cache.papers = { texts }

    return new PaperState({ texts })
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
