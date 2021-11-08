import { Note } from "@/views/notes/note"

export class RootState {
  cache: {
    notes?: Array<Note>
  } = {}

  static async build(): Promise<RootState> {
    return new RootState()
  }
}
