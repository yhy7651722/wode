<template>
    <div id="count">
    <div id="box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input prefix-icon="el-icon-user-solid
" clearable placeholder="username" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input prefix-icon="el-icon-lock
" show-password clearable type="password" placeholder="password" v-model="ruleForm.password"></el-input>
            </el-form-item>


            <el-form-item label="角色" prop="roles">
                <el-radio-group v-for="(item,index) in roles" :key="index" v-model="ruleForm.roles">
                    <el-radio :label=item></el-radio>

                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>

            </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script>
    import admin from "../data/admin"
    import students from "../data/students"
    import teacher from "../data/teacher"

    export default {
        name: "login1",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    roles: ''

                },
                roles: ['students', 'teacher', 'admin'],
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],

                    roles: [
                        {required: true, message: '请选择登陆人员', trigger: 'change'}
                    ],

                }
            };
        },
        methods: {
            submitForm(form) {
                // 1.箭头函数 2.把this存一个临时的变量 3.bind绑定this
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let role = this.ruleForm.roles;
                        let model = null;
                        if (role == "admin") {
                            model = admin
                        } else if (role == "students") {
                            model = students
                        } else {
                            model = teacher
                        }
                    let flag=model.filter(ele => ele.username == this.ruleForm.username && ele.password == this.ruleForm.password);
                        //  alert('submit!');

                        if(flag.length){
                            localStorage.user=JSON.stringify(flag[0]);
                            if(role=="students"){
                                this.$router.push({name:"student"})
                            }else {


                                this.$router.push({name: "index"})
                            }
                        }else {
                              this.$message.warning("用户名密码不匹配")
                        }

                    }
                });
            },

        }
    }
</script>
<style>


    .el-radio__label {
        padding-right: 10px;
    }
</style>

<style scoped>
    /*body, html {*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/

    #count {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background: #ffffff url("../assets/backg02.jpg") center /cover;
    }
    #box {
        position: absolute;
        height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        width: 350px;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: aliceblue;

    }
</style>