<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Résumé</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { ResumeState as State } from "./resume-state"

@Component({
  name: "resume-list",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
