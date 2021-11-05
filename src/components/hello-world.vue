<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "hello-world",
})
export default class extends Vue {
  @Prop() msg!: string
}
</script>
