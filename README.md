# zfg
这是一个基于 Vue.js 开发的综合性战术资源管理平台，集成了角色管理、地图管理、武器库、定位小游戏和数据可视化等核心功能。系统通过 Element UI 实现响应式布局，结合 Axios 模拟后端数据交互，并使用 ECharts 进行战术数据分析，具备丰富的用户交互和扩展能力。
核心功能扩展
1. 角色管理模块
角色列表页 ：
展示角色头像、名称、阵营和能力，支持悬停缩放动画。
点击角色卡片跳转详情页，显示角色背景故事和技能说明。
2. 地图管理模块
地图列表页 ：
以网格布局展示地图缩略图和名称，支持悬停动画。
点击地图进入详情页，显示地形分析和推荐战术。
3. 武器库模块
武器列表页：
使用 Axios 从虚拟 API 加载武器数据，展示枪械、装备的属性。
支持搜索、分类筛选和排序功能。
4. 定位小游戏
游戏入口 ：
基于 HTML5 地理定位 API 开发的战术演练游戏。
用户需在地图上标记目标点，系统实时反馈坐标和精度。
5. 数据可视化（ECharts）
战术分析页 ：
展示角色使用率、地图胜率等数据的折线图、柱状图。
支持动态加载 Axios 获取的虚拟统计数据。
技术栈升级
前端框架：Vue.js 2.x + Vue Router
UI 组件库：Element UI
数据交互：Axios（模拟 RESTful API）
图表库：ECharts 5.x
地理定位：HTML5 Geolocation API
状态管理：Vuex（可选，用于复杂数据流管理）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
