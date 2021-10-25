import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式
import "@/style/index.less";

// 注册组件库组件
// import "./register.ts";

// import ui from '../examples/views/test/test'
//
// Vue.use(ui)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
