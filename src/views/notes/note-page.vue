<template>
  <div v-if="note">
    <note-page-navbar :pageName="path" :state="state" />
    <md-document :document="note.document" :path-resolver="pathResolver" />
    <note-page-navbar :pageName="path" :state="state" />
  </div>
  <div v-else>
    <page-not-found />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { NoteState as State } from "@/views/notes/note-state"
import { NotePathResolver } from "@/views/notes/note-path-resolver"

@Component({
  name: "note-page",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
    "note-page-navbar": require("@/views/notes/note-page-navbar.vue").default,
    "page-not-found": require("@/views/errors/page-not-found.vue").default,
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

  @Watch("path")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>
