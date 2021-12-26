<template>
  <div v-if="note">
    <NotePageNavbar :pageName="path" :state="state" />
    <Md.MdDocument :document="note.document" :key="note.id" />
    <NotePageNavbar :pageName="path" :state="state" />
  </div>
  <div v-else>
    <PageNotFound />
  </div>
</template>

<script setup lang="ts">
import { NoteState as State } from "@/views/notes/note-state"
import { computed, watch } from "vue"
import { components as Md } from "@xieyuheng/postmark-components-vue3"
import PageNotFound from "@/views/errors/PageNotFound.vue"
import NotePageNavbar from "@/views/notes/NotePageNavbar.vue"

const props = defineProps<{ path: string; state: State }>()

const note = computed(() => {
  return props.state.notes.find((node) => node.path === props.path)
})

watch(
  () => props.path,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>
