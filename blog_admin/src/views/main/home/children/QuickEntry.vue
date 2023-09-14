<!--
 * @Author: sun
 * @Date: 2022-11-07 10:00:40
 * @LastEditTime: 2023-02-17 08:48:47
 * @Description: Do not edit
-->
<template>
  <div class="entry cont">
    <div class="title">
      <span>- Express Way</span>
    </div>
    <!-- 文章管理，发布文章，个人信息，系统用户，回收站，娱乐中心 -->

    <el-row :gutter="5" justify="center">
      <el-col :span="8" v-for="item in expressConfig" :key="item.name" @click="handleExpressWayClick(item.name)">
        <div class="icon">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
        </div>
        <div class="detailTitle">{{ item.title }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let expressConfig = ref([
  {
    name: "articleList",
    icon: "Reading",
    title: "文章管理",
  },
  {
    name: "editArticle",
    icon: "EditPen",
    title: "发布文章",
  },
  {
    name: "category",
    icon: "Grid",
    title: "文章分类",
  },
  {
    name: "comment",
    icon: "Comment",
    title: "评论审核",
  },
  {
    name: "temporaryStorage",
    icon: "Box",
    title: "暂存箱",
  },
  {
    name: "recycleBin",
    icon: "Delete",
    title: "回收站",
  },

]);
const handleExpressWayClick = (val: string) => {
  router.push({
    name: val,
  });
};
</script>

<style scoped lang="scss">
.entry {
  width: 100%;
  border-radius: 15px;
  background-color: var(--light_green);
  box-sizing: border-box;
  box-shadow: -20px -20px 60px #ffffff;
  padding-bottom: 40px;
  user-select: none;
  margin-top: 20px;

  .el-col {
    text-align: center;
    margin-top: 40px;
    cursor: pointer;
    transition: color 0.2s ease-in;
  }

  .el-col:hover {
    color: rgb(84, 112, 198);
  }

  .icon {
    font-size: 2em;
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
