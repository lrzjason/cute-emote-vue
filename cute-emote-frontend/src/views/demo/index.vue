<template>
  <div class="app-container" style="width:1600px; margin:auto;">
    <h1>
      Components Library
    </h1>
    <bilibili-verification />
    <el-row :gutter="20">
      <el-col :span="8">
        <h2>DynamicForm</h2>
        <dynamic-form
          :inputConfigs="inputConfigs"
          :data="formData"
          v-model="formData"
        />
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
import BilibiliVerification from '@/components/Verification/BilibiliVerification'
import DynamicInput from '@/components/DynamicForm/DynamicInput'
export default {
  name: 'DemoPage',
  methods: {
  },
  computed: {
    cookie () {
      return document.cookie
    }
  },
  mounted () {

  },
  components: {
    DynamicForm,
    DynamicInput,
    BilibiliVerification
  },
  data () {
    return {
      formData: {

      },
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
      },

      inputConfigs: {
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
      }
    }
  }
}
</script>

<style>

</style>
