// 组件
import gteUi from "./gteUi"
// 工具包
import gteUtil from "./gteUtils/index"
//工具组件
import gteTool from "./gteTool";


const cAndD = Object.assign({}, gteUi,gteTool);

const install = function (Vue: any) {
  if ((install as any).installed) return;
  for (const key in cAndD) {
    // @ts-ignore
    const item = cAndD[key];
    Vue.use(item);
  }
};
//  全局引用可自动安装
// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  install((window as any).Vue);
}

const exportLibs = Object.assign(
  {
    install,
    gteUtil
  },
  cAndD
);

export default exportLibs;
