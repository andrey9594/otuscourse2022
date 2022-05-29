import { ref } from "vue";

export const books = ref([]);

export function clearAllBooks() {
  while (books.value.length > 0) {
    books.value.pop();
  }
}

export function addBook(book) {
  books.value.push(book);
}

export function deleteByIndex(index) {
  books.value.splice(index, 1);
}
