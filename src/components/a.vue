<template>
  <div>
    <el-carousel :interval="3000" arrow="always" style="width: 100%; height: 400px;">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img :src="require(`@/assets/${item}`)" style="width: 100%; height: 100%; object-fit: contain;" />
        
      </el-carousel-item>
    </el-carousel>
    <p style="font-family: 'KaiTi', serif; line-height: 1.5; font-size: 20px;">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: ['1.jpg', '2.jpg', '3.jpg'],
      msg: "CS:GO（Counter-Strike: Global Offensive）是一款由Valve Corporation和Hidden Path Entertainment合作开发的多人在线第一人称射击游戏。 玩家可以选择加入反恐精英（CT）或恐怖分子（T）两个对立的阵营进行战斗。 游戏包含经典模式、竞赛模式、爆破模式和人质模式等多种游戏模式，拥有多个经典地图和丰富的武器系统。 作为一款电子竞技游戏，《CS:GO》在全球范围内拥有活跃的竞技比赛和社区，吸引了大量玩家和观众参与。 游戏不断更新改进，同时也有丰富的社区内容，如皮肤和工坊地图。 <CS:GO>以其紧张刺激的游戏体验、高度的竞技性和深厚的战术性而备受玩家喜爱。",
    };
  },
};
</script>