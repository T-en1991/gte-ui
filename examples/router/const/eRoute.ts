export default {
  desc:"错误页面路由",
  data:[
    {
      path:'/404',
      name:'Page404',
      component:()=>import("@/views/Page404/index.vue")
    }
  ]
}
