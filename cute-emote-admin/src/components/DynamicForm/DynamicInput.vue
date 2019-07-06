<template>
  <span>
    <el-form-item v-for="name in inputNames" :key="name" :label="inputs[name].label">
      <el-input v-model="inputs[name].value" />
    </el-form-item>
  </span>
</template>

<script>
export default {
  data () {
    return {
      inputs: {
        mock: {
          label: 'mock label 1',
          value: null
        },
        mock2: {
          label: 'mock label 2',
          value: null
        }
      }
    }
  },
  computed: {
    inputNames () {
      return Object.keys(this.inputs)
    }
  }
}
</script>

<style>
</style>
