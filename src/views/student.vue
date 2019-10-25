<template>
    <div id="box">
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)" id="cont">
                <el-menu :default-openeds="['1']"
                         :router="true"
                   >

                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-s-unfold"></i>日报管理
                        </template>
                        <el-menu-item index="/student/insert">填写日报</el-menu-item>
                        <el-menu-item index="/student/select">查看日报</el-menu-item>
                    </el-submenu>


                </el-menu>
            </el-aside>
        </el-container>
        <el-container id="aaa">

            <div class="line"></div>
            <el-menu

                    class="el-menu-demo"
                    mode="horizontal"

                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3">消息中心</el-menu-item>
                <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
                  <div style="position: absolute;right: 200px;top:20px;">{{user.username}}</div>
            </el-menu>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>


    </div>
</template>

<script>
    export default {
        name: "student",
        data(){
            return{
                user:null
            }
        },
        methods:{
            getUser(){
                this.user=JSON.parse(localStorage.getItem('user'))
            }
        },
        beforeMount() {
            this.getUser()
        }
    }
</script>
<style>
    body, html {
        width: 100%;
        height: 100%;
    }

    .el-header {
        padding: 0;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }
    .el-main{
        color: #303133;
    }


</style>
<style scoped>

    #cont {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 200px;
        z-index: 200;


    }

    #aaa {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 200px;
        right: 0;
    }

    #app {
        width: 100%;
        height: 100%;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    a{
        color: #333333;
    }
    .router-link-exact-active{
        color: #4094fe;
    }
</style>



