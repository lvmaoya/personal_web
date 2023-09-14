<template>
  <div class="chart">
    <div class="line">
      <div class="title">- Browse Trends</div>
      <div id="lineChart" ref="lineChartRef"></div>
    </div>
    <div class="pie">
      <div class="title">- Article Category</div>
      <div id="pieChart" ref="pieChartRef"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from 'vuex'

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
watch(props, () => {
  initPieChart()
  initLineChart()
}, { deep: true })
const initPieChart = () => {
  var chartDom = document.getElementById('pieChart');
  if (chartDom) {
    let existInstance = echarts.getInstanceByDom(chartDom);
    if (existInstance) {
      if (true) {
        echarts.dispose(chartDom)
      }
    }
  }

  var myChart = echarts.init(chartDom);
  let pieOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      top: 'center',
      left: '0',
      orient: 'vertical'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        // avoidLabelOverlap: false,
        right: '0%',
        // label: {
        //   normal: {
        //     show: false,
        //   },
        // },
        // labelLine: {
        //   normal: {
        //     show: false
        //   }
        // },
        data: props.pieChartData.list
      }
    ]
  };
  pieOption && myChart.setOption(pieOption);
}
const initLineChart = () => {
  var chartDom = document.getElementById('lineChart');
  if (chartDom) {
    let existInstance = echarts.getInstanceByDom(chartDom);
    if (existInstance) {
      if (true) {
        echarts.dispose(chartDom)
      }
    }
  }
  var myChart = echarts.init(chartDom);
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
      data: props.lineChartData.monthData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Article",
        type: "line",
        data: props.lineChartData.article,
      },
      {
        name: "Browse",
        type: "line",
        data: props.lineChartData.pageview,
      },
    ],
  };
  lineOption && myChart.setOption(lineOption);
}



const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)
watch(isCollapse, () => {
  setTimeout(() => {
    initPieChart()
    initLineChart()
  }, 1000);
})

onMounted(() => {
  initPieChart()
  initLineChart()
  window.addEventListener('resize', () => {
    initPieChart()
    initLineChart()
  })
})
</script>

<style scoped lang="scss">
.chart {
  // padding-top: 60px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.pie {
  padding: 10px 0 10px 10px;
  width: 40%;
  border-radius: 13px;
  background-color: var(--light_blue);
}

.line {
  padding: 10px;
  margin-right: 10px;
  width: 60%;
  border-radius: 13px;
  background-color: var(--light_yellow);
}

#pieChart,
#lineChart {
  width: 100%;
  height: 350px;
}

.title {
  padding: 5px;
  font-size: 1.1em;
  color: #909399;
}
</style>
