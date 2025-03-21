<template>
    <div>
        <el-container style="height: 100vh">
            <el-aside width="200px">
                <div class="logo1">
                    <!-- 修改img样式，添加display: block -->
                    <img src="./../assets/csgo.png" alt="ElementUI" style="object-fit: contain; width: 200px; height: 100px; display: block;" />
                </div>
                <div class="tab">
                    <el-menu router default-active="/a" background-color="#20222A" text-color="rgba(255,255,255,.8)" active-text-color="#ffd04b">
                        <el-menu-item index="/a">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">主页</span>
                        </el-menu-item>
                        <el-menu-item index="/b">
                            <i class="el-icon-menu"></i>
                            <span slot="title">游戏模式</span>
                        </el-menu-item>
                        <el-menu-item index="/c">
                            <i class="el-icon-map-location"></i>
                            <span slot="title">地图</span>
                        </el-menu-item>
                        <el-menu-item index="/d">
                            <i class="el-icon-sunrise-1"></i>
                            <span slot="title">武器</span>
                        </el-menu-item>
                        <el-menu-item index="/e">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">角色</span>
                        </el-menu-item>
                        <!-- <el-menu-item index="/f">
                            <i class="el-icon-s-data"></i>
                            <span slot="title">排行榜</span>
                        </el-menu-item> -->
                        <el-menu-item index="/g">
                            <i class="el-icon-office-building"></i>
                            <span slot="title">社区</span>
                        </el-menu-item>
                        <!-- <el-menu-item index="/h">
                            <i class="el-icon-setting"></i>
                            <span slot="title">设置</span>
                        </el-menu-item> -->
                        <el-menu-item index="/i">
                            <i class="el-icon-thumb"></i>
                            <span slot="title">帮助与支持</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu default-active="/home" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 100%;height: 100px">
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.el-header {
    background-color: #409EFF;
    color: #fff;
    text-align: center;
    line-height: 100px;
    padding: 0;
    height: 100px;
    box-sizing: border-box;
}

.el-aside {
    background-color: #333;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.el-main {
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    line-height: normal;
    padding: 20px;
    margin-top: 40px; /* 调整 margin-top 为头部高度 */
    height: calc(100vh - 200px); /* 根据头部高度和 margin-top 调整 main 的高度 */
    overflow-y: auto;
    box-sizing: border-box;
}

.logo1 {
    padding: 0;  
    height: 100px;
    line-height: 0;
    font-size: 0;
}

.el-menu {
    border-right: none;
}

.el-menu-item {
    text-align: left;
    padding-left: 20px !important;
}
</style>    