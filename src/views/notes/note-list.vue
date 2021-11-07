<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Notes</h1>

    <p>My zettelkasten-like notes.</p>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "note-list",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {}
</script>

<style scoped>
.link {
  @apply font-sans font-bold underline;
}

a {
  @apply inline-flex items-center font-sans font-bold underline;
}
</style>
