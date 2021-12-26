<template>
  <div v-if="document">
    <Md.MdDocument :document="document.document" :key="document.id" />
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script setup lang="ts">
import { PaperState as State } from "@/views/papers/paper-state"
import { computed, watch } from "vue"
import { components as Md } from "@xieyuheng/postmark-components-vue3"
import PageNotFound from "@/views/errors/PageNotFound.vue"

const props = defineProps<{ path: string; state: State }>()

const document = computed(() => {
  return props.state.documents.find((document) => document.path === props.path)
})

watch(
  () => props.path,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>
