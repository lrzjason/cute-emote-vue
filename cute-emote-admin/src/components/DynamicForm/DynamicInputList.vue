<template>
  <span >
    <el-form-item :key="name" v-for="name in inputNames" :label="inputConfigs[name].label">
      <dynamic-input
        v-model="formData[name]"
        :inputConfig="inputConfigs[name]"
        @update="update"
        :inputData="formData[name]"
        :disabledControl="inputConfigs[name].type.disabled"
      />
    </el-form-item>
  </span>
</template>

<script>
import DynamicInput from '@/components/DynamicForm/DynamicInput'
export default {
  created () {
    // create the list props from input configs
    this.resetData()
  },
  mounted () {
    this.updateData(this.data)
  },
  methods: {
    update () {
      this.$emit('input', this.formData)
    },
    resetData () {
      this.formData = {}
    },
    updateData (newData) {
      this.resetData()
      let propNameArr = Object.keys(newData)
      console.log('this.formData', this.formData)
      propNameArr.forEach(propName => {
        this.formData[propName] = newData[propName]
      })
      console.log('this.formData', this.formData)
    }
  },
  data () {
    return {
      // mode: 'h'// h: horizontial, v: vertical
      formData: {}
    }
  },
  components: {
    DynamicInput
  },
  computed: {
    inputNames () {
      return Object.keys(this.inputConfigs)
    }
    // ,
    // isHorizontial () {
    //   return this.mode === 'h'
    // }
  },
  props: {
    inputConfigs: {
      type: Object,
      default: () => ({
        // mock: {
        //   name: 'mock',
        //   label: 'hInputList mock label 1',
        //   type: 'text'
        // },
        // mock2: {
        //   name: 'mock2',
        //   label: 'hInputList mock label 2',
        //   type: 'text'
        // }
      })
    },
    data: {
      type: Object
    }
  },
  watch: {
    data (newData, oldData) {
      // console.log('newData', newData)
      this.updateData(newData)
    }
  }
}
</script>

<style>

</style>
