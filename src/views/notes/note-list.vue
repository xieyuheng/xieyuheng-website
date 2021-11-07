<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Notes</h1>

    <p>My zettelkasten-like notes.</p>

    <ul>
      <li v-for="note in state.notes" :key="note.id" class="flex flex-col py-2">
        <div class="flex items-baseline space-x-2 text-sm text-gray-500">
          <div>{{ note.id }}</div>
          <div v-if="note.date">{{ note.date }}</div>
        </div>

        <router-link :to="{ path: `/notes/${note.path}` }">
          <h1 class="hover:text-gray-500 text-lg">
            {{ note.document.attributes.title }}
          </h1>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { NoteState as State } from "./note-state"

@Component({
  name: "note-list",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
