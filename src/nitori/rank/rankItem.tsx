import { start } from "repl";
import Rating from "@mui/material/Rating";
import "./rankItem.css";

export type Goods = {
  id: string;
  goodsName: string;
  price: number;
  star: number;
  review: number;
  img: string;
};
export type ItemProps = {
  rank: Goods;
};
export const RankItem = ({ rank }: ItemProps) => {
  return (
    <div key={rank.id} className="background">
      {Array.isArray(rank)
        ? rank.map((item, id) => {
            return (
              <div key={item.id} className="box">
                <img className="img" src={item.img} />
                <div className="goods-name">{item.goodsName}</div>
                <div className="price">{item.price}円</div>
                <div className="star">
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.star}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <div className="review">({item.review})</div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default RankItem;
