<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Hi, I'm Xie Yuheng ^-^/</h1>

    <p>I am a programmer.</p>

    <!-- prettier-ignore -->
    <p>
      I share my ideas about <em>programming</em>, <em>mathematics</em> and
      <em>philosophy</em> through my
      <router-link class="link" :to="{ path: '/notes' }">notes</router-link>,
      <router-link class="link" :to="{ path: '/projects' }">projects</router-link>,
      <router-link class="link" :to="{ path: '/translations' }">translations</router-link>,
      <router-link class="link" :to="{ path: '/papers' }">papers</router-link>
      and
      <router-link class="link" :to="{ path: '/courses' }">courses</router-link>.
    </p>

    <p>Are you curious about my <em>inner universe</em>?</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {}
</script>

<style scoped>
.link {
  @apply font-sans font-bold underline;
}
</style>
