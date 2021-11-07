<template>
  <div>TODO</div>
  <!-- <md-document :document="state.document" :path-resolver="pathResolver" /> -->
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { NoteState as State } from "./note-state"
import { NotePathResolver } from "./note-path-resolver"

@Component({
  name: "note-view",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() noteId!: string
  @Prop() baseURL!: string

  @Prop() state!: State

  // pathResolver = new NotePathResolver({
  //   noteId: this.state.noteId,
  //   baseURL: this.baseURL,
  // })
}
</script>
