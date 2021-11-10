import { Note } from "@/views/notes/note"

export class RootState {
  cache: {
    notes?: {
      notes: Array<Note>
    }
    projects?: {
      readme: string
    }
    resume?: {
      texts: {
        zh: string
        en: string
      }
    }
    translations?: {
      texts: Record<string, string>
    }
    papers?: {
      texts: Record<string, string>
    }
  } = {}

  static async build(): Promise<RootState> {
    return new RootState()
  }
}
