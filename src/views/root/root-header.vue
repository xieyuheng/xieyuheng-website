<template>
  <div>
    <div class="relative flex items-center">
      <router-link :to="{ path: '/' }">
        <root-logo
          class="
            2md:absolute 2md:top-0 2md:w-20
            lg:-left-32
            2md:-left-28
            w-10
            rounded-full
          "
        />
      </router-link>

      <div
        class="
          flex
          justify-between
          py-1
          text-3xl
          font-bold
          2md:ml-0
          ml-3
          w-full
        "
      >
        <router-link :to="{ path: '/' }"> Xie Yuheng </router-link>

        <div class="flex items-center mr-3">
          <a href="https://github.com/xieyuheng" target="_blank">
            <icon-github class="w-6 text-gray-400 hover:text-gray-900" />
          </a>
        </div>
      </div>
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
    "icon-github": require("@/components/icons/icon-github.vue").default,
  },
})
export default class extends Vue {}
</script>

<style scoped>
li {
  @apply hover:text-gray-900 pr-3;
}
</style>
