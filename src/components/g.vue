<template>
    <div class="user-box">
    <el-table :data="users" border style="width: 100%" >
      <el-table-column type="selection" width="55" ></el-table-column>
       <el-table-column prop="id" label="编号" width="55"></el-table-column>
      <el-table-column sortable prop="date" label="日期" width="130"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="phone"  label="手机" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="320"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.status ? '启用' : '禁用' }}
        </template>
      </el-table-column>

      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
     
    </el-table>
     <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">新增</el-button>
     <el-dialog :title="dialogTitle" width="600px" :visible.sync="userFormVisible" @close="resetForm('userForm')">
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item label="姓名" prop="name" label-width="50px">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="50px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="50px">
          <el-input v-model="user.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" label-width="50px">
          <el-date-picker v-model="user.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" label-width="50px">
          <el-switch v-model="user.status" active-color="#13ce66"  inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser('userForm')">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      user: {
        id: '',
        date: '',
        name: '',
        phone: '',
        address: '',
        status: 0
      },//进行数据添加时用到的空对象
      dialogTitle: '',//弹出对话框的标题
       userFormVisible: false,//设置弹窗可见性
userBackup: Object.assign({}, this.user),

    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      this.loading = true
      axios.get('/api/user').then((res) => {
        this.users = res.data
      }).catch((err) => {
        console.error(err)
      })
    },
    handleDelete(index, row) {
      this.$confirm(`确定删除用户 【${row.name}】 吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.users.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        console.log('取消删除')
      })
    },
    submitUser (formName) {
      // 表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let id = this.user.id
          if (id) {
            // id非空-修改
            this.users.splice(this.rowIndex, 1, this.user)
          } else {
            // id为空-新增
            this.user.id = this.users.length + 1
            this.users.unshift(this.user)
          }
          this.userFormVisible = false
          this.$message({
            type: 'success',
            message: id ? '修改成功！' : '新增成功！'
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].clearValidate()
    },
    handleEdit (index, row) {
      this.dialogTitle = '编辑'
      this.user = Object.assign({}, row)
      this.userFormVisible = true
      this.rowIndex = index
    },
    handleAdd () {
      this.dialogTitle = '新增'
      this.user = Object.assign({}, this.userBackup)
      this.userFormVisible = true
    }




  }
}
</script>