<template>
  <input class="find" v-model="findForText" @keyup.enter="find" />
  <button @click="find">Search</button>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

let findForText = ref("");

const emit = defineEmits(["findForText"]);

function find() {
  emit("findForText", findForText);
}
</script>

<style scoped>
.find {
  text-align: center;
}
</style>
