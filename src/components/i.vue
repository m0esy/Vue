<template>
  <div class="container">
    <div ref="echartsContainer" class="chart" style="width: 600px; height: 400px;"></div>
    <div ref="echartsContainer2" class="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>

 
<script>
import * as echarts from 'echarts';
 
export default {
  name: 'EChartsComponent',
  mounted() {
    var myChart = echarts.init(this.$refs.echartsContainer);
    myChart.setOption({
      title: {
        text: '市场'
      },
      tooltip: {},
      xAxis: {
        data: ['USP', 'AK47', '匕首', 'AWP', 'M4A4', 'P2000']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

     var myChart2 = echarts.init(this.$refs.echartsContainer2);
  myChart2.setOption({
      title: {
      text: '购买枪械',
      subtext: '剩余时间',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '价格',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 2900, name: 'M4A1' },
          { value: 1700, name: 'SSG 08' },
          { value: 3300, name: 'AUG' },
          { value: 4750, name: 'AWP' },
          { value: 2700, name: 'AK47' }
          
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  }
}
</script>
 
<style>
.container {
  display: flex;
}

.chart {
  flex: 1;
  margin-right: 10px; /* 可以根据需要调整间距 */
}

</style>
