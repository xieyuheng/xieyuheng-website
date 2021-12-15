<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Live / 直播</h1>

    <p>我偶尔会直播看书、学习、写程序。</p>
    <p>和朋友们分享最近学到的东西和感想。</p>

    <ul class="px-6">
      <li class="py-1 list-disc">
        <a
          href="https://live.bilibili.com/23825595"
          target="_blank"
          class="inline-flex py-px underline"
        >
          小药壶 @bilibili
          <icon-external-link class="w-5 p-px" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "live-list",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {}
</script>
