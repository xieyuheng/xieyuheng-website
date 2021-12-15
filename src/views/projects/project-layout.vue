<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading projects ...</p>
      <p class="py-2 text-base">
        from <span class="font-bold">{{ gitPath }}</span>
      </p>
    </div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { ProjectState as State } from "@/views/projects/project-state"
import { RootState } from "@/views/root/root-state"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "project-layout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  gitPath = "xieyuheng/inner@gitlab.com/-/projects"

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        gitPath: this.gitPath,
        cache: this.rootState.cache,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
