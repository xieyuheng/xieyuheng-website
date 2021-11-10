<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading translations ...</p>
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
import { TranslationState as State } from "@/views/translations/translation-state"

@Component({
  name: "translation-layout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  gitPath = "xieyuheng/inner@gitlab.com/-/translations/zh"

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
