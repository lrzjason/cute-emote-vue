<template>
  <el-form label-width="120px"></el-form>
</template>

<script>
// import DynamicInput from '@/components/DynamicForm/DynamicInput'

export default {
  name: 'DynamicForm',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
</style>
