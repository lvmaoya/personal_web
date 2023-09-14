<template>
  <div class="comment">
    <ul>
      <li>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-eye1"></use>
          </svg>
        </span>
        <span> {{ pageview > 10000 ? `${(pageview / 10000).toFixed(1)}` + "w" : pageview }} </span>
      </li>
      <li @click="handleDianzanClick">
        <span>
          <svg class="icon" aria-hidden="true" :style="isPraise ? 'color:#fc5531' : 'color:gray'">
            <use xlink:href="#icon-dianzan1"></use>
          </svg>
        </span>
        <span> {{ dianZanNum }} </span>
      </li>
      <li @click.stop="handlePinglunClick" class="pinglun">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai16"></use>
          </svg>
        </span>
        <span> {{ commentNum }} </span>
      </li>
      <li>
        <ToolTip tip-text="暂时不支持打赏">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hongbao"></use>
            </svg>
          </span>
        </ToolTip>
      </li>
      <li>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang1"></use>
          </svg>
        </span>
      </li>
    </ul>
    <div :class="`${drawerActive ? 'drawerActive drawer' : 'drawer'}`">
      <div class="drawerScroll">
        <div class="drawerHeader">
          <span>评论</span>
          <span @click.stop="handleCancelClick">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-cha"></use>
            </svg>
          </span>
        </div>
        <div class="drawerBody">
          <div class="commentListEdit">
            <div class="userImg" v-html="avatar"></div>
            <div id="commentForm">
              <textarea name="commentContent" ref="textareaRef" id="commentContent" placeholder="欢迎您的评论，低质的评论会被折叠"
                maxlength="1000" v-model="textareaText"></textarea>
              <div class="commentOperate">
                <div class="comment-operate-l">
                  <span>还能输入<em>{{ maxlength }}</em>个字符</span>
                </div>
                <div class="comment-operate-r">
                  <button class="btnComment" @click="handleCommentClick">评论</button>
                </div>
              </div>
            </div>
          </div>
          <div class="commentListContainer">
            <div class="commentListBox">
              <ul>
                <li class="commentLi" v-for="item in commentText" :key="item.commentary_id">
                  <div class="commentListItem">
                    <div class="userImg" v-html="multiavatar(item.avatar)"></div>
                    <div class="right-box">
                      <div class="new-info-box">
                        <div class="comment-top">
                          <div class="user-box">
                            <div class="name">
                              <div class="commentName">{{ item.user_name }}</div>
                              <div v-if="item.comment_type == 1" class="anwserName">
                                <span class="answerText">回复</span>
                                <span class="anwserNameContent">
                                  {{ item.to_name }}
                                </span>
                              </div>
                            </div>
                            <div class="date">
                              {{ formatTime(item.created_time).toString().substring(2) }}
                            </div>
                          </div>
                          <div class="response-box" @click="handleResponseSBClick(item.commentary_id, item.user_name)">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-xiazai16"></use>
                            </svg>
                          </div>
                        </div>
                        <div class="comment-center">
                          <div class="new-comment">{{ item.content }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="commentLookMore"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialogTip" v-if="userNameCommitVisible" @mousewheel.prevent>
      <div class="userNameForm">
        <div class="dialogTitle">
          <span>用户名</span>
        </div>
        <div class="dialogBody">
          <input type="text" v-model="userName" placeholder="仅用于评论展示" maxlength="10" />
        </div>
        <div class="dialogFooter">
          <button @click.stop="userNameCommitVisible = false">取消</button>
          <button @click.stop="handleCommitUserName">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PinglunItemType } from "~~/composables";
