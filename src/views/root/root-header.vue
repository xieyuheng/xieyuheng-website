<template>
  <div>
    <div class="relative flex items-center">
      <router-link :to="{ path: '/' }">
        <root-logo
          class="md:absolute md:top-0 md:w-20 md:-left-32 w-10 rounded-full"
        />
      </router-link>

      <h1 class="py-1 text-3xl font-bold md:ml-0 ml-3">
        <router-link :to="{ path: '/' }"> Xie Yuheng </router-link>
      </h1>
    </div>

    <ul
      class="
        flex flex-wrap
        md:justify-between
        py-2
        font-sans
        text-xl text-gray-400
      "
    >
      <li>
        <router-link :to="{ path: '/notes' }"> NOTES </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/projects' }"> PROJECTS </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/translations' }">
          TRANSLATIONS
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/papers' }"> PAPERS </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/courses' }"> COURSES </router-link>
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

<style scoped>
li {
  @apply hover:text-gray-900 pr-3;
}
</style>
