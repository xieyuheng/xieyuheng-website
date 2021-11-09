<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Projects</h1>

    <p>
      A project can be a wonderful journey, where we aiming to get somewhere,
      while also enjoy being on the road.
    </p>

    <p>Don't do a project, dance with it!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { ProjectState as State } from "./project-state"

@Component({
  name: "project-list",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
