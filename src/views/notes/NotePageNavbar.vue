<template>
  <div class="flex justify-between font-sans text-gray-400">
    <div>
      <router-link
        v-if="prevPageName"
        :to="{ path: `/notes/${prevPageName}` }"
        class="hover:text-gray-700"
        title="Previous Page"
      >
        PREV
      </router-link>
      <div v-else class="text-gray-200">PREV</div>
    </div>

    <div>
      <router-link
        v-if="nextPageName"
        :to="{ path: `/notes/${nextPageName}` }"
        class="hover:text-gray-700"
        title="Next Page"
      >
        NEXT
      </router-link>
      <div v-else class="text-gray-200">NEXT</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NoteState as State } from "@/views/notes/note-state"
import { computed } from "vue"

const props = defineProps<{ pageName: string; state: State }>()

const prevPageName = computed(() => {
  const index = props.state.pageNames.findIndex(
    (pageName) => pageName === props.pageName
  )
  if (index === -1) return undefined
  return props.state.pageNames[index - 1]
})

const nextPageName = computed(() => {
  const index = props.state.pageNames.findIndex(
    (pageName) => pageName === props.pageName
  )
  if (index === -1) return undefined
  return props.state.pageNames[index + 1]
})
</script>
