import { PathResolver } from "@/vendor/postmark/models/path-resolver"


export class NotePathResolver extends PathResolver {
  baseURL: string

  constructor(opts: { baseURL: string }) {
    super()
    this.baseURL = opts.baseURL
  }

  resolve(path: string): string {
    if (this.isExternal(path)) {
      return path
    } else if (path.startsWith("#")) {
      return path
    } else {
      return `${this.baseURL}/${path}`
    }
  }

  isExternal(path: string): boolean {
    return path.startsWith("http://") || path.startsWith("https://")
  }
}
