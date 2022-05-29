<template>
  <h1>Book creation</h1>

  <div class="row">
    <div class="col">ISBN 13:</div>
    <div class="col">
      <el-input v-model="isbn13Input" class="input" clearable />
    </div>

    <div class="col">Name:</div>
    <div class="col">
      <el-input v-model="nameInput" class="input" clearable />
    </div>

    <div class="col">Authors:</div>
    <div class="col">
      <el-input v-model="authorsInput" class="input" clearable />
    </div>

    <div class="col">Description:</div>
    <div class="col">
      <el-input v-model="descriptionInput" class="input" clearable />
    </div>

    <div class="col">Price:</div>
    <div class="col">
      <el-input v-model="priceInput" class="input" clearable />
    </div>

    <div class="col">Categories:</div>
    <div class="col">
      <el-input v-model="categoriesInput" class="input" clearable />
    </div>

    <div class="col">Picture url:</div>
    <div class="col">
      <el-input v-model="pictureInput" class="input" clearable />
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
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const isbn13Input = ref("");
const nameInput = ref("");
const authorsInput = ref("");
const descriptionInput = ref("");
const priceInput = ref("");
const categoriesInput = ref("");
const pictureInput = ref("");

const isWarning = ref("false");
const isWarningChange = computed(() => isWarning.value);
const isSuccess = ref("false");
const isSuccessChange = computed(() => isSuccess.value);

function submitNewBook() {
  if (isNotEntered(isbn13Input)) {
    showAlert("Please enter ISBN 13");
    return;
  }
  if (isNotEntered(nameInput)) {
    showAlert("Please enter name");
    return;
  }
  if (isNotEntered(authorsInput)) {
    showAlert("Please enter authors");
    return;
  }

  let description = "Unknown";
  if (descriptionInput.value) {
    description = descriptionInput.value;
  }

  let price = "Unknown";
  if (priceInput.value) {
    price = priceInput.value;
  }

  let categories = "Unknown";
  if (categoriesInput.value) {
    categories = categoriesInput.value;
  }

  addBook({
    isbn13: isbn13Input,
    name: nameInput,
    authors: authorsInput,
    description: description,
    price: price,
    categories: categories,
    picture: pictureInput,
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
  return !input.value || input.value.length === 0;
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
