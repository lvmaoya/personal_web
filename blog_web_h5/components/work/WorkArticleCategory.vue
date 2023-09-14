<template>
  <div class="category">
    <ul id="navigationMenu">
      <li v-for="item in asideItem" :key="item.className" @click.stop="handleTagClick(item.id)">
        <a :class="item.className" class="backgroundSpan">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`${item.iconHref}`"></use>
          </svg>
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
  max-width: 550px;
  margin: 50px auto 42px;
}

#navigationMenu {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: space-around;

  li {
    list-style: none;
    text-align: center;
    list-style: none;

    a {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      // overflow: hidden;
      margin: 5px auto;
      text-align: center;
      z-index: 10;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        transition: .5s;
        opacity: 0;
      }

      // &:hover::after {}

      &:active::after {
        box-shadow: none;
        opacity: 1;
        transition: 0s;
      }

      .icon {
        width: 1.3em;
        height: 1.3em;
        color: white;
      }

    }

    .title {
      color: #555666;
      font-size: 0.875em;
      user-select: none;
    }

    .home {
      background-color: #6699cc;

      &::after {
        box-shadow: 0 0 6px 10px #6699cc;
      }
    }

    .search {
      background-color: #9999cc;

      &::after {
        box-shadow: 0 0 6px 10px #9999cc;
      }
    }

    .update {
      background-color: #cccc00;

      &::after {
        box-shadow: 0 0 6px 10px #cccc00;
      }
    }

    .hot {
      background-color: #cc9999;

      &::after {
        box-shadow: 0 0 6px 10px #cc9999;
      }
    }

    .category {
      background-color: #6699cc;

      &::after {
        box-shadow: 0 0 6px 10px #6699cc;
      }
    }
  }
}
</style>
