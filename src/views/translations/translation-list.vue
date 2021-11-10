<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Translations</h1>

    <ul class="pb-2">
      <li
        v-for="{ path, document } in state.documents"
        :key="path"
        class="pb-7 flex flex-col"
      >
        <router-link :to="{ path: `/translations/${path}` }">
          <h1 class="hover:text-gray-500 font-sans font-bold">
            {{ document.attributes.title }}
          </h1>
        </router-link>

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

        <div
          class="
            hover:text-gray-900
            self-end
            text-xs
            italic
            font-bold
            text-gray-500
          "
        >
          <router-link :to="{ path: `/translations/${path}` }">
            {{ path }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { TranslationState as State } from "./translation-state"

@Component({
  name: "translation-list",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
    "icon-search": require("@/components/icons/icon-search.vue").default,
    "icon-sort-ascending": require("@/components/icons/icon-sort-ascending.vue").default,
    "icon-sort-descending": require("@/components/icons/icon-sort-descending.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
