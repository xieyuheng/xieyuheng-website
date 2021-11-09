import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

export class ProjectState {
  readme: string

  constructor(opts: { readme: string }) {
    this.readme = opts.readme
  }

  static async build(opts: {
    cache: {
      projects?: { readme: string }
    }
  }): Promise<ProjectState> {
    const { cache } = opts

    const readme = opts.cache.projects?.readme || (await this.loadReadme())
    cache.projects = { readme }

    return new ProjectState({ readme })
  }

  static async loadReadme(): Promise<string> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/projects")
    const files = gitPath.createGitFileStore()
    return await files.getOrFail("README.md")
  }

  get readmeDocument(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.readme)
  }
}
