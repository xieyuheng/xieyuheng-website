<template>
  <div>
    <div class="relative flex items-center">
      <router-link :to="{ path: '/' }">
        <RootLogo
          class="2md:absolute 2md:top-0 2md:w-20 2md:-left-28 w-10 rounded-full lg:-left-32"
        />
      </router-link>

      <div
        class="2md:ml-0 ml-3 flex w-full justify-between py-1 text-3xl font-bold"
      >
        <router-link :to="{ path: '/' }"> Xie Yuheng </router-link>

        <div class="flex items-center space-x-2">
          <a
            href="https://github.com/xieyuheng"
            target="_blank"
            title="github ~ xieyuheng"
          >
            <IconGithub class="w-5 text-gray-400 hover:text-gray-900" />
          </a>
          <a href="mailto:xyheme@gmail.com" title="email ~ xyheme@gmail.com">
            <IconMail class="w-6 text-gray-400 hover:text-gray-900" />
          </a>
          <a
            href="https://readonly.link/authors/xieyuheng"
            target="_blank"
            title="readonly.link ~ xieyuheng"
          >
            <IconReadonly class="w-6 text-gray-400 hover:text-gray-900" />
          </a>
        </div>
      </div>
    </div>

    <ul
      class="flex flex-wrap justify-between py-2 font-sans text-xl text-gray-400"
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
        <router-link :to="{ path: '/resume' }"> RESUME </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import RootLogo from "./RootLogo.vue"
import IconGithub from "../../components/icons/IconGithub.vue"
import IconMail from "../../components/icons/IconMail.vue"
import IconReadonly from "../../components/icons/IconReadonly.vue"
</script>

<style scoped>
li {
  @apply hover:text-gray-900;
}
</style>
