export default {
  desc: 'UI组件库',
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: ()=>import("@/frame/index.vue"),
      meta: {
        title: "UI组件"
      },
      children: [
        {
          path: 'gtecard',
          name: 'Card',
          component: () => import("@/views/ui/GteCard/index.vue"),
          meta: {
            title: "卡片"
          }
        },
        {
          path: 'gtelayout',
          name: 'LayOut',
          component: () => import("@/views/ui/GteLayout/index.vue"),
          meta: {
            title: "布局"
          }
        },
        {
          path: 'gteicon',
          name: 'Icon',
          component: () => import("@/views/ui/GteIcon/index.vue"),
          meta: {
            title: "图标"
          }
        }
      ]
    }
  ]
}
