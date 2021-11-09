import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"

export class ProjectState {
  static async build(opts: { cache: {} }): Promise<ProjectState> {
    return new ProjectState()
  }
}
