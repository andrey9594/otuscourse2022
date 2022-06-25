<template>
  <el-container :class="'app-container'">
    <el-header :height="'40px'">
      <navigation-bar />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<style importrant>
.title {
  font-size: 80px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  color: #212529;
  font-family: "Lora", "Times New Roman", serif;
}
.row {
  display: table;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
}
</style>
