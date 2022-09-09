import { Fragment } from "react";
import axios from "axios";
import * as sliderData from "../../apis/sliderShow";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
type SliderProps = {
  imgUrl: string;
  id: string;
};

export const Slidershow = () => {
  const [slider, setSlider] = useState<SliderProps[]>([]);
  const image: string[] = [];
  // const [goods, setGoods] = useState<Goods[]>([]);

  useEffect(() => {
    sliderData.getAllSliderData().then((slider) => {
      setSlider(slider);
    });
  }, []);
  return (
    <Fragment>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slider.map((items, index) => {
          const img = items.imgUrl;
          image.push(img);
          return (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};
export default Slidershow;
