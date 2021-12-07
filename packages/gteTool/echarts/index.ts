import entry from "./src/index.vue";
export default (Vue:any) => {
  Vue.component(entry.name, entry);
};
