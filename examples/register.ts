import Vue from "vue";
import gute from "../packages/index";
const {gteUtil} = gute;

// 注册组件
Vue.use(gute);
// 注册脚本
Vue.prototype.$gte = gteUtil;
