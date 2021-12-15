import { Note } from "@/views/notes/note"
import { GitPath } from "@enchanterjs/enchanter/lib/git-path"

export class NoteState {
  notes: Array<Note>

  constructor(opts: { notes: Array<Note> }) {
    this.notes = opts.notes
  }

  static async build(opts: {
    gitPath: string
    cache: {
      notes?: {
        notes: Array<Note>
      }
    }
  }): Promise<NoteState> {
    const { cache, gitPath } = opts

    const notes = cache.notes?.notes || (await this.loadNotes({ gitPath }))

    cache.notes = { notes }

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
