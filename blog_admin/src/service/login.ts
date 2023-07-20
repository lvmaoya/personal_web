import sjRequestObj from ".";
interface IdataType<T = any> {
  code: number;
  message: string;
  data: T;
}
export interface LoginBackground {
  imgSrc: string;
  title: string;
}
export interface authCode {
  authCode: string;
  text: string;
}
export interface userLoginConfig {
  userName: string;
  password: string;
}
export interface login {
  user: object;
  token: string;
}
export function getLoginBackground() {
  return sjRequestObj.get<IdataType<LoginBackground>>({
    url: "/getLoginBackground",
    showLoading: true,
  });
}
export function getAuthCode() {
  return sjRequestObj.get<IdataType<authCode>>({
    url: "/getAuthCode",
    showLoading: true,
  });
}
export function login(data: userLoginConfig) {
  return sjRequestObj.post<IdataType<login>>({
    url: "/login",
    data: data,
    showLoading: true,
  });
}
