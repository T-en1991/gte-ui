export default {
  desc:"常量路由",
  data:[
    {
      path:'/home',
      name:'Home',
      component:()=>import("@/views/Home/index.vue")
    }
  ]
}
