import Http from "@/http/index";
import musicBaseURL from "~~/http/music-base-config";

export function getHotMenu() {
  return Http.get(`${musicBaseURL}/top/song`);
}
