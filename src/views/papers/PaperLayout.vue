<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading papers ...</p>
      <p class="py-2 text-base">
        from <span class="font-bold">{{ link }}</span>
      </p>
    </div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { PaperState as State } from "@/views/papers/paper-state"
import { RootState } from "@/views/root/root-state"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "PaperLayout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  link = "gitlab.com/xieyuheng/inner/-/papers/publish"

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        link: this.link,
        cache: this.rootState.cache,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
