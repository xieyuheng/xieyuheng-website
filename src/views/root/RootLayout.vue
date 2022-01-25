<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <div v-if="state" class="mx-auto flex max-w-2xl flex-col px-6 py-6 md:py-10">
    <RootHeader class="my-3" />
    <router-view class="my-6" :rootState="state" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { RootState as State } from "./root-state"
import RootHeader from "./RootHeader.vue"

const state = ref<State | null>(null)

onMounted(async () => {
  state.value = await State.build()
})
</script>
