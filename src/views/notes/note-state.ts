import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Note } from "@/views/notes/note"

export class NoteState {
  notes: Array<Note>

  constructor(opts: { notes: Array<Note> }) {
    this.notes = opts.notes
  }

  static async build(opts: {
    cache: { notes?: Array<Note> }
  }): Promise<NoteState> {
    const { cache } = opts

    const notes = cache.notes || (await this.loadNotes())
    cache.notes = notes

    return new NoteState({ notes })
  }

  static async loadNotes(): Promise<Array<Note>> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/notes")
    const files = gitPath.createGitFileStore()

    return Object.entries(await files.all()).map(
      ([path, text]) => new Note({ path, text })
    )
  }

  get pageNames(): Array<string> {
    return this.notes.map((note) => note.path)
  }
}
