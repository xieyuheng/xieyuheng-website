<template>
  <div>
    <md-document :document="state.documents.zh" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { ResumeState as State } from "./resume-state"

@Component({
  name: "resume-zh",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
