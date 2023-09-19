<template>
  <div class="commentCom">
    <div class="userInput">
      <div class="userInfo">
        <ul>
          <li><input type="text" placeholder="name" v-model="userName" maxlength="12" ref="userNameRef"></li>
          <li><input type="text" placeholder="email" v-model="email" ref="emailRef"></li>
          <li><input type="text" placeholder="site" v-model="site"></li>
        </ul>
      </div>
      <div class="userComment">
        <textarea name="commentContent" v-model="textareaText" ref="textareaRef" id="commentContent"
          placeholder="welcome your comment!" maxlength="1000"></textarea>
        <div class="comment-operate-r">
          <button class="btnComment" @click="handleCommentClick">submit</button>
        </div>
      </div>
    </div>
    <div class="commentContent">
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
                          <span class="answerText">reply</span>
                          <span class="anwserNameContent">
                            {{ item.to_name }}
                          </span>
                        </div>
                      </div>
                      <div class="date">
                        {{ item.created_time.replace(/:[^:]*$/, '') }}
                      </div>
                    </div>

                  </div>
                  <div class="comment-center">
                    <div class="new-comment">{{ item.content }}</div>
                  </div>
                </div>
              </div>
              <div class="response-box" @click="handleResponseSBClick(item.commentary_id, item.user_name)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xiazai16"></use>
                </svg>
              </div>
            </div>
          </li>
        </ul>
        <div class="commentLookMore"></div>
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
const emits = defineEmits(['commentNum'])
// 获取评论的数量和内容
const commentText = ref<Array<PinglunItemType>>([]);
const commentNum = ref(0);
const getComment = async () => {
  const pingLunData = await getPingLun({ id: props.article_id });
  commentText.value = pingLunData.data.list;
  commentNum.value = pingLunData.data.total || 0;
  emits('commentNum', commentNum.value)
};
getComment()
// 生成头像
let avatar: any;
let avatarValue: number;
const makeAvatar = () => {
  // 获取时间戳加上一个0到100万的随机数
  let timeStamp = new Date().getTime();
  let random = Math.floor(Math.random() * 1000000);
  avatarValue = timeStamp + random;
  if (cache.getCache("avatar")) {
    avatarValue = cache.getCache("avatar");
  }
  // 生成一个svg头像，传入的数值相等生成的头像一样
  avatar = multiavatar(avatarValue);
}
// 评论
let textareaText = ref("");
let textareaRef = ref()
const userName = ref()
const userNameRef = ref()
const to_user_name = ref();
const to_id = ref();
const email = ref()
const emailRef = ref()
const site = ref()
// 获取用户头像姓名邮箱网址
if (process.client) {
  makeAvatar()
  userName.value = cache.getCache("un") || "";
  email.value = cache.getCache('em') || ""
  site.value = cache.getCache('st') || ""
}
onMounted(() => {
  if (userName.value && email.value) {
    userNameRef.value.disabled = true
    emailRef.value.disabled = true
  }
  
})
const handleCommentClick = async () => {
  // 检测为空不，检测是否有用户名
  if (textareaText.value === "" || textareaText.value.replace(/\s*/g, "") === "") {
    textareaText.value = "";
    textareaRef.value.focus();
    return;
  }

  console.log(userName.value)
  console.log(email.value)
  if (userName.value === "") {
    userNameRef.value.focus()
    return;
  }
  if (email.value === '') {
    emailRef.value.focus()
    return;
  }
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
    email: email.value,
    site: site.value
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
    cache.setCache("un", userName.value);
    cache.setCache("em", email.value);
    cache.setCache("st", site.value);
    userNameRef.value.disabled = true
    emailRef.value.disabled = true
  } else {
    // ElNotification({
    //   message: "评论失败！",
    //   duration: 2000,
    //   type: "error",
    //   showClose: false,
    // });
  }


};
const handleResponseSBClick = (user_id: number, user_name: string) => {
  textareaText.value = "@" + user_name + "：";
  textareaRef.value.focus();
  to_id.value = user_id;
  to_user_name.value = user_name;
};
</script>
<style scoped lang="scss">
.commentCom {
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  color: #313131;
  margin-bottom: 250px;

  li {
    list-style: none;
  }

  .userInput {
    width: 100%;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
    box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    border-radius: 3px;
    padding: 0 12px;

    .userInfo {
      width: 100%;

      ul {
        width: 100%;
        display: flex;
        border-bottom: 1px dashed #ddd;
        flex-wrap: wrap;

        li {
          width: 33.3333%;
          min-width: 200px;

          input {
            font-size: 13px;
            display: block;
            width: 100%;
            height: 34px;
            color: #313131;
            outline: 0;
            border: 0;
            background: #fff;
          }
        }
      }
    }

    .userComment {

      #commentContent {
        display: block;
        width: 100%;
        margin-top: 10px;
        border: none;
        border-radius: 4px;
        resize: none;
        height: 100px;
        font-size: 13px;
        line-height: 22px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

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

      .comment-operate-r {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px 16px 10px 0px;
        box-sizing: border-box;

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
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            transition: .5s;
            opacity: 0;
            box-shadow: 0 0 6px 10px #6e8efb;
            left: 0;

          }

          // &:hover::after {}

          &:active::after {
            box-shadow: none;
            opacity: 1;
            transition: 0s;
          }
        }
      }
    }
  }

  .commentContent {
    padding-top: 12px;
    padding-bottom: 30px;

    .commentListBox {
      background-color: #fff;
      padding: 0 12px;
      border-radius: 3px;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
      box-shadow: 0 1px 4px rgba(0, 0, 0, .04);

      ul>li {
        list-style: none;
      }

      .commentListItem {
        display: flex;
        width: 100%;

        .userImg {
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
                    color: #eb5055;
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

        .response-box {
          opacity: 0;
          transition: opacity 0.5s;
          cursor: pointer;
          margin-top: auto;
          margin-bottom: 16px;


          .icon {
            transform: rotateY(180deg);
            width: 15px;
            height: 15px
          }
        }

        &:hover .response-box {
          opacity: 1;
          ;
        }
      }
    }

  }
}
</style>
