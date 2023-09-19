<template>
  <div class="detailArticle" ref="detailArticle">
    <div class="inner">
      <div class="content">
        <div class="desc">
          <div class="title">{{ articleDetail?.title }}</div>
          <div class="date">Published on {{ formatDate(articleDetail!.published_time) }}, with {{ pageview > 1 ? pageview
            + ' views' : pageview + ' view' }} and {{
    commentNum > 1 ? commentNum + ' comments' : commentNum + ' comment' }}
          </div>
        </div>
        <article>
          <ClientOnly>
            <v-md-preview :text="articleDetail?.content" ref="editor"></v-md-preview>
          </ClientOnly>
        </article>
        <!-- <LazyDetailFooterBar :article_id="article_id"></LazyDetailFooterBar> -->
      </div>
      <div class="navContent">
        <div class="navigation">
          <ul>
            <li v-for="anchor in v_titles"
              :class="{ level1: anchor.indent == 0, level2: anchor.indent == 1, level3: anchor.indent == 2 }"
              @click="handleAnchorClick(anchor)">
              <a style="cursor: pointer">{{ anchor.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comment">
      <LazyDetailComment :article_id="article_id" @commentNum="getCommentNum"></LazyDetailComment>
    </div>
    <!-- <ScrollTop></ScrollTop> -->
  </div>
</template>

<script setup lang="ts">
import { ArticleResType } from "~~/composables";
const route = useRoute();
const article_id = Number(route.params.id);

// 请求详情页数据  文本内容和数据详情
const articleDetail = ref<ArticleResType>();
const articleDetailRes = await getArticleDetail({ id: article_id });
articleDetail.value = articleDetailRes.data

useHead({
  title: articleDetail.value.title,
  meta: [
    { name: "description", content: articleDetail.value.description },
    {
      name: "keywords",
      content: articleDetail.value.title,
    },
  ],
});
const detailArticle = ref()
const v_titles = ref()
const editor = ref()
const preview = ref()
watch(editor, (newVal, val) => {
  preview.value = document.querySelector('.v-md-editor-preview')
  const anchors = preview.value.querySelectorAll('h1,h2,h3,h4,h5,h6');
  //@ts-ignore
  const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

  if (!titles.length) {
    v_titles.value = [];
    return;
  }
  //@ts-ignore
  const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

  v_titles.value = titles.map((el) => ({
    //@ts-ignore
    title: el.innerText,
    //@ts-ignore
    lineIndex: el.getAttribute('data-v-md-line'),
    //@ts-ignore
    indent: hTags.indexOf(el.tagName),
  }));
})

const handleAnchorClick = (anchor: any) => {
  const { lineIndex } = anchor;
  const heading = preview.value.querySelector(`[data-v-md-line="${lineIndex}"]`);
  if (heading) {
    editor.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    });
  }
}

// 请求浏览量和点赞数据
let dianZanNum = ref(0);
let pageview = ref(0);
let commentNum = ref(0)
// 获取点赞和评论的数量-----------------------------------------
const getPreferNum = async () => {
  const dianZanNumData = await getDianZanNum({ id: article_id });
  dianZanNum.value = dianZanNumData.data.dianZanNum;
  pageview.value = dianZanNumData.data.pageview;
};
await getPreferNum()
onMounted(() => {
  const changePV = debounce(async () => {
    await changePVData({ id: article_id });
  }, 0);
  // 访问数量控制
  const pvArticle = ref<Array<number>>([]);

  pvArticle.value = cookie.returnArrCookie("pvArticle") as number[];
  const changePageView = () => {
    if (pvArticle.value.length === 0) {
      changePV();
      cookie.setArrCookie("pvArticle", article_id, 1);
      getPreferNum();
    } else {
      if (pvArticle.value.includes(article_id)) {
        return getPreferNum();
      } else {
        changePV();
        cookie.setArrCookie("pvArticle", article_id, 1);
        getPreferNum();
      }
    }
  };
  // // 正确的做法是需要保证changepageview在前面，getprefernum在后面
  changePageView();
})
const getCommentNum = (value: number) => {
  commentNum.value = value
}
</script>

<style scoped lang="scss">
@media (max-width: 1096px) {
  .navContent {
    display: none !important;
  }
}

.detailArticle {
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 21;

  :deep(header) {
    top: 0 !important;
  }

  .navContent {
    position: relative;
    z-index: 0;
    max-width: 730px;
    margin-right: auto !important;
    margin-left: auto !important;
    text-align: right;

    .navigation {
      position: fixed;
      display: inline-block;
      top: 200px;
      z-index: 0;
      font-size: 13.5px;
      text-align: left;
      background: #fff;
      height: 50vh;
      padding-left: 5px;
      overflow-y: scroll;

      &>ul {
        position: relative;
        border-left: 1px solid #ddd;

        li {
          list-style: none;
          line-height: 1.6;

          a {
            white-space: nowrap;

            &:hover {
              color: #eb5055
            }
          }
        }

        .level1 {
          padding-left: 6px;

          a {
            color: #313131;

          }

          &::before {
            position: relative;
            top: 0;
            left: -10px;
            display: inline-block;
            width: 7px;
            height: 7px;
            content: '';
            border-radius: 50%;
            background-color: #eb5055;
          }
        }

        .level2 {
          padding-left: 20px;
          color: #5f5f5f;
        }
      }
    }
  }


  .content {
    margin: 0 auto;
    max-width: 700px;
    color: #313131;
    min-height: 100vh;

    .desc {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 66px;

      .title {
        font-size: 21px;
        font-weight: 500;
        line-height: 4em;
      }

      .date {
        font-size: 14px;
        // font-style: italic;
      }
    }

    :deep(.github-markdown-body) {
      padding: 0;
      font-size: 14px;
      line-height: 1.8;
      font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", Arial, Verdana, sans-serif;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 500;
        position: relative;
        margin: 20px 0;

        &::before {
          font-weight: 600;
          position: absolute;
          top: 0;
          left: -15px;
          content: '#';
          color: #eb5055;
        }
      }

    }
  }
}

.comment {
  position: relative;
  z-index: 21;
  color: #5f5f5f;
  background-color: #f7f7f7;
  padding: 30px 12px 0 12px;

}
</style>
