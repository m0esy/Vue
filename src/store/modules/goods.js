import shop from '../../api/shop'  //引入商品信息

const state = { 
  goodslist: []//goodslist用来保存商品信息
}

const getters = {}//如果要根据goodslist生成别的数据，可以在这里操作

// 异步获取商品列表数据
const actions = {
  getList ({ commit }) {
    shop.getGoodsList(data => {
      commit('setList', data)
    })
  }
}
// 将商品列表保存到state的goodslist中
const mutations = {
  setList (state, data) {
    state.goodslist = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
