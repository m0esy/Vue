<template>
    <div>
        <div class="header-container">
            <el-button icon="el-icon-arrow-left" @click="goBack" class="back-button"></el-button>
            <h1 v-if="$route.name === 'AllRoleDetails'">所有探员详细信息</h1>
            <h1 v-else>单个探员详细信息</h1>
        </div>
        <ul class="role-details-list">
            <li v-for="role in roles" :key="role.id">
                <p>角色名称: {{ role.name }}</p>
                <p>角色描述: {{ role.description }}</p>
                <!-- <p>角色头像: {{ role.img }}</p> -->
            </li>
        </ul>
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
            if (this.$route.name === 'AllRoleDetails') {
                this.roles = data;
            } else {
                const id = this.$route.params.id;
                this.roles = [data.find(role => role.id === Number(id))];
            }
        });
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.role-details-list {
    list-style-type: none; /* 移除列表项前面的标记 */
    padding: 0; /* 移除默认的内边距 */
    margin: 0; /* 移除默认的外边距 */
}

li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

.header-container {
    position: relative;
}

.back-button {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    /* 以下样式可以调整按钮大小和间距 */
    padding: 5px 10px; 
    font-size: 12px;
}
</style>