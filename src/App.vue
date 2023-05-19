<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from './components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谢宇恒</title>
    <title v-else>Xie Yuheng</title>
  </Head>

  <RouterView />
</template>
