<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import GithubIcon from '../../components/icons/GithubIcon.vue'
import ReadonlyIcon from '../../components/icons/ReadonlyIcon.vue'
import TwitterIcon from '../../components/icons/TwitterIcon.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <div
    class="h-screen-dynamic m-auto flex w-screen max-w-3xl flex-col overflow-auto"
  >
    <Head>
      <title v-if="lang.isZh()">谢宇恒</title>
      <title v-else>Xie Yuheng</title>
    </Head>

    <div class="flex flex-col space-y-2 px-6 py-20">
      <div class="flex flex-wrap text-2xl font-bold">
        <div class="pr-2">谢宇恒</div>
        <div class="pr-2">/</div>
        <div class="pr-2">Xie Yuheng</div>
      </div>

      <div class="text-2xl">A programmer.</div>

      <ul class="flex flex-col space-y-1 py-6 text-xl">
        <li>
          <a
            href="https://readonly.link/authors/https://inner.xieyuheng.com/author.json"
            target="_blank"
            class="flex items-center overflow-auto hover:underline"
          >
            <ReadonlyIcon class="mr-3 h-6 w-6 shrink-0" />
            <div class="overflow-x-auto whitespace-pre">
              inner.xieyuheng.com/author.json
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/xieyuheng"
            target="_blank"
            class="flex items-center overflow-auto hover:underline"
          >
            <GithubIcon class="mr-3 h-6 w-6 shrink-0" />
            <div class="overflow-x-auto whitespace-pre">xieyuheng</div>
          </a>
        </li>

        <li>
          <a
            href="mailto:xyheme@gmail.com"
            target="_blank"
            class="flex items-center overflow-auto hover:underline"
          >
            <EnvelopeIcon class="mr-3 h-6 w-6 shrink-0" />
            <div class="overflow-x-auto whitespace-pre">xyheme@gmail.com</div>
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/CicadaLanguage"
            target="_blank"
            class="flex items-center overflow-auto hover:underline"
          >
            <TwitterIcon class="mr-3 h-6 w-6 shrink-0" />
            <div class="overflow-x-auto whitespace-pre">CicadaLanguage</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
