<template>
  <div class="app-container" style="width:1600px; margin:auto;">
    <h1>
      Components Library
    </h1>
    <el-row :gutter="20">
      <el-col>
        <h2>DynamicForm</h2>
        <dynamic-form />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DynamicForm from '@/components/DynamicForm'
export default {

  components: {
    DynamicForm
  }
}
</script>

<style>

</style>
