<!--
 * @Author: sun
 * @Date: 2022-11-07 09:59:25
 * @LastEditTime: 2023-02-17 08:50:02
 * @Description: Do not edit
-->
<template>
  <div class="statistics cont">
    <div class="title">
      <span>- Statistics</span>
    </div>
    <el-row :gutter="5">
      <el-col :span="6">
        <div class="count">{{ props.systemStatistics.articleCount }}</div>
        <div class="detailTitle">文章</div>
      </el-col>
      <el-col :span="6">
        <div class="count">{{ props.systemStatistics.likeCount }}</div>
        <div class="detailTitle">点赞</div>
      </el-col>
      <el-col :span="6">
        <div class="count">{{ props.systemStatistics.pvCount }}</div>
        <div class="detailTitle">访问</div>
      </el-col>
      <el-col :span="6">
        <div class="count">{{ props.systemStatistics.comment }}</div>
        <div class="detailTitle">评论</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  systemStatistics: {
    type: Object,
    default() {
      return {
        articleCount: 0,
        likeCount: 0,
        pvCount: 0,
        aboutSystem: "",
        comment: 0,
      };
    },
  },
});
</script>

<style scoped lang="scss">
.statistics {
  width: 100%;
  border-radius: 15px;
  background-color: var(--light_purple);
  box-sizing: border-box;
  box-shadow: -20px -20px 60px #ffffff;
  user-select: none;
  margin-top: 20px;
  .el-col {
    text-align: center;
    cursor: pointer;
  }
  .count {
    font-size: 1.5em;
    margin-bottom: 2px;
  }
}
.title {
  padding: 5px;
  font-size: 1.1em;
  color: #909399;
}
.detailTitle {
  font-size: 14px;
}
</style>
