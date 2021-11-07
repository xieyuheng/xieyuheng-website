import { PathResolver } from "@/vendor/postmark/models/path-resolver"
import { GitPath } from "@enchanterjs/enchanter/lib/git-path"

export class NotePathResolver extends PathResolver {
  noteId: GitPath
  baseURL: string

  constructor(opts: { noteId: GitPath; baseURL: string }) {
    super()
    this.noteId = opts.noteId
    this.baseURL = opts.baseURL
  }

  resolve(path: string): string {
    if (this.isExternal(path)) {
      return path
    } else if (path.startsWith("#")) {
      return path
    } else {
      const id = this.noteId.resolve(path).encode()
      return `${this.baseURL}/${id}`
    }
  }

  isExternal(path: string): boolean {
    return path.startsWith("http://") || path.startsWith("https://")
  }
}
