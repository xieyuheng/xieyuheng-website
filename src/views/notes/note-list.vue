<template>
  <div class="flex flex-col space-y-4 font-serif text-xl">
    <h1 class="font-sans text-2xl font-bold">Notes</h1>

    <p>My personal study notes, organized as a <em>zettelkasten</em>.</p>

    <div class="py-2 pl-4 italic text-gray-600 border-l-4 border-gray-300">
      <p>
        A zettelkasten consists of many individual notes with ideas and other
        short pieces of information that are taken down as they occur or are
        acquired.
      </p>

      <p class="flex justify-end">
        <a
          href="https://en.wikipedia.org/wiki/Zettelkasten"
          target="_blank"
          class="inline-flex py-px underline"
        >
          -- Wikipedia / Zettelkasten
          <icon-external-link class="w-5 p-px" />
        </a>
      </p>
    </div>

    <ul class="py-8">
      <li v-for="note in state.notes" :key="note.id" class="flex flex-col py-3">
        <div
          class="
            flex
            items-baseline
            justify-between
            py-1
            space-x-2
            font-sans
            text-sm
          "
        >
          <div class="text-xs italic font-bold text-gray-500">
            {{ note.id }}
          </div>
          <div class="text-gray-500" v-if="note.date">{{ note.date }}</div>
        </div>

        <router-link :to="{ path: `/notes/${note.path}` }">
          <h1 class="hover:text-gray-500 font-sans font-bold">
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
