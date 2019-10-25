<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>添加学生</el-breadcrumb-item>

            </el-breadcrumb>
            <el-divider></el-divider>
        </div>
        <el-form :model="form" ref="form" label-width="80px" :rules="rules" >
            <el-form-item label="姓名"  prop="username">
                <el-input  v-model="form.username" placeholder="Username" clearable>
                    <i slot="prefix"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="年龄"  prop="age">
                <el-input  v-model="form.age" placeholder="Age" clearable>
                    <i slot="prefix"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio label="男" v-model="form.sex"></el-radio>
                <el-radio label="女" v-model="form.sex"></el-radio>

            </el-form-item>
            <el-form-item label="班级" prop="classes">
                <el-select v-model="form.classes" clearable placeholder="请选择">
                    <el-option
                            v-for="item in classes"
                            :key="item.cid"
                            :label="item.cname"
                            :value="item.cname">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学号" prop="num">
                <el-input  v-model="form.num" placeholder="Num" clearable>
                    <i slot=""></i>
                </el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tell">
                <el-input  v-model="form.tell" placeholder="Tell" clearable>
                    <i slot=""></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input  v-model="form.password" placeholder="Password" clearable>
                    <i slot=""></i>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submit('form')">提交</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: {
                    id: '',
                    username: "",
                    sex: "",
                    age: "",
                    classes: "",
                    num: "",
                    tell: "",
                    password: ""

                },
                classes: [
                    {cid: 1, cname: "wuif1097-2"},
                    {cid: 2, cname: "wuif1097-3"},
                    {cid: 3, cname: "wuif1097-1"},
                ],
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选性别', trigger: 'change'}

                    ],
                    classes: [
                        {required: true, message: '请输入班级', trigger: 'change'},

                    ],
                    num: [
                        {required: true, message: '请输入学号', trigger: 'blur'},
                    ],
                    tell: [
                        {required: true, message: '请输入电话号', trigger: 'blur'},
                    ],
                    age: [
                        {required: true, message: '请输入年龄', trigger: 'blur'},
                        {min: 1, max: 2, message: '长度在 1 到 2 个字符', trigger: 'blur'}
                    ],


                }

            }
        },
        methods: {
            submit(form) {
                this.$refs[form].validate((valid) => {
                    console.log(this.form);
                    if (valid) {

                        this.form.id=Date.now();
                        let form=this.form;
                        localStorage.form=JSON.stringify(form);
                        alert('submit!');
                    } else {

                        return false;
                    }
                });
            },

        }
    }
</script>

<style scoped>
.el-form{
width: 500px;
}
</style>