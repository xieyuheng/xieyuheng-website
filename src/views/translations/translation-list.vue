<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Translations</h1>

    <div class="py-2 pl-4 text-gray-600 border-l-4 border-gray-300">
      <p>達其志，通其欲：東方曰寄，南方曰象，西方曰狄鞮，北方曰譯。</p>

      <p class="flex justify-end py-3">
        <a
          href="https://ctext.org/liji/wang-zhi/zh"
          target="_blank"
          class="inline-flex py-px underline"
        >
          -- 禮記 · 王制
          <IconExternalLink class="w-5 p-px" />
        </a>
      </p>
    </div>

    <img
      class="w-36 self-center py-4"
      src="../../assets/images/wikipedia-translation.svg"
    />

    <ul class="pt-6 pb-2">
      <li
        v-for="{ path, document } in state.documents"
        :key="path"
        class="flex flex-col pb-8"
      >
        <router-link :to="{ path: `/translations/${path}` }">
          <h1 class="hover:text-gray-500 font-sans font-bold">
            {{ document.attributes.title }}
          </h1>
        </router-link>

        <div class="self-end text-xs italic font-bold text-gray-500">
          {{ path }}
        </div>

        <div
          class="flex flex-wrap text-base text-gray-600"
          v-if="document.attributes.author"
        >
          {{ document.attributes.author }}
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
import { Component, Prop, Vue } from "vue-property-decorator"
import { TranslationState as State } from "./translation-state"

@Component({
  name: "translation-list",
  // prettier-ignore
  components: {
    "IconExternalLink": require("@/components/icons/IconExternalLink.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
