<template>
  <div>
    <md-document :document="state.documents.en" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { CvState as State } from "./cv-state"

@Component({
  name: "cv-en",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
