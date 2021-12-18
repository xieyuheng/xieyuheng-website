<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading translations ...</p>
      <p class="py-2 text-base">
        from <span class="font-bold">{{ link }}</span>
      </p>
    </div>
  </div>
  <router-view v-else :state="state" />
</template>

<script lang="ts">
import { RootState } from "@/views/root/root-state"
import { TranslationState as State } from "@/views/translations/translation-state"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "translation-layout",
})
export default class NoteLayout extends Vue {
  @Prop() rootState!: RootState

  state: State | null = null
  error: unknown | null = null

  link = "gitlab.com/xieyuheng/inner/-/translations/zh"

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
