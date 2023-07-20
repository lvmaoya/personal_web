<template>
  <div class="chart">
    <div class="line">
      <div class="title">- Browse Trends</div>
      <div class="lineChart"></div>
    </div>
    <div class="pie">
      <div class="title">- Article Category</div>
      <div class="pieChart"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onUpdated } from "vue";
let props = defineProps({
  pieChartData: {
    type: Object,
    default() {
      return {
        list: [],
      };
    },
  },
  lineChartData: {
    type: Object,
    default() {
      return {
        article: [],
        pageview: [],
        monthDath: [],
      };
    },
  },
});

let pieOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
    top: "7%",
  },

  series: [
    {
      name: "技术文章分布",
      type: "pie",
      radius: "50%",
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      center: ["62%", "50%"],
    },
  ],
};
let lineOption = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Article", "Browse"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Article",
      type: "line",
      data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135],
    },
    {
      name: "Browse",
      type: "line",
      data: [15, 23, 22, 21, 13, 17, 26, 15, 23, 22, 21, 15],
    },
  ],
};

const createChart = (ele: HTMLElement, opt: any) => {
  const pieChart = echarts.init(ele);
  opt && pieChart.setOption(opt);
};

onUpdated(() => {
  // 获取页面dom需挂载之后获取
  const pieChartDom = document.querySelector(".pieChart") as HTMLElement;
  const lineChartDom = document.querySelector(".lineChart") as HTMLElement;
  pieOption.series[0].data = props.pieChartData.list;
  lineOption.xAxis.data = props.lineChartData.monthData;
  lineOption.series[0].data = props.lineChartData.article;
  lineOption.series[1].data = props.lineChartData.pageview;
  createChart(pieChartDom, pieOption);
  createChart(lineChartDom, lineOption);
});
</script>

<style scoped lang="scss">
.chart {
  // padding-top: 60px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.pie {
  padding: 10px;
  width: 40%;
  background-color: var(--light_blue);
}
.line {
  padding: 10px;
  margin-right: 10px;
  width: 60%;
  background-color: var(--light_yellow);
}
.pieChart,
.lineChart {
  width: 100%;
  height: 300px;
}
.title {
  padding: 5px;
  font-size: 1.1em;
  color: #909399;
}
</style>
