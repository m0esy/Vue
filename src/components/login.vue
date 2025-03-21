<template>
  <div id='contain'>
    <div id='loginBox'>
      <el-form :model="user" ref="loginForm" label-width="80px">
        <h2>欢迎登录</h2>
        <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入账号'}]">
          <el-input v-model="user.username" autocomplete="off" placeholder="请输入账号" style="width: 300px;"></el-input>     
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码'}]">
          <el-input placeholder="请输入密码" autocomplete="off" v-model="user.password" show-password style="width: 300px;"></el-input>      
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkuser(user)">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async checkuser(user) {
      if (this.user.username === 'admin' && this.user.password === '123456') {
        // 登录成功，跳转到指定页面
        this.$router.push('/a');
      } else {
        alert('用户名或密码错误');
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 400px;
  height: 300px;
  border: 2px solid white;
  margin: auto;
  background: white;
}
#loginBox {
  width: 100%;
  height: 100vh;
  background: rgb(41, 160, 235);
}
.el-button {
  margin: 0 80px;
}
h2 {
  text-align: center;
  color: #B7D8E9;
}
</style>