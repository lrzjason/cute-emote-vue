<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <dynamic-form
      :inputConfigs="inputConfigs"
      :data="formData"
      v-model="formData"
    >
      <span slot="footer"></span>
    </dynamic-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">{{cancelLabel}}</el-button>
      <el-button :type="submitStyle" @click="onSubmit">{{confirmLabel}}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import DynamicForm from '@/components/DynamicForm'
export default {
  data () {
    return {
      dialogVisible: false,
      formData: null
    }
  },
  components: {
    DynamicForm
  },
  methods: {
    onClose () {
      this.close()
    },
    onSubmit () {
      console.log('this.formData', this.formData)
      this.$emit('submit', this.formData)
      if (this.closeDialogOnSubmit) {
        this.close()
      }
    },
    open () {
      this.dialogVisible = true
    },
    close () {
      this.dialogVisible = false
    },
    handleClose (done) {
      // this.$confirm('Are you sure to close this dialog?')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
      done()
    }
  },
  props: {
    submitStyle: {
      type: String,
      default: 'primary'
    },
    closeDialogOnSubmit: {
      type: Boolean,
      default: true
    },
    confirmLabel: {
      type: String,
      default: 'Confirm'
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    title: {
      type: String,
      default: 'Default Title'
    },
    inputConfigs: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object
    }
  },
  watch: {
    data (newData) {
      this.formData = Object.assign({}, newData)
    }
  }
}
</script>

<style>

</style>