import { multiavatar } from "~~/public/avatar";
const props = defineProps({
  article_id: {
    required: true,
    type: Number,
  },
});
// 请求浏览量和点赞数据
let dianZanNum = ref(0);
let pageview = ref(0);
// 获取点赞和评论的数量-----------------------------------------
const getPreferNum = debounce(async () => {
  const dianZanNumData = await getDianZanNum({ id: props.article_id });
  dianZanNum.value = dianZanNumData.data.dianZanNum;
  pageview.value = dianZanNumData.data.pageview;
}, 0);
// 判断是否点过赞--------------------------------------------
const isPraise = ref(false);
// 一个用户可以同时浏览多篇文章，点赞多篇文章，存入文章id，加载前判断
let praisedArticle = ref<Array<number>>([]);
onMounted(() => {
  // 初始化praiseArticle，如果有就初始化，没有就保持null
  praisedArticle.value = cache.getCache("praisedArticle") ?? [];
  // 检测这篇文章是否点过赞
  let isPraisedArticle = () => {
    for (let i of praisedArticle.value) {
      if (i == props.article_id) {
        isPraise.value = true;
        return;
      }
    }
  };
  // 如果有缓存，判断这篇文章是否点过赞
  isPraisedArticle();
});
// 点击点赞--------------------------------------------
let handleDianzanClick: any;
onMounted(() => {
  // 改变，防抖
  const changePreferNum = debounce(async () => {
    await changeABackPreferNum({ id: props.article_id, prefer_num: dianZanNum.value });
  }, 2000);

  // 点击点赞
  handleDianzanClick = () => {
    // 样式变化
    isPraise.value = !isPraise.value;
    // 后台改变
    changePreferNum();
    // 如果点赞了
    if (isPraise.value === true) {
      praisedArticle.value.push(props.article_id);
      cache.setCache("praisedArticle", praisedArticle.value);
      dianZanNum.value = dianZanNum.value + 1;
    } else {
      // filter用于创建一个新的数组，新数组保留符合条件的元素
      praisedArticle.value = praisedArticle.value.filter((item) => item != props.article_id);
      cache.setCache("praisedArticle", praisedArticle.value);
      dianZanNum.value = dianZanNum.value - 1;
    }
  };
});
// 改变浏览量-----------------------------------------
onMounted(() => {
  // 不懂
  const changePV = debounce(async () => {
    await changePVData({ id: props.article_id });
  }, 0);
  // 访问数量控制
  const pvArticle = ref<Array<number>>([]);

  pvArticle.value = cookie.returnArrCookie("pvArticle") as number[];
  const changePageView = () => {
    if (pvArticle.value.length === 0) {
      changePV();
      cookie.setArrCookie("pvArticle", props.article_id, 1);
      getPreferNum();
    } else {
      if (pvArticle.value.includes(Number(props.article_id))) {
        return getPreferNum();
      } else {
        changePV();
        cookie.setArrCookie("pvArticle", props.article_id, 1);
        getPreferNum();
      }
    }
  };
  // // 正确的做法是需要保证changepageview在前面，getprefernum在后面
  changePageView();
});
// 获取评论的数量和内容
const commentText = ref<Array<PinglunItemType>>([]);
const commentNum = ref(0);
const getComment = async () => {
  const pingLunData = await getPingLun({ id: props.article_id });
  commentText.value = pingLunData.data.list;
  commentNum.value = pingLunData.data.total || 0;
};
getComment();
// 评论功能点击评论----------------------------------
let drawerActive = ref(false);
watch(drawerActive, (val, preVal) => {
  if (val) {
    const header = document.querySelector("header") as HTMLElement;
    header.style.top = "0";
    var scrollFunc = function (e: any) { };
    /*注册事件*/
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", scrollFunc, false);
    }
    // @ts-ignore
    window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome
  } else {
    const header = document.querySelector("header") as HTMLElement;
    var scrollFunc = function (e: any) {
      if (e.wheelDelta > 0 || e.detail) {
        //IE/Opera/Chrome和Firefox
        header.style.top = "0";
      } else {
        header.style.top = "-4.5em";
      }
    };
    /*注册事件*/
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", scrollFunc, false);
    }
    // @ts-ignore
    window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome
  }
});
const handlePinglunClick = () => {
  drawerActive.value = !drawerActive.value;
};
const handleCancelClick = () => {
  drawerActive.value = false;
};
// 评论字数
let textareaText = ref("");
let maxlength = ref(1000);
watch(textareaText, (value) => {
  maxlength.value = 1000 - value.length;
});
// 点击评论
// 用户名
let userName = ref();
let avatar: any;
let avatarValue: number;
// 用户头像
onMounted(() => {
  // 获取时间戳加上一个0到100万的随机数
  let timeStamp = new Date().getTime();
  let random = Math.floor(Math.random() * 1000000);
  avatarValue = timeStamp + random;
  if (cache.getCache("avatar")) {
    avatarValue = cache.getCache("avatar");
  }
  // 生成一个svg头像，传入的数值相等生成的头像一样
  avatar = multiavatar(avatarValue);
});

