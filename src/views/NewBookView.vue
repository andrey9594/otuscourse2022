<template>
  <h1>Book creation</h1>

  <div class="row">
    <div class="col">ISBN 13:</div>
    <div class="col">
      <el-input v-model="bookFields.isbn13Input" class="input" clearable />
    </div>

    <div class="col">Name:</div>
    <div class="col">
      <el-input v-model="bookFields.nameInput" class="input" clearable />
    </div>

    <div class="col">Authors:</div>
    <div class="col">
      <el-input v-model="bookFields.authorsInput" class="input" clearable />
    </div>

    <div class="col">Description:</div>
    <div class="col">
      <el-input v-model="bookFields.descriptionInput" class="input" clearable />
    </div>

    <div class="col">Price:</div>
    <div class="col">
      <el-input v-model="bookFields.priceInput" class="input" clearable />
    </div>

    <div class="col">Categories:</div>
    <div class="col">
      <el-input v-model="bookFields.categoriesInput" class="input" clearable />
    </div>

    <div class="col">Picture url:</div>
    <div class="col">
      <el-input v-model="bookFields.pictureInput" class="input" clearable />
    </div>

    <div class="col">
      <el-button @click="submitNewBook">Submit</el-button>
    </div>

    <el-alert
      v-show="isSuccessChange === true"
      title="Successfully added"
      type="success"
      show-icon
      :closable="false"
    />

    <el-alert
      v-show="isWarningChange === true"
      title="Not all fields entered"
      type="warning"
      show-icon
      :closable="false"
    />
  </div>
</template>

<script setup>
import { addBook } from "@/store/books";
import { reactive, ref } from "vue";
import { computed } from "vue";

const bookFields = reactive({
  isbn13Input: "",
  nameInput: "",
  authorsInput: "",
  descriptionInput: "",
  priceInput: "",
  categoriesInput: "",
  pictureInput: "",
});

const isWarning = ref("false");
const isWarningChange = computed(() => isWarning.value);
const isSuccess = ref("false");
const isSuccessChange = computed(() => isSuccess.value);

function submitNewBook() {
  if (isNotEntered(bookFields.isbn13Input)) {
    showAlert("Please enter ISBN 13");
    return;
  }
  if (isNotEntered(bookFields.nameInput)) {
    showAlert("Please enter name");
    return;
  }
  if (isNotEntered(bookFields.authorsInput)) {
    showAlert("Please enter authors");
    return;
  }

  let description = "Unknown";
  if (bookFields.descriptionInput) {
    description = bookFields.descriptionInput;
  }

  let price = "Unknown";
  if (bookFields.priceInput) {
    price = bookFields.priceInput;
  }

  let categories = "Unknown";
  if (bookFields.categoriesInput) {
    categories = bookFields.categoriesInput;
  }

  addBook({
    isbn13: bookFields.isbn13Input,
    name: bookFields.nameInput,
    authors: bookFields.authorsInput,
    description: description,
    price: price,
    categories: categories,
    picture: bookFields.pictureInput,
  });

  showSuccessAlertElement();
}

function showAlert(alertText) {
  alert(alertText);
  showWarningAlertElement();
}

function showWarningAlertElement() {
  isWarning.value = true;
  isSuccess.value = false;
  setTimeout(() => (isWarning.value = false), 2500);
}

function showSuccessAlertElement() {
  isSuccess.value = true;
  isWarning.value = false;
  setTimeout(() => (isSuccess.value = false), 2500);
}

function isNotEntered(input) {
  return !input || input.length === 0;
}
</script>

<style scoped>
.input {
  width: 25%;
}
.col {
  display: block;
}
.el-alert {
  width: 10%;
  margin: 0px 835px 0px;
}
</style>
