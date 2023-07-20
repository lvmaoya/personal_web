// import { getUploadToken } from "@/service/article";
// import { ElMessage } from "element-plus";
// import * as qiniu from "qiniu-js";

// const uploadImg = async (files: Array<File>) => {
//   // 从服务端获取到token
//   const tokenDate = await getUploadToken();
//   // 拿到要上传的文件
//   const file = files[0];
//   // 文件名字
//   const key = file.name;
//   //配置项
//   const config = {
//     // cdn 加速域名
//     // useCdnDomain: true,
//     // 上传域名区域
//     region: qiniu.region.z1,
//   };
//   const putExtra = {};
//   // 控制上传行为
//   const observable = qiniu.upload(file, key, tokenDate.data, putExtra, config);
//   const observer = {
//     next(res: any) {
//       return;
//     },
//     error() {
//       ElMessage({
//         showClose: true,
//         message: "上传失败",
//         duration: 10000,
//         type: "error",
//       });
//     },
//     complete(res: any) {
//       return "http://rl4t8mont.hb-bkt.clouddn.com/" + res.key;
//     },
//   };
//   const subscription = observable.subscribe(observer); // 上传开始
// };
// export default uploadImg;
