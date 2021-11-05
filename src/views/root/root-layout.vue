<template>
  <div class="md:py-14 max-w-2xl px-6 py-6 mx-auto">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "root-layout",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {}
</script>
