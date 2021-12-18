import { Note } from "@/views/notes/note"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"

export class NoteState {
  notes: Array<Note>

  constructor(opts: { notes: Array<Note> }) {
    this.notes = opts.notes
  }

  static async build(opts: {
    link: string
    cache: {
      notes?: {
        notes: Array<Note>
      }
    }
  }): Promise<NoteState> {
    const { cache, link } = opts

    const notes = cache.notes?.notes || (await this.loadNotes({ link }))

    cache.notes = { notes }

    return new NoteState({ notes })
  }

  static async loadNotes(opts: { link: string }): Promise<Array<Note>> {
    const link = GitLink.decode(opts.link)
    const files = link.createGitFileStore()

    return Object.entries(await files.all()).map(
      ([path, text]) => new Note({ path, text })
    )
  }

  get pageNames(): Array<string> {
    return this.notes.map((note) => note.path)
  }
}
