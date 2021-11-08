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

    <div class="flex justify-between pt-4 pb-2">
      <form @submit.prevent="search()" class="flex flex-wrap items-center">
        <input
          v-model.trim="searchInput"
          required
          class="
            focus:outline-none focus:ring-2 focus:ring-gray-300
            placeholder-opacity-60
            px-3
            py-1
            font-sans
            text-lg
            font-bold
            text-gray-800
            placeholder-gray-800
            bg-gray-200
            rounded-lg
          "
          placeholder="Search ..."
          spellcheck="false"
        />
        <button class="text-gray-500" type="submit">
          <icon-search class="w-5 ml-2" />
        </button>
        <div
          v-if="searchInput"
          class="py-1 pl-2 text-sm font-bold font-sans text-gray-500"
        >
          <div v-if="notes.length === 0">found no notes</div>
          <div v-else-if="notes.length === 1">found 1 note</div>
          <div v-else>found {{ notes.length }} notes</div>
        </div>
      </form>

      <div class="self-start pt-2 flex justify-end space-x-2 text-gray-500">
        <button v-if="sortDirection" @click="toggleSort()">
          <icon-sort-descending class="hover:text-gray-900 w-5" />
        </button>
        <button v-else @click="toggleSort()">
          <icon-sort-ascending class="hover:text-gray-900 w-5" />
        </button>
      </div>
    </div>

    <ul class="pb-2">
      <li v-for="note in notes" :key="note.id" class="pb-7 flex flex-col">
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
    "icon-search": require("@/components/icons/icon-search.vue").default,
    "icon-sort-ascending": require("@/components/icons/icon-sort-ascending.vue").default,
    "icon-sort-descending": require("@/components/icons/icon-sort-descending.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State

  searchInput: string = ""
  sortDirection: boolean = true

  get notes() {
    let notes = [...this.state.notes]

    if (this.sortDirection) {
      notes = notes.sort((x, y) => (x.id > y.id ? 1 : -1))
    } else {
      notes = notes.sort((x, y) => (x.id < y.id ? 1 : -1))
    }

    if (this.searchInput) {
      notes = notes.filter((note) =>
        note.document.attributes.title.includes(this.searchInput)
      )
    }

    return notes
  }

  toggleSort(): void {
    this.sortDirection = !this.sortDirection
  }

  sear() {
    // TODO
  }
}
</script>
