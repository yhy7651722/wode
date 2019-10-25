<template>
    <div>

        <!--面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>查看日报可视化</el-breadcrumb-item>

        </el-breadcrumb>

        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <ve-bar :data="lineData" :settings="lineSettings" ></ve-bar>

                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <ve-line :data="lineData1"  ></ve-line>

                </div>
            </el-col>

        </el-row>


    </div>
</template>

<script>
    export default {
        name: "chart",
        data(){
            this.lineSettings = {
                labelMap:{
                    'number':'每日提交量'
                }

            };
            return{

                lineData:{
                    columns:['date','number'],
                    rows:[
                        {date:'2019-10-21',number:'41'},
                        {date:'2019-10-22',number:'42'},
                        {date:'2019-10-23',number:'30'},
                        {date:'2019-10-24',number:'20'},
                        {date:'2019-10-25',number:'40'},
                        {date:'2019-10-26',number:'10'},
                    ]
                },
                lineData1:{
                    columns:['date','status','skill'],
                    rows:[
                        {date:'2019-10-21',status:100,skill:0},
                        {date:'2019-10-22',status:90,skill:20},
                        {date:'2019-10-23',status:50,skill:50},
                        {date:'2019-10-24',status:80,skill:70},
                        {date:'2019-10-25',status:90,skill:80},
                        {date:'2019-10-26',status:70,skill:90},
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
