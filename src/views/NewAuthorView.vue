<template>
  <h1>Author creation</h1>

  <div class="row">
    <div class="col">Birth date:</div>
    <div class="col">
      <el-date-picker
        v-model="authorFields.birthDateInput"
        type="date"
        class="input"
        clearable
      />
    </div>

    <div class="col">Name:</div>
    <div class="col">
      <el-input v-model="authorFields.nameInput" class="input" clearable />
    </div>

    <div class="col">Top work:</div>
    <div class="col">
      <el-input v-model="authorFields.topWorkInput" class="input" clearable />
    </div>

    <div class="col">Work count:</div>
    <div class="col">
      <el-input v-model="authorFields.workCountInput" class="input" clearable />
    </div>

    <div class="col">
      <el-button @click="submitNewAuthor">Submit</el-button>
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
import { useAuthorsStore } from "@/store/authors";
import { reactive, ref } from "vue";
import { computed } from "vue";

const authorsStore = useAuthorsStore();

const authorFields = reactive({
  nameInput: "",
  birthDateInput: "",
  topWorkInput: "",
  workCountInput: "",
});

const isWarning = ref("false");
const isWarningChange = computed(() => isWarning.value);
const isSuccess = ref("false");
const isSuccessChange = computed(() => isSuccess.value);

function submitNewAuthor() {
  if (isNotEntered(authorFields.nameInput)) {
    showAlert("Please enter name");
    return;
  }
  if (isNotEntered(authorFields.workCountInput)) {
    showAlert("Please enter work count");
    return;
  }
  if (!isNumeric(authorFields.workCountInput)) {
    showAlert("Work count must be a positive number");
    return;
  }

  let birthDate = "Unknown";
  if (authorFields.birthDateInput) {
    birthDate = authorFields.birthDateInput;
  }

  let topWork = "Unknown";
  if (authorFields.topWorkInput) {
    topWork = authorFields.topWorkInput;
  }

  authorsStore.addAuthor({
    name: authorFields.nameInput,
    birthDate: birthDate,
    topWork: topWork,
    workCount: authorFields.workCountInput,
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

function isNumeric(value) {
  return /^\d+$/.test(value);
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
  margin: 0px 840px 0px;
}
</style>
