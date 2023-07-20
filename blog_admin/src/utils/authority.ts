import { ElMessage } from "element-plus";
import cache from "./cache";

/*
 * @Author: sun
 * @Date: 2022-11-30 15:15:46
 * @LastEditTime: 2022-11-30 16:21:03
 * @Description: Do not edit
 */
export function haveAuthority() {
  const token = cache.getCache("token");
  if (!token) {
    ElMessage({
      showClose: true,
      message: "你暂无此权限！",
      duration: 1000,
      type: "error",
    });
    return false;
  } else if (token) {
    return true;
  }
}
