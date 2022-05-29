import { ref } from "vue";

export const authors = ref([]);

export function clearAllAuthors() {
  while (authors.value.length > 0) {
    authors.value.pop();
  }
}

export function addAuthor(author) {
  authors.value.push(author);
}

export function deleteByIndex(index) {
  authors.value.splice(index, 1);
}
