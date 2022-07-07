import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
  state: () => {
    return { books: [] };
  },
  getters: {},
  actions: {
    clearAllBooks() {
      while (this.books.length > 0) {
        this.books.pop();
      }
    },
    addBook(book) {
      this.books.push(book);
    },
    deleteByIndex(index) {
      this.books.splice(index, 1);
    },
  },
});
