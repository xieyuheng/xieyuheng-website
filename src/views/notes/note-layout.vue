<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div>Loading ...</div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { NoteState as State } from "./note-state"

@Component({
  name: "note-layout",
})
export default class NoteLayout extends Vue {
  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
