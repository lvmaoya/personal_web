<!--
 * @Author: sun
 * @Date: 2022-11-08 08:57:35
 * @LastEditTime: 2022-12-13 12:00:17
 * @Description: Do not edit
-->
<template>
  <div class="home">
    <el-row :gutter="20">
      <!-- 个人待办 -->
      <!-- 数据统计 -->
      <!-- 图表统计 -->
      <el-col :span="24">
        <ChartsView
          :pieChartData="pieChartData"
          :lineChartData="lineChartData"
        ></ChartsView>
      </el-col>
      <!-- 快捷入口 -->
      <el-col :span="12" class="expressWay">
        <QuickEntry></QuickEntry>
      </el-col>
      <el-col :span="12">
        <StatisticsView :systemStatistics="systemStatistics"></StatisticsView>
        <WelcomeView></WelcomeView>
      </el-col>

      <!-- 系统概况 -->
      <el-col :span="24"> </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  getPieData,
  getSystemStatistics,
  getLineData,
  type lineDataType,
  type pieDataType,
  type systemStatisticsType,
} from "@/service/home";
import { provide, ref } from "vue";
import ChartsView from "./children/ChartsView.vue";
import QuickEntry from "./children/QuickEntry.vue";
import StatisticsView from "./children/StatisticsView.vue";
import WelcomeView from "./children/WelcomeView.vue";

let systemStatistics = ref<systemStatisticsType>({
  articleCount: 0,
  likeCount: 0,
  pvCount: 0,
  aboutSystem: "",
  comment: 0,
});
let pieChartData = ref<pieDataType>({
  list: [],
});
let lineChartData = ref<lineDataType>({
  article: [0],
  pageview: [0],
  monthData: [],
});
const getSystemStatisticsData = async () => {
  const systemStatisticsRes = await getSystemStatistics();
  systemStatistics.value = systemStatisticsRes.data;
};
getSystemStatisticsData();
const getPieChartData = async () => {
  const pieData = await getPieData();
  if (pieData.code == 0) {
    pieChartData.value = pieData.data;
  }
};
const getLineChartData = async () => {
  const lineData = await getLineData();
  if (lineData.code == 0) {
    lineChartData.value = lineData.data;
  }
};
getPieChartData();
getLineChartData();
// 提供给底部系统描述
provide("systemStatistics", systemStatistics);
</script>

<style scoped lang="scss">
.home {
  padding: 10px;
}
.expressWay {
  padding-right: 0 !important;
}
</style>
