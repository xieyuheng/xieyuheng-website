import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"

export class ProjectState {
  readme: string

  constructor(opts: { readme: string }) {
    this.readme = opts.readme
  }

  static async build(opts: {
    link: string
    cache: {
      projects?: { readme: string }
    }
  }): Promise<ProjectState> {
    const { cache, link } = opts

    const readme =
      opts.cache.projects?.readme || (await this.loadReadme({ link }))

    cache.projects = { readme }

    return new ProjectState({ readme })
  }

  static async loadReadme(opts: { link: string }): Promise<string> {
    const link = GitLink.decode(opts.link)
    const files = link.createGitFileStore()
    return await files.getOrFail("README.md")
  }

  get readmeDocument(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.readme)
  }
}
