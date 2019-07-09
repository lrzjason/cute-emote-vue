<template>
  <span>
    <el-form-item :label="inputConfig.label">
      <el-input v-if="inputConfig.type === 'text'" v-model="value1" @input="update()"/>
    </el-form-item>
  </span>
</template>

<script>
export default {
  data () {
    return {
      value1: null,
      value2: null
    }
  },
  methods: {
    update () {
      this.$emit('input', this.returnValue)
    }
  },
  computed: {
    returnValue () {
      if (this.inputConfig.type === 'text') {
        return this.value1
      }
      return null
    }
  },
  props: {
    value: null,
    inputConfig: {
      type: Object,
      default: () => ({
        name: 'mock',
        label: 'mock label 1',
        type: 'text'
      })
    }
  }
}
</script>

<style>
</style>
