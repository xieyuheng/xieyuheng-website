<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Papers</h1>

    <ul class="pt-6 pb-2">
      <li
        v-for="{ path, document } in documents"
        :key="path"
        class="flex flex-col pb-10"
      >
        <router-link :to="{ path: `/papers/${path}` }">
          <h1 class="hover:text-gray-500 font-sans font-bold">
            {{ document.attributes.title }}
          </h1>
        </router-link>

        <div class="self-end py-1 text-xs italic font-bold text-gray-500">
          {{ path }}
        </div>

        <div class="flex flex-wrap justify-between">
          <div
            class="text-base text-gray-600"
            v-if="document.attributes.author"
          >
            {{ document.attributes.author }}
          </div>

          <div class="text-base text-gray-500" v-if="document.attributes.date">
            {{ formatDate(document.attributes.date) }}
          </div>
        </div>

        <div
          class="flex flex-wrap space-x-2 text-base"
          v-if="document.attributes.keywords"
        >
          <div
            v-for="(keyword, index) in document.attributes.keywords"
            :key="index"
            class="italic text-gray-500"
          >
            <span>{{ keyword }}</span>
            <span>{{
              index < document.attributes.keywords.length - 1 ? "," : ""
            }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import * as ut from "@/ut"
import { Component, Prop, Vue } from "vue-property-decorator"
import { PaperState as State } from "./paper-state"

@Component({
  name: "PaperList",
  // prettier-ignore
  components: {
    "IconExternalLink": require("@/components/icons/IconExternalLink.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State

  get documents() {
    return this.state.documents.filter(({ path }) => !path.includes("/"))
  }

  formatDate(date: Date): string {
    return ut.formatDate(date)
  }
}
</script>
