import { Note } from "@/views/notes/note"

export class RootState {
  cache: {
    notes?: Array<Note>
    projects?: {
      readme: string
    }
  } = {}

  static async build(): Promise<RootState> {
    return new RootState()
  }
}
