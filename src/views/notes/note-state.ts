import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Note } from "./note"

export class NoteState {
  files: GitFileStore
  notes: Array<Note>

  constructor(opts: { files: GitFileStore; notes: Array<Note> }) {
    this.files = opts.files
    this.notes = opts.notes
  }

  static async build(): Promise<NoteState> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/notes")
    const files = gitPath.createGitFileStore()
    const notes = Object.entries(await files.all()).map(
      ([path, text]) => new Note({ path, text })
    )
    return new NoteState({ files, notes })
  }
}
