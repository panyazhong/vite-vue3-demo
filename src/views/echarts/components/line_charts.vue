<template>
  <div id="line—chart" style="width: 100%; height: 500px"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
  setup() {
    const initChart = () => {
      var myChart = echarts.init(document.getElementById('line—chart'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '柱状图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params: any) {
            var tar;
            if (params[1].value !== '-') {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          },
        },
        legend: {
          data: ['支出', '收入'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          data: (function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
              list.push('11月' + i + '日');
            }
            return list;
          })(),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)',
            },
            barMaxWidth: 50,
            emphasis: {
              itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
              },
            },
            data: [
              0,
              900,
              1245,
              1530,
              1376,
              1376,
              1511,
              1689,
              1856,
              1495,
              1292,
            ],
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'top',
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'bottom',
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };

    onMounted(() => {
      initChart();
    });
  },
});
</script>

<style scoped lang="scss"></style>
