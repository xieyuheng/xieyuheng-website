import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Nodes } from "@xieyuheng/postmark"

export class ProjectState {
  readme: string

  constructor(opts: { readme: string }) {
    this.readme = opts.readme
  }

  static async build(opts: { gitPath: string }): Promise<ProjectState> {
    const { gitPath } = opts

    const readme = await this.loadReadme({ gitPath })

    return new ProjectState({ readme })
  }

  static async loadReadme(opts: { gitPath: string }): Promise<string> {
    const gitPath = GitPath.decode(opts.gitPath)
    const files = gitPath.createGitFileStore()
    return await files.getOrFail("README.md")
  }

  get readmeDocument(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.readme)
  }
}
