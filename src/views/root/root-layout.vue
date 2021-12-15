<template>
  <div v-if="state" class="md:py-10 flex flex-col max-w-2xl px-6 py-6 mx-auto">
    <root-header class="my-3" />
    <router-view class="my-6" :rootState="state" />
  </div>
</template>

<script lang="ts">
import { RootState as State } from "@/views/root/root-state"
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "root-layout",
  // prettier-ignore
  components: {
    "root-header": require("@/views/root/root-header.vue").default,
  },
})
export default class extends Vue {
  state: State | null = null

  async mounted(): Promise<void> {
    this.state = await State.build()
  }
}
</script>
