<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Hi, I'm Xie Yuheng ^-^/</h1>

    <p>I am a programmer, and I work as a full-stack web developer.</p>

    <!-- prettier-ignore -->
    <p>
      I share my ideas about <em>programming</em>, <em>mathematics</em> and
      <em>philosophy</em> through my
      <router-link class="link" :to="{ path: '/notes' }">notes</router-link>,
      <router-link class="link" :to="{ path: '/projects' }">projects</router-link>,
      <router-link class="link" :to="{ path: '/translations' }">translations</router-link>,
      and
      <router-link class="link" :to="{ path: '/papers' }">papers</router-link>.
    </p>

    <p>
      Right now I'm working on
      <a href="https://cicada-lang.org" target="_blank"
        >Cicada Language<IconExternalLink class="w-5 p-px" /></a
      >, and
      <a href="https://readonly.link" target="_blank"
        >Readonly.Link<IconExternalLink class="w-5 p-px" /></a
      >.
    </p>

    <p>
      Curious? Come to see my
      <a
        href="https://readonly.link/projects/xieyuheng/xieyuheng"
        target="_blank"
        >inner universe<IconExternalLink class="w-5 p-px" /></a
      >.
    </p>
  </div>
</template>

<script setup lang="ts">
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>

<style scoped>
.link {
  @apply font-sans font-bold underline;
}

a {
  @apply inline-flex items-center font-sans font-bold underline;
}
</style>
