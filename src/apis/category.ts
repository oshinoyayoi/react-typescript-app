import axios from "axios";
const categoryDataUrl = "http://localhost:3100/data";

// 全RANKリスト取得
export const getAllCategoryData = async () => {
  const response = await axios.get(categoryDataUrl);
  return response.data;
};
