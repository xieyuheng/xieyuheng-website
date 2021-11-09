<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading cv ...</p>
      <p class="py-2 text-base">
        from <span class="font-bold">{{ gitPath }}</span>
      </p>
    </div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { RootState } from "@/views/root/root-state"
import { CvState as State } from "@/views/cv/cv-state"

@Component({
  name: "cv-layout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  gitPath = "xieyuheng/inner@gitlab.com/-/cv"

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        gitPath: this.gitPath,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
