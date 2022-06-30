import { defineStore } from "pinia";

export const useAuthorsStore = defineStore("authors", {
  state: () => {
    return { authors: [] };
  },
  getters: {},
  actions: {
    clearAllAuthors() {
      while (this.authors.length > 0) {
        this.authors.pop();
      }
    },
    addAuthor(author) {
      this.authors.push(author);
    },
    deleteByIndex(index) {
      this.authors.splice(index, 1);
    },
  },
});
