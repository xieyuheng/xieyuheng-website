<template>
  <div>
    <div class="relative flex items-center">
      <router-link :to="{ path: '/' }">
        <root-logo class="pr-3 md:absolute md:top-4 md:-left-20 rounded-full" />
      </router-link>

      <h1 class="py-1 text-3xl font-bold">
        <router-link :to="{ path: '/' }"> Xie Yuheng </router-link>
      </h1>
    </div>

    <ul class="flex flex-wrap justify-between font-sans text-xl text-gray-700">
      <li class="hover:text-gray-400">
        <router-link :to="{ path: '/notes' }"> NOTES </router-link>
      </li>
      <li class="hover:text-gray-400">
        <router-link :to="{ path: '/projects' }"> PROJECTS </router-link>
      </li>
      <li class="hover:text-gray-400">
        <router-link :to="{ path: '/translations' }">
          TRANSLATIONS
        </router-link>
      </li>
      <li class="hover:text-gray-400">
        <router-link :to="{ path: '/papers' }"> PAPERS </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "root-header",
  // prettier-ignore
  components: {
    "root-logo": require("@/views/root/root-logo.vue").default,
  },
})
export default class extends Vue {}
</script>
