<template>
  <el-table
    :data="props.tableBody"
    :fit="true"
    border
    stripe
    style="width: 100%"
    class="content-table"
  >
    <template v-for="(column, index) in props.tableHeader" :key="index">
      <template v-if="column.columnLabel == 'Picture'">
        <el-table-column :label="column.columnLabel">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-image
                :src="props.tableBody[scope.$index][column.columnData]"
              />
            </div>
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column
          :prop="column.columnData"
          :label="column.columnLabel"
        />
      </template>
    </template>
    <el-table-column fixed="right" label="" width="70">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="default"
          @click="handleDeleteRow(scope.$index)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

const props = defineProps({
  tableHeader: Array,
  tableBody: Array,
});

const emit = defineEmits(["deleteDataByIndex"]);

function handleDeleteRow(index) {
  emit("deleteDataByIndex", index);
}
</script>

<style scoped>
.content-table {
  font-size: 20px;
}
</style>
