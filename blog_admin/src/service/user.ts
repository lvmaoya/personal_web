import sjRequestObj from ".";
interface IdataType<T = any> {
  code: number;
  message: string;
  data: T;
}
export interface userNameConfigType {
  userName: String;
}
export interface userInfoType {
  userName: String;
  nickName: String;
  password: String;
  email: String;
  createTime: String;
  updatedTime: String;
  phoneNum: String;
}
export function getUserData(userNameConfig: userNameConfigType) {
  return sjRequestObj.post<IdataType<userInfoType>>({
    url: "/getUserInfo",
    data: userNameConfig,
  });
}
