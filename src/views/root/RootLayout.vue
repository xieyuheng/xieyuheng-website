<template>
  <div v-if="state" class="md:py-10 flex flex-col max-w-2xl px-6 py-6 mx-auto">
    <RootHeader class="my-3" />
    <router-view class="my-6" :rootState="state" />
  </div>
</template>

<script lang="ts">
import { RootState as State } from "@/views/root/root-state"
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "RootLayout",
  // prettier-ignore
  components: {
    "RootHeader": require("@/views/root/RootHeader.vue").default,
  },
})
export default class extends Vue {
  state: State | null = null

  async mounted(): Promise<void> {
    this.state = await State.build()
  }
}
</script>
