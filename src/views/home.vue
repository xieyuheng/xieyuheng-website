<template>
  <div>
    <hello-world msg="welcome" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home",
  // prettier-ignore
  components: {
    "hello-world": require("@/components/hello-world.vue").default,
  },
})
export default class extends Vue {}
</script>
