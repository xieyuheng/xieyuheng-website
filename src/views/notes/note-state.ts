import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import postmark, { Nodes } from "@xieyuheng/postmark"
const Path = require("path")

export class NoteState {
  noteId: GitPath
  files: GitFileStore
  text: string
  pageName: string

  constructor(opts: {
    noteId: GitPath
    files: GitFileStore
    text: string
    pageName: string
  }) {
    this.noteId = opts.noteId
    this.files = opts.files
    this.text = opts.text
    this.pageName = opts.pageName
  }

  static async build(opts: { noteId: string }): Promise<NoteState> {
    const noteId = GitPath.decode(opts.noteId)
    const files = noteId.upward().createGitFileStore()
    const pageName = noteId.path
    const text = await files.getOrFail(Path.basename(pageName))
    return new NoteState({ noteId, files, text, pageName })
  }

  get document(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.text)
  }
}
