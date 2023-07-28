<template>
  <div class="login">
    <div class="loginContent">
      <div class="picture">
        <img src="@/assets/img/work.png" alt="" />
      </div>
      <div class="loginForm">
        <h3 class="title">博客后台管理</h3>
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          label-width="79px"
          ref="formRef"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode" class="authCode">
            <el-row
              ><el-col :span="10">
                <el-input v-model="formData.authCode"></el-input>
              </el-col>
              <el-col :span="10"
                ><div class="loading" v-if="authCodeSvg == ''"></div>
                <div
                  v-else
                  v-html="authCodeSvg"
                  @click="changeAuthCode"
                ></div> </el-col
            ></el-row>
          </el-form-item>
          <el-row justify="end">
            <el-col :span="5" class="forgetCol"
              ><span class="forgetPassword" @click="visitorLogin"
                >游客登录&nbsp;</span
              ></el-col
            >
            <el-col :span="4" class="forgetCol"
              ><span class="forgetPassword" @click="forgetPassword"
                >忘记密码</span
              ></el-col
            >
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)"
              >提交</el-button
            >
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuthCode, login } from "@/service/login";
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import cache from "@/utils/cache";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";

import axios from "axios";
axios
  .get("https://qyapi.weixin.qq.com/cgi-bin/gettoken", {
    params: {
      corpid: "wwcbd3fd2e2aa98f3d",
      corpsecret: "QuWmHA0a_5OJyqBbnzOYvIQw_-5PqzO3oKa6M_P83yk",
    },
    headers: {
      "Content-Type": "Access-Control-Allow-Origin", // 设置请求头的Content-Type
    },
  })
  .then(function (response) {
    console.log("成功", response);
    console.log(response.data);
  })
  .catch(function (error) {
    console.log("失败", error);
    console.log(error);
  });

// let background = ref<LoginBackground>({ imgSrc: "", title: "" });
const formRef = ref<FormInstance>();
const router = useRouter();
const route = useRoute();
let formData = reactive({
  userName: "",
  password: "",
  authCode: "",
});

let authCodeText = ref("");
let authCodeSvg = ref("");
const checkAuthCode = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入验证码"));
  } else if (
    formData.authCode.toLocaleLowerCase() !==
    authCodeText.value.toLocaleLowerCase()
  ) {
    callback(new Error("验证码输入错误"));
    getCodeData();
  } else {
    callback();
  }
};
let rules = reactive<FormRules>({
  userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  authCode: [{ validator: checkAuthCode, trigger: "blur", required: true }],
});
// 获取登陆页面背景
// const getLoginBackgroundData = async () => {
//   const backgroundData = await getLoginBackground();
//   background.value = backgroundData.data;
// };
// 获取登陆验证码
const getCodeData = async () => {
  const codeData = await getAuthCode();
  authCodeText.value = codeData.data.text;
  authCodeSvg.value = codeData.data.authCode;
};
const changeAuthCode = () => {
  getCodeData();
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid: any) => {
    if (valid) {
      const loginRes = await login(formData);
      if (loginRes.code == 0) {
        const token = loginRes.data.token;
        cache.setCache("token", token);
        cache.setCache("user", loginRes.data.user);
        // 登录成功后跳转到目标页面
        let loginSuccessUrl = (route.query.redirect as string) || "/main/home";
        router.replace({
          path: loginSuccessUrl,
        });
      } else {
        ElMessage({
          message: "登录账号或密码错误，请重新输入",
          type: "error",
        });
        getCodeData();
      }
    } else {
      return;
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const forgetPassword = () => {
  ElMessage({
    message: "废物，查库！！！",
    type: "error",
  });
};
const visitorLogin = () => {
  cache.setCache("_token", "VISITORLOGIN");
  router.replace({
    path: "/main/home",
  });
};
const keyEvent = (e: any) => {
  if (e.code === "Enter") {
    submitForm(formRef.value);
  }
};
onMounted(() => {
  getCodeData();
  document.addEventListener("keyup", keyEvent);
});
onBeforeUnmount(() => {
  document.removeEventListener("keyup", keyEvent);
});
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 246, 247);
  .loginContent {
    width: 900px;
    height: 500px;
    display: flex;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 6px 10px rgba(207, 212, 222, 1);

    .picture {
      width: 300px;
      height: 300px;
      padding-right: 40px;
      border-right: 1px solid grey;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .loginForm {
      width: 300px;
      height: 300px;
      padding: 0px 0px 0 40px;
      // background: #e0e0e0;

      // box-shadow: 35px 35px 70px #bebebe, -35px -35px 70px #ffffff;
      user-select: none;
      .title {
        text-align: center;
        margin-top: 0;
        margin-left: 30px;
        letter-spacing: 2px;
      }
      .el-col-10 {
        height: 40px;
      }
      .loading {
        height: 40px;
        width: 150px;
      }
      .forgetCol {
        padding: 0 0px 19px 0;
      }
      .forgetPassword {
        font-size: 12px;
        color: #606266;
        cursor: pointer;
      }
    }
  }
}
</style>
