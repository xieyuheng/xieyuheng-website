import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

type Texts = {
  zh: string
  en: string
}

export class ResumeState {
  texts: Texts

  constructor(opts: { texts: Texts }) {
    this.texts = opts.texts
  }

  static async build(opts: {
    gitPath: string
    cache: {
      resume?: {
        texts: Texts
      }
    }
  }): Promise<ResumeState> {
    const { gitPath, cache } = opts

    const texts = cache.resume?.texts || (await this.loadTexts({ gitPath }))

    cache.resume = { texts }

    return new ResumeState({ texts })
  }

  static async loadTexts(opts: {
    gitPath: string
  }): Promise<{ zh: string; en: string }> {
    const gitPath = GitPath.decode(opts.gitPath)
    const files = gitPath.createGitFileStore()
    const zh = await files.getOrFail("zh.md")
    const en = await files.getOrFail("en.md")

    return { zh, en }
  }

  get documents(): { zh: Nodes.Document; en: Nodes.Document } {
    return {
      zh: app.postmarkParser.parseDocument(this.texts.zh),
      en: app.postmarkParser.parseDocument(this.texts.en),
    }
  }
}
