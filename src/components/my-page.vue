<template>
    <div>
        <ul>
            <li style="line-height: 28px" :class="{active:current===i}" @click="pagechange(i)" v-for="i in pageNumber" :key="i">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-page",
        props:{
            total:{
                required:true,
                type:Number,
            },
            pageSize:{
                type: Number,
                default:3
            },

        },
        computed:{
            pageNumber(){
                return Math.ceil(this.total/this.pageSize);
            }
        },
        data(){
            return {
                current:1
            }
        },
        methods:{
            pagechange(i){
             if(this.current==i){
                return;
             }
                this.$emit('changepage',i);
                this.current=i;
            }
        }
    }
</script>

<style scoped>
    ul{
        max-width: 400px;
        height: 28px;
        cursor: pointer;
    }
    ul>li{
        float: left;
        width: 28px;
        background-color: aqua;
        margin-left: 6px;
    }
    .active{
        background-color: lavenderblush;
    }
</style>