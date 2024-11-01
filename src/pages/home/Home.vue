<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import GithubIcon from '../../components/icons/GithubIcon.vue'
import MimorIcon from '../../components/icons/MimorIcon.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <div class="h-screen-dynamic flex flex-col bg-black dark:text-white">
    <Head>
      <title v-if="lang.isZh()">谢宇恒</title>
      <title v-else>Xie Yuheng</title>
    </Head>

    <div class="flex h-full flex-col space-y-4 p-6 sm:px-10 sm:py-10">
      <div class="flex flex-wrap text-2xl font-bold">
        <div class="pr-2">谢宇恒</div>
        <div class="pr-2">/</div>
        <div class="pr-2">Xie Yuheng</div>
      </div>

      <div class="flex flex-wrap text-2xl">
        <div>A programmer. A studio.</div>
      </div>

      <ul class="flex flex-col space-y-2 py-6 text-xl">
        <li class="max-w-fit hover:text-orange-500 dark:hover:text-orange-300">
          <a
            href="https://mimor.app/@xieyuheng"
            target="_blank"
            class="flex items-center hover:underline"
            title="My mimor author page"
          >
            <MimorIcon class="mr-3 h-6 w-6 shrink-0" />
            <span>xieyuheng</span>
          </a>
        </li>

        <li class="max-w-fit hover:text-orange-500 dark:hover:text-orange-300">
          <a
            href="https://github.com/xieyuheng"
            target="_blank"
            class="flex items-center hover:underline"
            title="my github homepage"
          >
            <GithubIcon class="mr-3 h-6 w-6 shrink-0" />
            <span>xieyuheng</span>
          </a>
        </li>

        <li class="max-w-fit hover:text-orange-500 dark:hover:text-orange-300">
          <a
            href="mailto:xyheme@gmail.com"
            target="_blank"
            class="flex items-center hover:underline"
            title="my email"
          >
            <EnvelopeIcon class="mr-3 h-6 w-6 shrink-0" />
            <span>xyheme@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