// 填写用户名对话框
const userNameCommitVisible = ref(false);
const handleCommentClick = async () => {
  // 检测为空不，检测是否有用户名
  if (textareaText.value === "" || textareaText.value.replace(/\s*/g, "") === "") {
    textareaText.value = "";
    textareaRef.value.focus();
  } else {
    userName.value = cache.getCache("un") || "";
    if (userName.value === "") {
      userNameCommitVisible.value = true;
    } else {
      // 判断是否在回复别人
      if (textareaText.value.includes(`@` + to_user_name.value + "：")) {
        textareaText.value = textareaText.value.replace(`@` + to_user_name.value + "：", "");
        // 回复空判
        if (textareaText.value === "" || textareaText.value.replace(/\s*/g, "") === "") {
          textareaText.value = `@` + to_user_name.value + "：";
          textareaRef.value.focus();
          return;
        }
      } else {
        to_id.value = undefined;
        to_user_name.value = "";
      }
      // 评论人：最长十个字,头像：一串数字，时间，to_id
      let comment = {
        articleId: props.article_id,
        to_id: to_id.value || undefined,
        to_name: to_user_name.value || undefined,
        userName: userName.value,
        avatar: avatarValue,
        content: textareaText.value,
        created_time: new Date().toLocaleString(),
        comment_type: 1,
      };

      if (to_id.value === null || to_id.value === undefined) {
        comment.comment_type = 0;
      }
      const commentRes = await commitComment(comment);
      if (commentRes.code === 0) {
        // 重新获取评论
        getComment();
        textareaText.value = "";
        cache.setCache("avatar", avatarValue);

        // ElNotification({
        //   message: "评论成功！",
        //   duration: 2000,
        //   type: "success",
        //   showClose: false,
        // });
      } else {
        // ElNotification({
        //   message: "评论失败！",
        //   duration: 2000,
        //   type: "error",
        //   showClose: false,
        // });
      }
    }
  }
};
// 填写用户名
const handleCommitUserName = () => {
  // 关闭对话框，添加缓存，赋值userName
  userNameCommitVisible.value = false;
  cache.setCache("un", userName.value);
};
// 点击回复
const textareaRef = ref();
const to_id = ref();
const to_user_name = ref();
const handleResponseSBClick = (user_id: number, user_name: string) => {
  textareaText.value = "@" + user_name + "：";
  textareaRef.value.focus();
  to_id.value = user_id;
  to_user_name.value = user_name;
};
</script>

