<template>
  <div class="md:py-10 flex flex-col max-w-2xl px-6 py-6 mx-auto">
    <root-header class="my-3" />
    <router-view class="my-6" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "root-layout",
  // prettier-ignore
  components: {
    "root-header": require("@/views/root/root-header.vue").default,
  },
})
export default class extends Vue {}
</script>
