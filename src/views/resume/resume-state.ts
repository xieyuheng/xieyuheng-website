import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
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
    link: string
    cache: {
      resume?: {
        texts: Texts
      }
    }
  }): Promise<ResumeState> {
    const { link, cache } = opts

    const texts = cache.resume?.texts || (await this.loadTexts({ link }))

    cache.resume = { texts }

    return new ResumeState({ texts })
  }

  static async loadTexts(opts: {
    link: string
  }): Promise<{ zh: string; en: string }> {
    const link = GitLink.decode(opts.link)
    const files = link.createGitFileStore()
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
