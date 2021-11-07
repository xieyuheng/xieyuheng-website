<template>
  <div>
    <md-document :document="note.document" :path-resolver="pathResolver" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { NoteState as State } from "./note-state"
import { NotePathResolver } from "./note-path-resolver"

@Component({
  name: "note-page",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() baseURL!: string
  @Prop() path!: string
  @Prop() state!: State

  pathResolver = new NotePathResolver({
    baseURL: this.baseURL,
  })

  get note() {
    return this.state.notes.find((node) => node.path === this.path)
  }
}
</script>
