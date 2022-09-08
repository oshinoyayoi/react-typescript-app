import axios from "axios";
const rankDataUrl = "http://localhost:3100/rank";

// 全RANKリスト取得
export const getAllRankData = async () => {
  const response = await axios.get(rankDataUrl);
  return response.data;
};
