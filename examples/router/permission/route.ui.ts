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
          name: 'Card',
          component: () => import("@/views/ui/GteLayout/index.vue"),
          meta: {
            title: "布局"
          }
        }
      ]
    }
  ]
}
