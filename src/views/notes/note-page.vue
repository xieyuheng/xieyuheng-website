<template>
  <div v-if="note">
    <note-page-navbar :pageName="path" :state="state" />
    <md-document :document="note.document" :key="note.id" />
    <note-page-navbar :pageName="path" :state="state" />
  </div>
  <div v-else>
    <page-not-found />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { NoteState as State } from "@/views/notes/note-state"

@Component({
  name: "note-page",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "note-page-navbar": require("@/views/notes/note-page-navbar.vue").default,
    "page-not-found": require("@/views/errors/page-not-found.vue").default,
  },
})
export default class extends Vue {
  @Prop() path!: string
  @Prop() state!: State

  get note() {
    return this.state.notes.find((node) => node.path === this.path)
  }

  @Watch("path")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>
