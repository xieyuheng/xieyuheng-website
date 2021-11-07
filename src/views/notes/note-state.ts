import { GitPath } from "@enchanterjs/enchanter/lib/git-path"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import postmark, { Nodes } from "@xieyuheng/postmark"
const Path = require("path")

export class ArticleState {
  articleId: GitPath
  files: GitFileStore
  text: string
  pageName: string

  constructor(opts: {
    articleId: GitPath
    files: GitFileStore
    text: string
    pageName: string
  }) {
    this.articleId = opts.articleId
    this.files = opts.files
    this.text = opts.text
    this.pageName = opts.pageName
  }

  // static async build(opts: { articleId: string }): Promise<ArticleState> {
  //   const articleId = GitPath.decode(opts.articleId)
  //   const files = articleId.upward().createGitFileStore()
  //   const pageName = articleId.path
  //   const text = await files.getOrFail(Path.basename(pageName))
  //   return new ArticleState({ articleId, files, text, pageName })
  // }

  // get document(): Nodes.Document {
  //   return app.postmarkParser.parseDocument(this.text)
  // }
}
