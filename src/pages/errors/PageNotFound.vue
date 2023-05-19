<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()

const route = useRoute()
</script>

<template>
  <div>
    <Head>
      <title v-if="lang.isZh()">404 | 谢宇恒</title>
      <title v-else>404 | Xie Yuheng</title>
    </Head>

    <div class="flex flex-col space-y-2 p-3">
      <div class="text-xl font-bold">
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>

      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </div>
</template>
