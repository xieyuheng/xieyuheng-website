<template>
  <div>
    <md-document :document="state.documents.zh" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { ResumeState as State } from "./resume-state"

@Component({
  name: "resume-zh",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
