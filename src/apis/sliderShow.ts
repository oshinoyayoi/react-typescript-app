import axios from "axios";
const sliderDataUrl = "http://localhost:3100/swiperData";

// 全RANKリスト取得
export const getAllSliderData = async () => {
  const response = await axios.get(sliderDataUrl);
  return response.data;
};
