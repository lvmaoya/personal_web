<template>
  <div class="userForm">
    <el-form
      :model="form"
      label-width="120px"
      label-position="top"
      status-icon
      :rules="rules"
      ref="updateUserForm"
    >
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="form.userName" :disabled="isDisable" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="form.nickName" :disabled="isDisable" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          :disabled="isDisable"
          :show-password="true"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNum">
        <el-input v-model="form.phoneNum" :disabled="isDisable" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" :disabled="isDisable" />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-input v-model="form.createTime" disabled />
      </el-form-item>
      <el-form-item label="修改时间" prop="updatedTime">
        <el-input v-model="form.updatedTime" disabled />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeForm(formRef)">修改</el-button>
        <el-button @click="submitForm(formRef)">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import cache from "@/utils/cache";
import { getUserData, type userInfoType } from "@/service/user";
import { haveAuthority } from "@/utils/authority";
const formRef = ref<FormInstance>();

let isDisable = ref(true);
let form = ref<userInfoType>({
  userName: "",
  nickName: "",
  password: "",
  email: "",
  createTime: "",
  updatedTime: "",
  phoneNum: "",
});
const validateUserName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  }
  const reg = /^[a-zA-Z0-9_-]{4,16}$/;
  if (reg.test(value)) {
    return callback();
  }
  return callback(
    new Error("手机号码不合法！,4到16位（字母，数字，下划线，减号）")
  );
};
const validateTel = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入手机号码！"));
  }
  const reg = /^1[3456789]\d{9}$/;
  if (reg.test(value)) {
    return callback();
  }
  return callback(new Error("手机号码不合法！"));
};
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入邮箱地址！"));
  }
  // eslint-disable-next-line no-useless-escape
  const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
  if (reg.test(value)) {
    return callback();
  }
  return callback(new Error("邮箱地址不合法！"));
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入密码！"));
  }
  const passwordReg =
    /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/;
  if (passwordReg.test(value)) {
    return callback();
  }
  return callback(
    new Error(
      "6-20位英文字母、数字或者符号，且字母、数字和标点符号至少包含两种"
    )
  );
};

let rules = reactive<FormRules>({
  name: [{ required: true, validator: validateUserName, trigger: "blur" }],
  nickName: [{ required: true, message: "请输入昵称", trigger: "blur" }],
  password: [
    {
      required: true,
      validator: validatePassword,
      trigger: "blur",
    },
  ],
  email: [{ required: true, validator: validateEmail, trigger: "blur" }],
  createTime: [{ required: true, message: "请输入昵称", trigger: "blur" }],
  updatedTime: [{ required: true, message: "请输入昵称", trigger: "blur" }],
  phoneNum: [
    {
      validator: validateTel,
      trigger: "blur",
      required: true,
    },
  ],
});
// 获取基本用户登录信息
const userName: String = cache.getCache("user")?.userName || "";
const getUserInfo = async (userName: String) => {
  const userData = await getUserData({ userName: userName });
  form.value = userData.data;
};
const token = cache.getCache("token");
if (token) {
  getUserInfo(userName);
}

// 点击修改
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!haveAuthority()) {
    return;
  }
  if (!formEl) return;
  formEl.validate(async (valid: any) => {
    if (valid) {
      ("");
    } else {
      return;
    }
  });
};
const changeForm = async (formEl: FormInstance | undefined) => {
  if (!haveAuthority()) {
    return;
  }
  isDisable.value = false;
};
</script>

<style scoped lang="scss">
.userForm {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  .el-form {
    width: 500px;
    height: 600px;
    padding: 50px 50px 0 20px;
    // border: 1px solid;
    padding: 30px;
  }
}
</style>
