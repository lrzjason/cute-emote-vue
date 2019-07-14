<template>
  <span>
    <el-input
      v-if="isTextInput"
      v-model="value1"
      :type="typeName"
      :maxlength="type.maxLength"
      :minlength="type.minLength"
      :show-word-limit="type.showLimit"
      @input="update()"
      :disabled="disabled"
    />
    <el-select
      v-if="isSelect"
      :placeholder="type.placeholder || 'Select'"
      v-model="value1"
      @input="update()"
      :disabled="disabled"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span v-if="isInDateTime">
      <el-col v-if="isDateTime || isDate" :span="dateOrTimeColSpan" >
        <el-date-picker
          v-model="value1"
          type="date"
          :placeholder="type.datePlaceholder || 'Pick a date'"
          style="width: 100%;"
          :format="elementUIdateFormat"
          @change="update()"
          :disabled="disabled"
        />
      </el-col>
      <el-col v-if="isDateTime" :span="2" class="line">-</el-col>
      <el-col v-if="isDateTime || isTime" :span="dateOrTimeColSpan">
        <el-time-picker
          v-model="value2"
          type="fixed-time"
          :placeholder="type.timePlaceholder || 'Pick a time'"
          style="width: 100%;"
          :format="elementUItimeFormat"
          @change="update()"
          :disabled="disabled"
        />
      </el-col>
    </span>
    <el-switch
      v-if="isSwitch"
      v-model="value1"
      @change="update()"
      :disabled="disabled"
    />
    <el-checkbox-group
      v-if="isCheckbox"
      v-model="value1"
      @change="update()"
      :disabled="disabled"
    >
      <el-checkbox v-for="option in options" :key='option.value' :label="option.value" > {{option.label}} </el-checkbox>
    </el-checkbox-group>
    <el-radio-group
      v-if="isRadio"
      v-model="value1"
      @change="update()"
      :disabled="disabled"
    >
      <el-radio v-for="option in options" :key='option.value' :label="option.value" > {{option.label}} </el-radio>
    </el-radio-group>
  </span>
</template>

<script>
import moment from 'moment'
export default {
  created () {
    if (this.isCheckbox) {
      this.value1 = []
    }
  },
  mounted () {
    this.updateValue(this.inputData)
    this.disabled = this.disabledControl
  },
  data () {
    return {
      value1: null,
      value2: null,

      defaultDateFormat: 'yyyy/MM/dd',
      defaultTimeFormat: 'HH:mm:ss',
      defaultDateTimeSeparator: ' ',

      disabled: false
    }
  },
  methods: {
    updateValue (newInputData) {
      if (this.isText) {
        this.value1 = newInputData
      }
    },
    update () {
      this.$emit('input', this.returnValue)
      this.$emit('update')
    },
    toDate (date) {
      return moment(date).format(this.dateFormat)
    },
    toTime (time) {
      return moment(time).format(this.timeFormat)
    }
  },
  computed: {
    options () {
      return this.type.options || []
    },
    elementUIdateFormat () {
      // element UI handling
      // replace Y to y for element UI date format
      return this.dateFormat.split('').forEach(el => {
        el.replace('Y', 'y')
        el.replace('D', 'd')
      })
    },
    elementUItimeFormat () {
      return this.timeFormat
    },
    dateValue () {
      return this.toDate(this.value1)
    },
    timeValue () {
      return this.toTime(this.value2)
    },
    dateTimeSeparator () {
      return this.type.dateTimeSeparator || this.defaultDateTimeSeparator
    },
    dateFormat () {
      return this.type.dateFormat || this.defaultDateFormat
    },
    timeFormat () {
      return this.type.timeFormat || this.defaultTimeFormat
    },
    datetimeFormat () {
      return this.type.dateTimeFormat || this.defaultDateTimeFormat
    },
    isText () {
      return this.typeName === 'text'
    },
    isTextarea () {
      return this.typeName === 'textarea'
    },
    isSelect () {
      return this.typeName === 'select'
    },
    isDate () {
      return this.typeName === 'date'
    },
    isDateTime () {
      return this.typeName === 'datetime'
    },
    isTime () {
      return this.typeName === 'time'
    },
    isSwitch () {
      return this.typeName === 'switch'
    },
    isCheckbox () {
      return this.typeName === 'checkbox'
    },
    isRadio () {
      return this.typeName === 'radio'
    },
    isTextInput () {
      return this.isText || this.isTextarea
    },
    isInDateTime () {
      return this.isDate || this.isTime || this.isDateTime
    },
    dateOrTimeColSpan () {
      return (this.isDateTime) ? 11 : 24
    },
    typeName () {
      if (this.type) {
        if (this.type.name) {
          return this.type.name
        }
      }
      return null
    },
    type () {
      return (this.inputConfig.type) || null
    },
    returnValue () {
      if (this.isText || this.isSelect || this.isSwitch || this.isCheckbox || this.isRadio) {
        return this.value1
      } else if (this.isDate) {
        return this.dateValue
      } else if (this.isTime) {
        return this.timeValue
      } else if (this.isDateTime) {
        return {
          'date': this.dateValue,
          'time': this.timeValue,
          'datetime': this.dateValue + this.defaultDateTimeSeparator + this.timeValue
        }
      }
      return null
    }
  },
  props: {
    inputData: {},
    inputConfig: {
      type: Object,
      default: () => ({
        // name: 'mock',
        // label: 'mock label 1',
        // type: { 'name': 'text' }
      })
    },
    disabledControl: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    inputData (newInputData, oldInputData) {
      // console.log('newInputData', newInputData)
      this.updateValue(newInputData)
    },
    disabledControl (newDisabledControl) {
      this.disabled = newDisabledControl
    }
    // ,
    // inputConfig (newInputConfig) {
    //   console.log('new inpute config in dynamic input', newInputConfig)
    //   // console.log('newInputData', newInputData)
    //   if (newInputConfig.type.disabled) {
    //     this.disabled = true
    //   }
    //   this.disabled = false
    // }
  }
}
</script>

<style>
</style>
