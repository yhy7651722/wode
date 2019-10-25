<template>
    <div>
  <el-table :data="student">
      <el-table-column prop="id" label="ID" ></el-table-column>
      <el-table-column prop="username" label="姓名" ></el-table-column>
      <el-table-column label="操作">
          <template slot-scope="scope">

               <router-link tag="el-button" :to="{name:'studentEdit',params:{id:scope.row.id}}" > 编辑</router-link>

              <el-button @click="deleteStudent(scope.row.id)">
                  移除
              </el-button>
          </template>
      </el-table-column>
  </el-table>
    </div>
</template>

<script>
    import student from '../../data/students'
    export default {
        name: "query",
        data(){
            return{
                student:[],
            }
        },
        methods:{
            getStudent(){
               let s= JSON.parse(localStorage.getItem('form'));
                student.push(s);
                this.student=student
            },
            deleteStudent(id){

               this.student= this.student.filter(ele=>ele.id!=id)
            }
        }//生命周期

        // mounted() {
        //     this.getStudent()
        //
        // }
        ,beforeMount() {
            this.getStudent();
        }
    }
</script>

<style scoped>

</style>