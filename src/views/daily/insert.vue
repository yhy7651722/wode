<template>
  <div>
      <el-form :model="daily" ref="daily" :rules="rules">
          <el-form-item label="座右铭" prop="motto">
              <el-input v-model="daily.motto" placeholder="座右铭" minlength="10" maxlength="50" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="完成情况" prop="finish">
              <el-input  v-model="daily.finish" placeholder="完成情况" ></el-input>
          </el-form-item>
          <el-form-item label="完成内容" prop="content">
              <el-input type="textarea" v-model="daily.content" placeholder="完成内容" ></el-input>
          </el-form-item>
          <el-form-item label="心得体会" prop="felling">
              <el-input v-model="daily.felling" placeholder="心得体会" ></el-input>
          </el-form-item>
          <el-form-item label="建议" prop="suggest">
              <el-input v-model="daily.suggest" placeholder="建议" ></el-input>
          </el-form-item>
          <el-form-item label="遇到的问题" prop="problem">
              <el-input v-model="daily.problem" placeholder="遇到的问题" ></el-input>
          </el-form-item>
          <el-form-item label="其他" prop="other">
              <el-input v-model="daily.other" placeholder="其他" ></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitDaily">提交</el-button>

          </el-form-item>
      </el-form>
  </div>
</template>

<script>
    export default {
        name: "insert",
        data(){
            return{
                daily:{
                    names:"",
                    classes:"wuif1907-2",
                    motto:"",
                    content:"",
                    finish:'',
                    problem:"",
                    felling:"",
                    suggest:"",
                    other:""
                },rules:{
                    motto: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    finish: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    problem: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    felling: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    suggest: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    other: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],



                }

            }
        },
        methods:{
            submitDaily(){
                this.$refs.daily.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
               this.daily.names= JSON.parse(localStorage.user).username;
                fetch('http://www.daily-end.com/index/index/index',{
                    method:"POST",
                    body:JSON.stringify(this.daily),
                    headers: new Headers({
                        'content-type': 'application/json'
                    })
                })
                    .then(res=>res.json())
                    .then(data=>{
                      if(data.code==200){
                          this.$message.success(data.msg);
                             this.$refs.daily.resetFields()
                      }else {
                          this.$message.error(data.msg)
                      }
                    })

            }
        }
    }
</script>

<style scoped>

</style>