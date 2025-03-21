<template>
  <div>
    <div class="detail-header">
      <el-button icon="el-icon-arrow-left" @click="goBack" class="back-button"></el-button>
      <h1>{{ map.name }}</h1>
    </div>
    <div class="detail-content">
      <img :src="map.src" alt="地图详情" class="detail-image">
      <!-- 显示地图描述 -->
      <p>地图描述：{{ map.description }}</p>
    </div>
  </div>
</template>

<script>
import mapData from '@/api/mapData';

export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.map = mapData.find(map => map.id === id);
    if (!this.map) {
      console.error('未找到对应 ID 的地图数据:', id);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.detail-header {
margin: 20px;
display: flex;
align-items: center;
}

.back-button {
margin-right: 20px;
}

.detail-content {
padding: 20px;
}

.detail-image {
width: 100%;
max-height: 600px;
object-fit: contain;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>