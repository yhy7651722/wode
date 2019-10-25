import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import "u-reset.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vcharts from 'v-charts';




import login from "./views/login"
import index from "./views/index"
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(vcharts);




import studentAdd from './views/student/add'
import studentQuery from './views/student/query'
import studentEdit from './views/student/edit'
import student from './views/student'
import insert from './views/daily/insert'
import select from './views/daily/query'
import vchar  from './views/v-chart'
let router=new VueRouter({
  routes: [

    {path:'/',component:index,name:"index",meta:{title:"学生日报系统"},
      children:[{path:'studentAdd',component:studentAdd,meta:{title:"学生添加"}},
        {path:'studentQuery',component:studentQuery,meta:{title:"学生查看"}},
          {path:'studentEdit/:id',component:studentEdit,name:"studentEdit",meta:{title:"学生编辑"}},
          {path:'/vchar',component:vchar,meta:{title:"数据可视化"}},
       ]
     },
    {path:'/login',component:login},


      {path:'/student',component:student,name:"student",meta:{title:"学生主界面"},
          children:[{path:'insert',component:insert,meta:{title:"填写日报"}},
              {path:'select',component:select,meta:{title:"查看日报"}},

      ]}

  ]
});
//导航守卫
//组件切换 设置文档标题
/**
 * 1.监听组件切换
 * 2.当前组件对应的标题
 * 3.设置文档的标题
 */
router.beforeEach((to,from,next)=>{
    let title = to.meta.title;
    document.title = title;
    next();
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
