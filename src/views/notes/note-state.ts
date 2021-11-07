import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import postmark, { Nodes } from "@xieyuheng/postmark"

export class NoteState {
  files: GitFileStore
  notes: Record<string, string>

  constructor(opts: {
    files: GitFileStore
    notes: Record<string, string>
  }) {
    this.files = opts.files
    this.notes = opts.notes
  }

  static async build(): Promise<NoteState> {
    const gitPath = GitPath.decode("xieyuheng/inner@gitlab.com/-/notes")
    const files = gitPath.createGitFileStore()
    const notes = await files.all()
    return new NoteState({ files, notes })
  }

  document(text: string): Nodes.Document {
    return app.postmarkParser.parseDocument(text)
  }
}
