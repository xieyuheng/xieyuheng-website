import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Note } from "@/views/notes/note"

export class NoteState {
  files: GitFileStore
  notes: Array<Note>

  constructor(opts: { files: GitFileStore; notes: Array<Note> }) {
    this.files = opts.files
    this.notes = opts.notes
  }

  static async build(opts: {
    cache: { notes?: Array<Note> }
  }): Promise<NoteState> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/notes")
    const files = gitPath.createGitFileStore()

    const notes =
      opts.cache.notes ||
      Object.entries(await files.all()).map(
        ([path, text]) => new Note({ path, text })
      )

    opts.cache.notes = notes

    return new NoteState({ files, notes })
  }

  get pageNames(): Array<string> {
    return this.notes.map((note) => note.path)
  }
}
