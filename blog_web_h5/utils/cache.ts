/*
 * @Author: sun
 * @Date: 2022-12-30 14:32:23
 * @LastEditTime: 2022-12-30 16:26:32
 * @Description: Do not edit
 */
class LocalCache {
  setCache(key: string, value: any) {
    window?.localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string) {
    try {
      const value = window?.localStorage.getItem(key);
      if (value != null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log(error);
    }
  }
  deleteCache(key: string) {
    try {
      window?.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }
  clearCache() {
    window?.localStorage.clear();
  }
}
export default new LocalCache();
