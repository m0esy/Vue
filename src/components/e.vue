<template>
    <div class="role-list">
      <el-row :gutter="20">
        <el-col :span="12" v-for="role in roles" :key="role.id">
          <el-card class="role-card" shadow="hover">
            <div class="card-hover-effect">
              <img :src="role.img" alt="角色头像" class="role-avatar">
              <div class="role-name">{{ role.name }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-button @click="showAllDetails" class="more-button">查看更多</el-button>
    </div>
  </template>
  
  <script>
  import roleData from '@/api/roles';
  
  export default {
    data() {
      return {
        roles: []
      };
    },
    mounted() {
      roleData.getRoles((data) => {
        this.roles = data;
        console.log('角色列表数据:', this.roles);
      });
    },
    methods: {
      showAllDetails() {
        console.log('点击查看更多，尝试跳转到所有角色详情页');
        this.$router.push({ name: 'AllRoleDetails' });
      }
    }
  };
  </script>
  
  <style scoped>
  .role-list {
    padding: 20px;
  }
  
  .role-card {
    height: 360px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .role-avatar {
    width: 100%;
    height: calc(100% - 30px);
    object-fit: cover;
  }
  
  .role-name {
    text-align: center;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .card-hover-effect {
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .role-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .more-button {
    margin-top: 20px;
    display: block;
    width: 100%;
  }
  </style>