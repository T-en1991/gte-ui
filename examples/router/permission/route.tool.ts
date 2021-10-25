// 权限菜单路由
export default {
  decp: "工具脚本",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component:()=>import("@/frame/index.vue"),
      meta: {
        title: "工具类gteUtil"
      },
      children: [
        {
          path: "jqJsonp",
          name: "JqJsonp",
          component: () => import("@/views/tool/gteJsonp/index.vue"),
          meta: {
            title: "jsonp"
          }
        },
        {
          path: "jqTimer",
          name: "JqTimer",
          component: () => import("@/views/tool/gteTimer/index.vue"),
          meta: {
            title: "timer"
          }
        }
      ]
    }
  ]
};
