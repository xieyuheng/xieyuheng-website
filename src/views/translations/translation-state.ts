import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
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
    const { gitPath } = opts

    const texts = await this.loadTexts({ gitPath })

    return new TranslationState({ texts })
  }

  static async loadTexts(opts: {
    gitPath: string
  }): Promise<Record<string, string>> {
    const gitPath = GitPath.decode(opts.gitPath)
    const files = gitPath.createGitFileStore()

    return await files.all()
  }
}
