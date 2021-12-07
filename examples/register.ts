import Vue from "vue";
import gute from "../packages/index";
const {gteUtil} = gute;

// 注册组件
Vue.use(gute);

console.log(Vue)
// 注册脚本
Vue.prototype.$gte = gteUtil;
