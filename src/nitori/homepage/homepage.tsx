import Category from "../category/category";
import Rank from "../rank/rank";
import Slidershow from "../swiper/slidershow";
import { Route, Routes } from "react-router-dom";

export const NitoriHomePage = () => {
  return (
    <>
      <Category />
      <Slidershow />
      <Rank />
    </>
  );
};
export default NitoriHomePage;
