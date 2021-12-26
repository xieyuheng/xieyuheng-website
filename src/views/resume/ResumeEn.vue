<template>
  <div>
    <Md.MdDocument :document="state.documents.en" />
  </div>
</template>

<script setup lang="ts">
import { ResumeState as State } from "./resume-state"
import { components as Md } from "@xieyuheng/postmark-components-vue3"

const props = defineProps<{ state: State }>()
</script>
