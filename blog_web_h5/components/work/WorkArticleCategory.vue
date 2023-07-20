<!--
 * @Author: sun
 * @Date: 2022-12-29 21:11:27
 * @LastEditTime: 2023-03-06 19:28:42
 * @Description: Do not edit
-->
<template>
  <div class="category">
    <ul id="navigationMenu">
      <li v-for="item in asideItem" :key="item.className" @click.stop="handleTagClick(item.id)">
        <a :class="item.className">
          <span class="backgroundSpan">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`${item.iconHref}`"></use>
            </svg>
          </span>
        </a>
        <span class="title">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["tagClick"]);

const asideItem = ref([
  {
    id: 1,
    className: "home",
    iconHref: "#icon-home-filling",
    title: "所有文章",
  },
  {
    id: 2,
    className: "search",
    iconHref: "#icon-sousuo",
    title: "搜索",
  },
  {
    id: 3,
    className: "update",
    iconHref: "#icon-gengxin",
    title: "最近更新",
  },
  {
    id: 4,
    className: "hot",
    iconHref: "#icon-hot",
    title: "热门",
  },
  {
    id: 5,
    className: "category",
    iconHref: "#icon-fenlei",
    title: "标签",
  },
]);
const handleTagClick = (value: number) => {
  emit("tagClick", value);
};
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  margin: 50px auto 42px;
}
#navigationMenu {
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-around;
  li {
    list-style: none;
    text-align: center;

    a {
      height: 2.5em;
      width: 2.5em;
      display: block;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      margin: 5px auto;

      .backgroundSpan {
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        line-height: 2.8em;
        text-align: center;
        z-index: 10;
        .icon {
          width: 1.3em;
          height: 1.3em;
          color: white;
        }
      }
    }
    .title {
      color: #555666;
      font-size: 0.875em;
      user-select: none;
    }
    .home {
      .backgroundSpan {
        background-color: #6699cc;
      }
    }
    .search {
      .backgroundSpan {
        background-color: #9999cc;
      }
    }
    .update {
      .backgroundSpan {
        background-color: #cccc00;
      }
    }
    .hot {
      .backgroundSpan {
        background-color: #cc9999;
      }
    }
    .category {
      .backgroundSpan {
        background-color: #6699cc;
      }
    }
  }
}
</style>
