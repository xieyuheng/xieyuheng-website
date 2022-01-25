<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Résumé</h1>
    <ul class="px-6">
      <li class="list-disc py-1">
        <router-link class="link" :to="{ path: '/resume/zh' }">
          中文
        </router-link>
        /
        <a class="link" href="/resume/zh.pdf"> .pdf </a>
      </li>
      <li class="list-disc py-1">
        <router-link class="link" :to="{ path: '/resume/en' }">
          English
        </router-link>
        /
        <a class="link" href="/resume/en.pdf"> .pdf </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ResumeState as State } from "./resume-state"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>

<style scoped>
.link {
  @apply font-sans underline;
}

a {
  @apply inline-flex items-center font-sans underline;
}
</style>
