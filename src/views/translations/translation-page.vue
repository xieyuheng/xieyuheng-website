<template>
  <div v-if="document">
    <md-document :document="document.document" :key="document.id" />
  </div>
  <div v-else>
    <page-not-found />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { TranslationState as State } from "@/views/translations/translation-state"

@Component({
  name: "translation-page",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "page-not-found": require("@/views/errors/page-not-found.vue").default,
  },
})
export default class extends Vue {
  @Prop() path!: string
  @Prop() state!: State

  get document() {
    return this.state.documents.find((document) => document.path === this.path)
  }

  @Watch("path")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>
