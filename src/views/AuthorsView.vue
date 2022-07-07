<template>
  <h1>Authors</h1>
  <find-input @find-for-text="findAuthors"></find-input>
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
import ContentTable from "@/components/ContentTable.vue";
import FindInput from "@/components/FindInput.vue";
import { useAuthorsStore } from "@/store/authors";
import { fetchData } from "@/store/utils";

const tableHeader = [
  { columnData: "name", columnLabel: "Name" },
  { columnData: "birthDate", columnLabel: "Birth date" },
  { columnData: "topWork", columnLabel: "Top work" },
  { columnData: "workCount", columnLabel: "Work count" },
];

const authorsStore = useAuthorsStore();
const authors = authorsStore.authors;

function deleteDataByIndex(index) {
  authorsStore.deleteByIndex(index);
}

async function findAuthors(authorName) {
  // максимальное возвращаемое число записей - 100
  const url = `https://openlibrary.org/search/authors.json?q=${authorName.value}`;

  const result = await fetchData(url);

  console.log("result: " + result);

  if (result === undefined) {
    alert(
      "Cannot load data. Our engeneers are already working on it. Please, try later"
    );
    return;
  }

  authorsStore.clearAllAuthors();

  for (let item of result.docs) {
    const workCount = item.work_count;
    if (workCount == 0) {
      continue;
    }

    let birthDate = "Unknown";
    if (item.birth_date) {
      birthDate = item.birth_date;
    }

    authorsStore.addAuthor({
      name: item.name,
      birthDate: birthDate,
      topWork: item.top_work,
      workCount: workCount,
    });
  }
}
</script>
