<template>
  <div>
    <h1 class="py-1 text-3xl font-bold">
      <router-link :to="{ path: '/' }"> Xie Yuheng </router-link>
    </h1>
    <ul class="flex space-x-4 font-sans text-xl text-gray-700">
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

  },
})
export default class extends Vue {}
</script>
