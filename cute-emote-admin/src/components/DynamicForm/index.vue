<template>
  <el-form label-width="120px">
    <dynamic-input
      v-for="name in inputNames"
      :key="name"
      v-model="form[name]"
      :inputConfig="inputConfigs[name]"
    />
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
      </el-col>
      <el-col :span="2" class="line">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button @click="onCancel">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import DynamicInput from '@/components/DynamicForm/DynamicInput'

export default {
  name: 'DynamicForm',
  components: {
    DynamicInput
  },
  created () {
    // create the form props from input configs
    this.inputNames.forEach(name => {
      this.form[name] = null
    })
  },
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
      },
      inputConfigs: {
        mock: {
          name: 'mock',
          label: 'mock label 1',
          type: 'text'
        },
        mock2: {
          name: 'mock2',
          label: 'mock label 2',
          type: 'text'
        }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    onCancel () {
      console.log('cancel!')
    }
  },
  computed: {
    inputNames () {
      return Object.keys(this.inputConfigs)
    }
  }
}
</script>

<style>
</style>
