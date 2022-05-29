<template>
  <input class="find" v-model="findText" @keyup.enter="find" />
  <button @click="find">Search</button>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineEmits } from "vue";

let findText = ref("");

const emit = defineEmits(["findBooks", "findAuthors"]);

function find() {
  emit("findBooks", findText);
  emit("findAuthors", findText);
}
</script>

<style scoped>
.find {
  text-align: center;
}
</style>
