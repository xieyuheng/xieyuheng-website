<template>
  <div v-if="document">
    <md-document :document="document.document" :key="document.id" />
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script lang="ts">
import { TranslationState as State } from "@/views/translations/translation-state"
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "TranslationPage",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "PageNotFound": require("@/views/errors/PageNotFound.vue").default,
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
