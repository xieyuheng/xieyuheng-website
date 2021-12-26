<template>
  <div v-if="note">
    <NotePage-navbar :pageName="path" :state="state" />
    <md-document :document="note.document" :key="note.id" />
    <NotePage-navbar :pageName="path" :state="state" />
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script lang="ts">
import { NoteState as State } from "@/views/notes/note-state"
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "NotePage",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "NotePage-navbar": require("@/views/notes/NotePage-navbar.vue").default,
    "PageNotFound": require("@/views/errors/PageNotFound.vue").default,
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
