<template>
  <div class="app-container" style="width:1600px; margin:auto;">
    <dialog-form
      ref="actionForm"
      :title="actionTitle"
      :data="data"
      :inputConfigs="inputConfigs"
      :confirmLabel="confirmLabel"
      :submitStyle="submitStyle"
      @submit="submit"
    />
    <h1>
      Users
    </h1>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          fit
          highlight-current-row
        >
          <el-table-column label="User Name" fixed>
            <template slot-scope="scope">
              <el-link type="success">{{ scope.row.uname }}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="Avatar">
            <template slot-scope="scope">
              <!-- <el-image
                style="width: 48px; height: 48px"
                :src="scope.row.avatar"
                :fit="'fill'"
              /> -->
              <img style="width: 48px; height: 48px" :src="scope.row.avatar" />
            </template>
          </el-table-column>
          <el-table-column label="Bilibili UID" fixed>
            <template slot-scope="scope">
              <el-link type="success" :href="b_space+scope.row.b_uid">{{ scope.row.b_uid }}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="Bilibili Channel ID" fixed>
            <template slot-scope="scope">
              <el-link type="success" :href="b_live+scope.row.b_channel_id">{{ scope.row.b_channel_id }}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="Action" width="180">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" alt="Update" circle @click="onUpdateItem(scope.row)" />
              <el-button type="danger" icon="el-icon-delete" alt="Delete" circle @click="onDeleteItem(scope.row)" />
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="">Action</span>
          </div>
          <el-button type="success" @click="onCreateItem"> Add </el-button>
        </el-card>
        <el-divider />
        <search-filter />
        <!-- <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="">Filtering</span>
          </div>
          <el-form ref="form" :model="form" label-width="120px" :label-position="'top'">
            <el-form-item label="Search">
              <el-input v-model="form.searchQuery" placeholder="Search">
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
            </el-form-item>
            <el-form-item label="Sort By (mock data)">
              <el-select v-model="form.ordering" placeholder="Select">
                <el-option
                  v-for="item in orderingOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Search</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import formConfigs from './formConfigs'
import { fetchList, createItem, updateItem, deleteItem } from '@/api/user'
import DialogForm from '@/components/DynamicForm/DialogForm'
import SearchFilter from '@/components/SearchFilter'

export default {
  mounted () {
    // console.log('inputConfigs', this.inputConfigs)
  },
  components: {
    DialogForm,
    SearchFilter
  },
  data () {
    return {
      b_space: '//space.bilibili.com/',
      b_live: '//live.bilibili.com/',

      action: 'createItem', // action should be a function name that imported from api
      createItem: createItem,
      updateItem: updateItem,
      deleteItem: deleteItem,
      data: {},
      actionTitle: 'Action Title',
      confirmLabel: 'Confim',
      submitStyle: 'primary',
      configs: null,
      formConfigs: formConfigs,
      inputConfigs: {},
      list: null,
      listLoading: true,
      form: {
        searchQuery: '',
        ordering: ''
      },
      //  ordering mock data
      orderingOptions: [{
        value: 'created_asc',
        label: 'Created At, Ascending'
      }, {
        value: 'created_desc',
        label: 'Created At, Descending'
      }, {
        value: 'name_asc',
        label: 'Name, Ascending'
      }, {
        value: 'name_desc',
        label: 'Name, Descending'
      }, {
        value: 'owner_asc',
        label: 'Owner, Ascending'
      }, {
        value: 'owner_desc',
        label: 'Owner, Descending'
      }, {
        value: 'usage_asc',
        label: 'Usage Count, Ascending'
      }, {
        value: 'usage_desc',
        label: 'Usage Count, Descending'
      }]
    }
  },
  computed: {
    calcHeight: function () {
      console.log('document.documentElement.clientHeight', document.documentElement.clientHeight)
      return document.documentElement.clientHeight - 271
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleClose (done) {
      // this.$confirm('Are you sure to close this dialog?')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
      done()
    },
    generateDataObj (row) {
      if (row) {
        return Object.assign({}, row)
      }
      // default value on create
      return {
        class_type: 'ce-chat'
      }
    },
    generateConfigs (disabled) {
      let configs = Object.assign({}, this.formConfigs)
      Object.keys(configs).forEach(configName => {
        configs[configName].type.disabled = disabled
      })
      return configs
    },
    onCreateItem () {
      console.log('create item')
      this.data = this.generateDataObj()
      this.action = 'createItem'
      this.actionTitle = 'Add User'
      let disabled = false
      this.inputConfigs = this.generateConfigs(disabled)
      this.$refs.actionForm.open()
    },
    onUpdateItem (row) {
      console.log('update item', row)
      this.data = this.generateDataObj(row)
      this.action = 'updateItem'
      this.actionTitle = 'Update User'
      let disabled = false
      this.inputConfigs = this.generateConfigs(disabled)
      this.$refs.actionForm.open()
    },
    onDeleteItem (row) {
      console.log('delete item', row)
      this.data = this.generateDataObj(row)
      this.action = 'deleteItem'
      this.actionTitle = 'Delete User'
      let disabled = true
      this.inputConfigs = this.generateConfigs(disabled)
      this.confirmLabel = 'Delete'
      this.submitStyle = 'danger'
      this.$refs.actionForm.open()
    },
    submit (data) {
      console.log('action', this.action)
      console.log('data', data)
      this[this.action](data).then(response => {
        console.log('response', response)
        this.fetchData()
      })
    },
    fetchData () {
      this.listLoading = true
      fetchList().then(response => {
        console.log('users getList response', response)
        this.list = response.data.items
        this.listLoading = false
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
