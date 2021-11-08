<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div>Loading notes ...</div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { RootState } from "@/views/root/root-state"
import { NoteState as State } from "@/views/notes/note-state"

@Component({
  name: "note-layout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        cache: this.rootState.cache,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
