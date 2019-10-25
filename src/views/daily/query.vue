<template>
   <div v-if="dailyArr.length">
       <el-form :inline="true" :model="form"  class="demo-form-inline" style="line-height: 30px">

           <el-form-item label="内容">
               <el-input placeholder="搜索内容" v-model="form.content"></el-input>
           </el-form-item>

           <el-form-item label="时间">
               <el-col :span="11" style="width: 188px">
                   <el-date-picker type="date"
                                   placeholder="选择日期"
                                   v-model="form.ctime"
                                   style="width: 100%;"
                                   format="yyyy 年 MM 月 dd 日"
                                   value-format="yyyy-MM-dd"
                   ></el-date-picker>
               </el-col>

           </el-form-item>

           <el-form-item>
               <el-button type="primary" @click="getDaily(1)">查询</el-button>
           </el-form-item>
       </el-form>

       <el-table style="line-height: 30px" :data="dailyArr" >
           <el-table-column prop="motto" label="座右铭"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
           <el-table-column prop="finish" label="完成度"></el-table-column>
           <el-table-column prop="suggest" label="建议"></el-table-column>
           <el-table-column prop="problem" label="问题"></el-table-column>
           <el-table-column prop="felling" label="心得体会"></el-table-column>
           <el-table-column prop="other" label="其他"></el-table-column>
           <el-table-column prop="ctime" label="时间"></el-table-column>

       </el-table>
       <my-page :pageSize="size" :total="total" @changepage="getDaily"></my-page>
   </div>
</template>

<script>
    import {SUCCESS,FAIL} from "../../config/base";
    import myPage from '../../components/my-page'

    export default {
        name: "query",
        components: {myPage},

        data(){
            return{
                dailyArr:[],
                user:null,
                total:0,
                size:3,
                form:{
                    content:"",
                    ctime:""

                }


            }
        },
        computed:{
                objTranformQueryStirng(){
                    let str="";
                    for(let i in this.form){
                        let val =this.form[i];
                        if(val!=""){
                          str+= "&"+i+"="+ val
                        }
                    }
                    return str;
                }
        },

        methods:{

            getDaily(i=1){
                let user=this.user.username;

                let qs ='?names='+user+'&page='+i+'&size='+this.size+this.objTranformQueryStirng;
                fetch('http://www.daily-end.com/index/index/query'+qs)
                    .then(res=>res.json())
                    .then(data=>{
                       if(data.code==SUCCESS){
                           this.dailyArr=data.data;
                           this.total=data.count;

                       }else if(data.code==FAIL){
                           this.dailyArr=data.data;

                       }
                    })
            },
            getUser(){
                this.user=JSON.parse(localStorage.user)
            },


        },



        beforeMount() {
            this.getUser();
            this.getDaily();


        },
    }
</script>

<style scoped>

</style>