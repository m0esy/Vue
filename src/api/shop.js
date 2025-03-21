const data = [
    {
      id: 1,
      img: require("@/assets/a.jpg"),
      name: "AWP|树蝰",
      text: " 黑色案底上手绘了一条富有冲击力的蓝色树蝰. 危险的事固然美丽",
      price: 79.1,
    },
    {
      id: 2,
      img: require("@/assets/ak47.jpg"),
      name: "AWP|二西莫夫",
      text: "  这把武器的定制灵感来源于塔罗牌中的皇后。 财富有多种形式。",
      price: 824.5,
    },
    {
      id: 3,
      img: require("@/assets/c.jpg"),
      name: "AK47|皇后",
      text: " 这把武器在纯黑的底色上使用了粉色、蓝色、以及紫色的定绘。 谵妄为危。",
      price: 863,
    },
    {
      id: 4,
      img: require("@/assets/cz75.jpg"),
      name: "CZ75|先驱",
      text: "这把武器使用红色和灰色的赛车主题图案进行了自定义涂装。",
      price: 12.89,
    },
    {
      id: 5,
      img: require("@/assets/m4a4.jpg"),
      name: "M4A4|咆哮",
      text: " 这把武器使用咆哮饿狼的图像进行了自定义涂装。",
      price: 45200,
    },
    {
      id: 6,
      img: require("@/assets/b.jpg"),
      name: "AWP|浮生如梦",
      text: "这把武器使用科幻设计进行了自定义涂装。 平凡人预测未来… 梦想家塑造未来",
      price: 355.03,
    },
    {
      id: 7,
      img: require("@/assets/d.jpg"),
      name: "骷髅匕首",
      text: "这把镂空的匕首被绑在握把上以提升握感。刀身上的空洞允许手指伸过。",
      price: 11250,
    },
    {
      id: 8,
      img: require("@/assets/p2000.jpg"),
      name: "P2000|火灵",
      text: "精准、可控，这把德国制造的耐用手枪非常适合对付那些没有穿护甲的对手。",
      price: 355.03,
    }

  ]
  
  export default {
    getGoodsList(callback) {
      setTimeout(() => callback(data), 100)
    }
  }
  
