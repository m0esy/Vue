<template>
  <div class="map-container">
    <div 
      v-for="map in maps" 
      :key="map.id" 
      class="map-card"
      @click="goToDetail(map.id)"
    >
      <div class="card-hover-effect">
        <img :src="map.src" alt="地图缩略图" class="map-image">
        <div class="map-name">{{ map.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mapData from '@/api/mapData';

export default {
  data() {
    return {
      maps: mapData
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'MapDetail', params: { id } });
    }
  }
};
</script>

<style scoped>
.map-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.map-card {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.map-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.map-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.map-name {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  background-color: #f8f9fa;
}

.card-hover-effect {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>