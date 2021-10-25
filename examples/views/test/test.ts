import Vue from 'vue'
import test from './index.vue'

export default {
  install(Vue:any){
    Vue.component('TestA',test)
  }
}
