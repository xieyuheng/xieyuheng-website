import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

export class ProjectState {
  readme: string

  constructor(opts: { readme: string }) {
    this.readme = opts.readme
  }

  static async build(opts: { cache: {} }): Promise<ProjectState> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/projects")
    const files = gitPath.createGitFileStore()
    const readme = await files.getOrFail("README.md")

    return new ProjectState({ readme })
  }

  get readmeDocument(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.readme)
  }
}
