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

    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/projects")
    const files = gitPath.createGitFileStore()

    const readme =
      opts.cache.projects?.readme || (await files.getOrFail("README.md"))

    cache.projects = { readme }

    return new ProjectState({ readme })
  }

  get readmeDocument(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.readme)
  }
}
