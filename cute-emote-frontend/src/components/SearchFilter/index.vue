<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="">{{headerLabel}}</span>
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
        <el-button type="primary" @click="submitForm()">Search</el-button>
        <el-button @click="resetForm()">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      headerLabel: 'Filtering',
      form: {
        searchQuery: '',
        ordering: ''
      },
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
  methods: {
    submitForm () {
      console.log('submit form')
    },
    resetForm () {
      console.log('reset form')
    }
  }
}
</script>

<style>

</style>
