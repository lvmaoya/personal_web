let musicBaseURL: string;
if (process.env.NODE_ENV === "development") {
  // BASE_URL = "	http://127.0.0.1:4523/m1/1770943-0-default";
  musicBaseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  musicBaseURL = "https://sunjianxiang.cn:3000";
} else {
  musicBaseURL = "https://sunjianxiang.cn:3000";
}
export default musicBaseURL;
