import { start } from "repl";
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
  // const { id, goodsName, price, star, review, img } = rank;
  console.log(rank);

  return (
    <div key={rank.id} className="background">
      {Array.isArray(rank)
        ? rank.map((item, id) => {
            return (
              <div key={item.id}>
                <img className="img" src={item.img} />
                <div className="goods-name">{item.goodsName}</div>
                <div className="price">{item.price}</div>
                <div className="star">{item.star}</div>
                <div className="review">{item.review}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default RankItem;