<style scoped lang="scss">
.comment {
  width: 100%;
  height: 100px;

  &>ul {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin-right: 1.325em;
      list-style: none;

      span {
        .icon {
          font-size: 1.2em;
          color: gray;
        }

        font-size: 16px;
        color: #313131;
        margin-right: 0.3em;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .drawer {
    width: 30%;
    min-width: 432px;
    max-width: 532px;
    z-index: 517;
    height: 100vh;
    background-color: #fdfdfd;
    position: fixed;
    right: -532px;
    padding-top: 5em;
    top: 0;
    transition: right 1s;

    .drawerScroll {
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      // 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
      &::-webkit-scrollbar-button {
        display: none;
      }

      // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
      &::-webkit-scrollbar-thumb {
        background: rgba(80, 79, 79, 0.3);
        cursor: pointer;
        border-radius: 4px;
      }

      // 边角，即两个滚动条的交汇处
      &::-webkit-scrollbar-corner {
        display: none;
      }

      // 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
      &::-webkit-resizer {
        display: none;
      }
    }

    .drawerHeader {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e8e8ed;

      .icon {
        color: gray;
      }
    }

    .drawerBody {
      display: flex;
      flex-direction: column;
      padding: 24px;
      padding-bottom: 5em;

      .commentListEdit {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: #fdfdfd;
        z-index: 1234;
        padding-bottom: 10px;

        .userImg {
          margin-right: 8px;
          padding-top: 9px;

          :deep(svg) {
            width: 30px;
            height: 30px;
          }

          img {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #e8e8ed;
          }
        }

        #commentForm {
          width: 100%;
          position: relative;
          background: rgba(245, 246, 247, 0.8);
          border-radius: 8px;
          padding: 14px 0;

          #commentContent {
            display: block;
            width: 100%;
            background: rgba(248, 249, 251, 0.8);
            border: none;
            padding: 0 16px;
            border-radius: 4px;
            resize: none;
            height: 88px;
            font-size: 14px;
            line-height: 22px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-family: "SF Pro Display", Roboto, Noto, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
              sans-serif;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            outline: none;

            /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
            // 滚动条整体部分
            &::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }

            // 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
            &::-webkit-scrollbar-button {
              display: none;
            }

            // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
            &::-webkit-scrollbar-thumb {
              background: rgba(80, 79, 79, 0.3);
              cursor: pointer;
              border-radius: 4px;
            }

            // 边角，即两个滚动条的交汇处
            &::-webkit-scrollbar-corner {
              display: none;
            }

            // 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
            &::-webkit-resizer {
              display: none;
            }
          }

          .commentOperate {
            padding: 8px 16px 0 16px;
            display: flex;
            justify-content: space-between;

            .comment-operate-l {
              span {
                font-size: 12px;
                color: #999aaa;
                line-height: 17px;

                em {
                  color: #222226;
                  margin: 0 4px;
                  font-style: normal;
                  font-size: 12px;
                }
              }
            }

            .comment-operate-r {
              .btnComment {
                display: block;
                width: 60px;
                height: 24px;
                background: #6e8efb;
                color: white;
                border-radius: 16px;
                font-size: 14px;
                text-align: center;
                line-height: 24px;
                border: none;
              }
            }
          }
        }
      }

      .commentListContainer {
        padding-top: 12px;

        .commentListBox {
          ul>li {
            list-style: none;
          }

          .commentListItem {
            display: flex;
            width: 100%;

            .userImg {
              margin-right: 8px;
              padding-top: 16px;

              :deep(svg) {
                width: 30px;
                height: 30px;
              }
            }

            .right-box {
              padding-top: 16px;
              padding-bottom: 16px;
              width: 100%;
              margin-left: 8px;

              &:hover .response-box {
                display: block !important;
              }

              .comment-top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 4px;
                line-height: 20px;
                font-size: 14px;

                .user-box {
                  display: flex;

                  .name {
                    display: flex;
                    color: #777888;
                    margin-right: 4px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    .commentName {
                      max-width: 70px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }

                    .anwserName {
                      margin-left: 7px;
                      display: flex;

                      .answerText {
                        display: block;
                        margin-right: 7px;
                        font-style: italic;
                        font-size: 10px;
                      }

                      .anwserNameContent {
                        display: block;
                        max-width: 65px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                    }
                  }

                  .date {
                    margin-left: 5px;
                    font-style: italic;
                    font-size: 12px;
                    color: #777888;
                  }
                }

                .response-box {
                  display: none;
                  cursor: pointer;

                  .icon {
                    transform: rotateY(180deg);
                    width: 1.2em;
                    height: 1.2em;
                  }
                }
              }

              .comment-center {
                .new-comment {
                  font-size: 14px;
                  color: #222226;
                  line-height: 22px;
                  word-break: break-word;
                }
              }
            }
          }
        }
      }
    }
  }

  .drawerActive {
    right: 0;
  }
}

.dialogTip {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.66);

  .userNameForm {
    width: 25%;
    display: flex;
    flex-direction: column;
    background-color: #e8e8ed;
    font-size: 14px;
    padding: 20px;
    border-radius: 10px;

    .dialogBody {
      padding: 20px 0;

      input {
        width: 100%;
        height: 30px;
        border: none;
        padding-left: 10px;
        box-sizing: border-box;
        border-radius: 5px;

        &:focus {
          outline: none;
          border: none;
        }
      }
    }

    .dialogFooter {
      display: flex;
      justify-content: center;

      button {
        padding: 5px 10px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;

        &:nth-child(2) {
          margin-left: 20px;
          background-color: #6e8efb;
          color: white;
        }
      }
    }
  }
}
</style>
