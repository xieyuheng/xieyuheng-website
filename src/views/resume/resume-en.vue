<template>
  <div>
    <md-document :document="state.documents.en" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { ResumeState as State } from "./resume-state"

@Component({
  name: "resume-en",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
