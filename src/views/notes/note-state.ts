import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { Note } from "@/views/notes/note"

export class NoteState {
  notes: Array<Note>

  constructor(opts: { notes: Array<Note> }) {
    this.notes = opts.notes
  }

  static async build(opts: { gitPath: string }): Promise<NoteState> {
    const { gitPath } = opts
    const notes = await this.loadNotes({ gitPath })
    return new NoteState({ notes })
  }

  static async loadNotes(opts: { gitPath: string }): Promise<Array<Note>> {
    const gitPath = GitPath.decode(opts.gitPath)
    const files = gitPath.createGitFileStore()

    return Object.entries(await files.all()).map(
      ([path, text]) => new Note({ path, text })
    )
  }

  get pageNames(): Array<string> {
    return this.notes.map((note) => note.path)
  }
}
