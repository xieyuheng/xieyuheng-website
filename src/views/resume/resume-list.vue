<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Résumé</h1>
    <ul class="px-6">
      <li class="py-1 list-disc">
        <router-link class="link" :to="{ path: '/resume/zh' }">
          中文
        </router-link>
        /
        <a class="link" href="/resume/zh.pdf"> .pdf </a>
      </li>
      <li class="py-1 list-disc">
        <router-link class="link" :to="{ path: '/resume/en' }">
          English
        </router-link>
        /
        <a class="link" href="/resume/en.pdf"> .pdf </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { ResumeState as State } from "./resume-state"

@Component({
  name: "resume-list",
  // prettier-ignore
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
    "IconExternalLink": require("@/components/icons/IconExternalLink.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>

<style scoped>
.link {
  @apply font-sans underline;
}

a {
  @apply inline-flex items-center font-sans underline;
}
</style>
