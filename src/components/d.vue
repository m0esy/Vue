<template>
  <div class="list">
    <div class="item" v-for="goods in goodslist" :key="goods.id">
      <div class="item-l">
        <img class="item-img" :src="goods.img">
      </div>
      <div class="item-r">
        <div class="item-title">{{ goods.name }}</div>
        <div class="item-price">{{ goods.price | currency }}</div>
        <div class="item-text">{{ goods.text }}</div>
        <div class="item-opt">
          <button @click="insert(goods)">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'//导入map映射数据，可以方便使用store中的数据和方法

export default {
  computed: mapState({
    //将state中的商品列表数据作为goodslist计算属性
    goodslist: state => state.goods.goodslist
  }),
  //购物车模块中定义的insert()方法。点击按钮会把商品添加到购物车页面，这里可以暂时不写
  methods: mapActions('shopcart', ['insert']),
  //将商品列表数据从API中读取出来，保存到state中
  created () {
        this.$store.dispatch('goods/getList')
  },
  filters: {
    currency (value) {
      return '¥ ' + value
    }
  }
}
</script>
<style  scoped>
.list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto the next line */
}

.item {
  flex: 0 0 calc(50% - 20px); /* Set the initial size of the flex items to half the available space */
  margin-bottom: 15px;
  padding: 5px;
  display: flex;
}

.item-l {
  flex: 1;
}

.item-r {
  flex: 1;
  padding: 10px;
}

.item-img {
  width: 100%; /* 图片宽度占满 item 宽度 */
  height: auto;
  border-radius: 5px;
}

.item-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-price {
  font-size: 14px;
  color: #007bff;
  margin-bottom: 10px;
}

.item-opt button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.item-opt button:hover {
  background-color: #0056b3;
}

.list {
  line-height: 1.5;
}
</style>