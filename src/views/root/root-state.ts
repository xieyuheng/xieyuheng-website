import { Note } from "@/views/notes/note"

export class RootState {
  static async build(): Promise<RootState> {
    return new RootState()
  }
}
