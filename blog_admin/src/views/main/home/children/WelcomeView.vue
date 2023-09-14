<!--
 * @Author: sun
 * @Date: 2022-11-04 08:40:53
 * @LastEditTime: 2023-02-16 21:52:13
 * @Description: Do not edit
-->
<template>
  <div class="welcome cont">
    <div class="title">- About System</div>
    <div class="textContent">
      {{ systemStatistics.aboutSystem }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { systemStatisticsType } from "@/service/home";
import { inject } from "vue";

const systemStatistics = inject<systemStatisticsType>(
  "systemStatistics"
) as systemStatisticsType;
</script>

<style scoped lang="scss">
.welcome {
  margin-top: 10px;
  border-radius: 13px;
  background-color: var(--light_blue);

  .textContent {
    padding: 13px 23px 0px 23px;
    text-indent: 2em;
    line-height: 1.7em;
    font-size: 14px;
  }

  .title {
    padding: 5px;
    font-size: 1.1em;
    color: #909399;
  }
}
</style>
