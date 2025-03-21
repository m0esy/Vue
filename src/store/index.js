import Vue from 'vue'  
import Vuex from 'vuex'
import goods from './modules/goods'  //引入商品详情页的modules
Vue.use(Vuex)  
//创建vuex实例并挂在详情页modules
export default new Vuex.Store({
  modules: {
    goods,
  }
})
