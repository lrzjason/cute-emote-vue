<template>
  <div class="app-container" style="width:1600px; margin:auto;">
    <h1>
      Components Library
    </h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <h2>DynamicForm</h2>
        <!-- <dynamic-form /> -->
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <h2>test input</h2>
        <el-button type="primary" @click="disabled = !disabled">toggle disabled</el-button>
        <dynamic-input
          :inputConfig="text"
          v-model="textData"
          :inputData="textData"
          :disabledControl="disabled"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DynamicForm from '@/components/DynamicForm'
import DynamicInput from '@/components/DynamicForm/DynamicInput'
export default {
  name: 'DemoPage',
  data () {
    return {
      disabled: false,
      textData: 123,
      text: {
        name: 'text',
        label: 'Emote Name',
        type: {
          name: 'text',
          maxLength: 30,
          minLength: 3,
          showLimit: true
        }
      }
    }
  },
  components: {
    DynamicForm,
    DynamicInput
  }
}
</script>

<style>

</style>
