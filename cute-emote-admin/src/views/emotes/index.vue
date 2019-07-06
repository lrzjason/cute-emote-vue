<template>
  <div class="app-container" style="width:1600px; margin:auto;">
    <dynamic-form />
    <h1>
      Emote Library
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
          <el-table-column label="Name" fixed>
            <template slot-scope="scope">
              <el-link type="success">{{ scope.row.text }}</el-link>
              by
              <el-link type="success">AshesJason (mock user)</el-link></template>
          </el-table-column>
          <el-table-column label="Usage Count">
            1 (mock count)
          </el-table-column>
          <el-table-column label="Image">
            <template slot-scope="scope">
              <el-row>
                <el-col :span="12">
                  <div>Chat</div>
                  <el-image
                    style="width: 30px; height: 30px"
                    :src="scope.row.image_src"
                    :fit="'fill'"
                  />
                </el-col>
                <el-col :span="12">
                  <div>Damaku</div>
                  <el-image
                    style="width: 48px; height: 48px"
                    :src="scope.row.image_src"
                    :fit="'fill'"
                  />
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="Action" width="180">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" alt="Update" circle @click="updateItem(scope.row)" />
              <el-button type="danger" icon="el-icon-delete" alt="Delete" circle @click="deleteItem(scope.row)" />
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="">Action</span>
          </div>
          <el-button type="success" @click="addItem"> Add </el-button>
        </el-card>
        <el-divider />
        <el-card class="box-card">
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchList } from '@/api/emotes'
import DynamicForm from '@/components/DynamicForm'
// import { fetchList } from '@/api/table'

export default {
  components: {
    DynamicForm
  },
  data () {
    return {
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
    addItem () {
      console.log('add item')
    },
    updateItem (row) {
      console.log('update item', row)
    },
    deleteItem (row) {
      console.log('delete item', row)
    },
    fetchData () {
      this.listLoading = true
      fetchList().then(response => {
        console.log('emotes getList response', response)
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
