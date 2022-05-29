<template>
  <h1>Authors</h1>
  <find-input @find-authors="findAuthors"></find-input>
  <br />
  <br />
  <content-table
    v-show="authors.length > 0"
    :table-header="tableHeader"
    :table-body="authors"
    @delete-data-by-index="deleteDataByIndex"
  ></content-table>
</template>

<script setup>
import ContentTable from "../components/ContentTable.vue";
import FindInput from "../components/FindInput.vue";
import { reactive } from "@vue/reactivity";
import {
  authors,
  clearAllAuthors,
  addAuthor,
  deleteByIndex,
} from "../store/authors";

const tableHeader = reactive([
  { columnData: "name", columnLabel: "Name" },
  { columnData: "birthDate", columnLabel: "Birth date" },
  { columnData: "topWork", columnLabel: "Top work" },
  { columnData: "workCount", columnLabel: "Work count" },
]);

function deleteDataByIndex(index) {
  deleteByIndex(index);
}

async function findAuthors(authorName) {
  // максимальное возвращаемое число записей - 100
  const url = `https://openlibrary.org/search/authors.json?q=${authorName.value}`;

  const response = await fetch(url);
  const result = await response.json();

  clearAllAuthors();

  for (let item of result.docs) {
    const workCount = item.work_count;
    if (workCount == 0) {
      continue;
    }

    let birthDate = "Unknown";
    if (item.birth_date) {
      birthDate = item.birth_date;
    }

    addAuthor({
      name: item.name,
      birthDate: birthDate,
      topWork: item.top_work,
      workCount: workCount,
    });
  }
}
</script>
