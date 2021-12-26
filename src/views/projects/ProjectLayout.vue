<template>
  <div v-if="error">
    <pre>{{ error }}</pre>
  </div>
  <div v-else-if="!state">
    <div class="text-xl text-gray-600">
      <p>Loading projects ...</p>
      <p class="py-2 text-base">
        from <span class="font-bold">{{ link }}</span>
      </p>
    </div>
  </div>
  <router-view v-else :state="state" />
</template>

<script setup lang="ts">
import { ProjectState as State } from "@/views/projects/project-state"
import { RootState } from "@/views/root/root-state"
import { onMounted, ref } from "vue"

const props = defineProps<{ rootState: RootState }>()

const state = ref<State | null>(null)
const error = ref<unknown | null>(null)

const link = "gitlab.com/xieyuheng/inner/-/projects"

onMounted(async () => {
  try {
    state.value = await State.build({
      link,
      cache: props.rootState.cache,
    })
  } catch (err) {
    error.value = err
  }
})
</script>
