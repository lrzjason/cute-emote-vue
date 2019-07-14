<template>
  <el-form label-width="120px" >
    <dynamic-input-list
      :inputConfigs="inputConfigs"
      :data="data"
      v-model="formData"
    />
    <slot name="footer">
      <el-form-item >
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script>
import DynamicInputList from '@/components/DynamicForm/DynamicInputList'

export default {
  name: 'DynamicForm',
  mounted () {
    // console.log('this.data', this.data)
  },
  components: {
    DynamicInputList
  },
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!', this.formData)
    },
    onCancel () {
      console.log('cancel!', this.formData)
    }
  },
  computed: {
    inputNames () {
      return Object.keys(this.inputConfigs)
    }
  },
  props: {
    inputConfigs: {
      type: Object,
      default: () => ({
        mockText: {
          name: 'name',
          label: 'Activity name',
          type: { 'name': 'text' }
        },
        mockSelect: {
          name: 'zone',
          label: 'Activity zone',
          type: {
            'name': 'select',
            'placeholder': 'Zone Selection',
            'options': [
              {
                'label': 'Zone one',
                'value': 'shanghai'
              },
              {
                'label': 'Zone two',
                'value': 'beijing'
              }
            ]
          }
        },
        mockDatetime: {
          name: 'time',
          label: 'Activity time',
          type: {
            'name': 'datetime',
            'datePlaceholder': 'Date Picker Demo',
            'timePlaceholder': 'Time Picker Demo',
            'dateFormat': 'YYYY/MM/DD',
            'timeFormat': 'HH:mm',
            'dateTimeSeparator': '~'
          }
        },
        mockSwitch: {
          name: 'delivery',
          label: 'Instant delivery',
          type: {
            'name': 'switch'
          }

        },
        mockCheckbox: {
          name: 'type',
          label: 'Activity Type',
          type: {
            'name': 'checkbox',
            'options': [
              {
                'label': 'Online activities',
                'value': 'online'
              },
              {
                'label': 'Promotion activities',
                'value': 'promotion'
              },
              {
                'label': 'Offline activities',
                'value': 'offline'
              },
              {
                'label': 'Simple brand exposure',
                'value': 'simple'
              }
            ]
          }
        },
        mockRadio: {
          name: 'resources',
          label: 'Resources',
          type: {
            'name': 'radio',
            'options': [
              {
                'label': 'Sponsor',
                'value': 'sponsor'
              },
              {
                'label': 'Venue',
                'value': 'venue'
              }
            ]
          }
        },
        mockTextarea: {
          'name': 'desc',
          'label': 'Activity form',
          'type': {
            'name': 'textarea',
            'showLimit': true,
            'maxLength': 30
          }
        }
      })
    },
    data: {
      type: Object
    }
  },
  watch: {
    formData (formData) {
      // console.log('formData', formData)
      this.$emit('input', formData)
    }
  }
}
</script>

<style>
</style>
