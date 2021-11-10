<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Translations</h1>
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
