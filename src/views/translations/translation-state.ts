import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

export class TranslationState {
  static async build(opts: {
    gitPath: string
    cache: {
      translations?: {}
    }
  }): Promise<TranslationState> {
    const { gitPath } = opts

    return new TranslationState()
  }
}
