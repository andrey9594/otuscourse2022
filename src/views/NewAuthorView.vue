<template>
  <h1>Author creation</h1>

  <div class="row">
    <div class="col">Birth date:</div>
    <div class="col">
      <el-date-picker
        v-model="birthDateInput"
        type="date"
        class="input"
        clearable
      />
    </div>

    <div class="col">Name:</div>
    <div class="col">
      <el-input v-model="nameInput" class="input" clearable />
    </div>

    <div class="col">Top work:</div>
    <div class="col">
      <el-input v-model="topWorkInput" class="input" clearable />
    </div>

    <div class="col">Work count:</div>
    <div class="col">
      <el-input v-model="workCountInput" class="input" clearable />
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
import { addAuthor } from "@/store/authors";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const nameInput = ref("");
const birthDateInput = ref("");
const topWorkInput = ref("");
const workCountInput = ref("");

const isWarning = ref("false");
const isWarningChange = computed(() => isWarning.value);
const isSuccess = ref("false");
const isSuccessChange = computed(() => isSuccess.value);

function submitNewAuthor() {
  if (isNotEntered(nameInput)) {
    showAlert("Please enter name");
    return;
  }
  if (isNotEntered(workCountInput)) {
    showAlert("Please enter work count");
    return;
  }
  if (!isNumeric(workCountInput.value)) {
    showAlert("Work count must be a positive number");
    return;
  }

  let birthDate = "Unknown";
  if (birthDateInput.value) {
    birthDate = birthDateInput.value;
  }

  let topWork = "Unknown";
  if (topWorkInput.value) {
    topWork = topWorkInput.value;
  }

  addAuthor({
    name: nameInput,
    birthDate: birthDate,
    topWork: topWork,
    workCount: workCountInput,
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
  margin: 0px 840px 0px;
}
</style>
