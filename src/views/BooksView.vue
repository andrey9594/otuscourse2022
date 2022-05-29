<template>
  <h1>Books</h1>
  <find-input @find-books="findBooks"></find-input>
  <br />
  <br />
  <content-table
    v-show="books.length > 0"
    :table-header="tableHeader"
    :table-body="books"
    @delete-data-by-index="deleteDataByIndex"
  ></content-table>
</template>

<script setup>
import ContentTable from "../components/ContentTable.vue";
import FindInput from "../components/FindInput.vue";
import { reactive } from "@vue/reactivity";
import { books, clearAllBooks, addBook, deleteByIndex } from "../store/books";

const tableHeader = reactive([
  { columnData: "isbn13", columnLabel: "ISBN 13" },
  { columnData: "name", columnLabel: "Name" },
  { columnData: "authors", columnLabel: "Authors" },
  { columnData: "description", columnLabel: "Description" },
  { columnData: "price", columnLabel: "Price" },
  { columnData: "categories", columnLabel: "Categories" },
  { columnData: "picture", columnLabel: "Picture" },
]);

function deleteDataByIndex(index) {
  deleteByIndex(index);
}

async function findBooks(bookName) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookName.value}&key=AIzaSyDGNv2Od-EQZlMdGlx7K6uX2kBMIjaJPtc&maxResults=40`;

  const response = await fetch(url);
  const result = await response.json();

  clearAllBooks();

  for (let item of result.items) {
    const volumeInfo = item.volumeInfo;

    let isbn = "Not exist";
    if (volumeInfo.industryIdentifiers) {
      for (let id of volumeInfo.industryIdentifiers) {
        if (id.type == "ISBN_13") {
          isbn = id.identifier;
        }
      }
    }

    let price = "Unknown";
    const saleInfo = item.saleInfo;

    switch (saleInfo.saleability) {
      case "FREE":
        price = "Free";
        break;
      case "NOT_FOR_SALE":
        price = "Not for sale";
        break;
      case "FOR_SALE":
        price =
          saleInfo.listPrice.amount + " " + saleInfo.listPrice.currencyCode;
        break;
      default:
        break;
    }

    let description = "Unknown";
    if (volumeInfo.description) {
      description = volumeInfo.description;
    }
    if (description.length > 200) {
      description = description.substring(0, 200) + " ...";
    }

    let authors = "Unknown";
    if (volumeInfo.authors) {
      authors = volumeInfo.authors;
    }

    let categories = "Unknown";
    if (volumeInfo.categories) {
      categories = volumeInfo.categories;
    }

    let imageLink = undefined;
    const imageLinks = volumeInfo.imageLinks;
    if (imageLinks && imageLinks.smallThumbnail) {
      imageLink = imageLinks.smallThumbnail;
    }

    addBook({
      isbn13: isbn,
      name: volumeInfo.title,
      authors: authors,
      description: description,
      price: price,
      categories: categories,
      picture: imageLink,
    });
  }
}
</script>
