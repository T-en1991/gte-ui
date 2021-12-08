// 权限菜单路由
export default {
  decp: "工具类组件",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: ()=>import("@/frame/index.vue"),
      meta: {
        title: "工具组件"
      },
      children: [
        {
          path: "gtemap",
          name: "gtemap",
          component: () => import("@/views/tc/gtemap/index.vue"),
          meta: {
            title: "地图加载器"
          }
        },
        {
          path: "gteecharts",
          name: "gteecharts",
          component: () => import("@/views/tc/gteecharts/index.vue"),
          meta: {
            title: "echarts加载器"
          }
        },
        {
          path: "gteImgload",
          name: "gteImgload",
          component: () => import("@/views/tc/gteImgload/index.vue"),
          meta: {
            title: "图片上传"
          }
        }
      ]
    }
  ]
};
