<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Projects</h1>

    <div class="py-2 pl-4 text-gray-600 border-l-4 border-gray-300">
      <p class="py-2 text-2xl font-bold">proj·ect</p>

      <p>
        A planned endeavor, usually with a specific goal and accomplished in
        several steps or stages.
      </p>

      <p class="flex justify-end">
        <a
          href="https://en.wiktionary.org/wiki/project"
          target="_blank"
          class="inline-flex py-px underline"
        >
          -- Wiktionary / project
          <IconExternalLink class="w-5 p-px" />
        </a>
      </p>
    </div>

    <p>
      A project can be a wonderful journey, where we aiming to get somewhere,
      while also practicing our skills and enjoy being on the road.
    </p>

    <p><em>Don't merely do a project, dance with it!</em></p>

    <md-document :document="state.readmeDocument" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { ProjectState as State } from "./project-state"

@Component({
  name: "ProjectList",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "IconExternalLink": require("@/components/icons/IconExternalLink.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
