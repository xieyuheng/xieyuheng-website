<template>
  <div v-if="document">
    <Md.MdDocument :document="document.document" :key="document.id" />
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { TranslationState as State } from "./translation-state"
import { components as Md } from "@xieyuheng/postmark-components-vue3"
import PageNotFound from "../errors/PageNotFound.vue"

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
