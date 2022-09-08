import { useEffect, useState } from "react";
import * as rankData from "../../apis/rank";
import RankItem from "./rankItem";
import "./rank.css";

export type Rank = {
  id: string;
  category: string;
  goods: Goods;
};

export type Goods = {
  id: string;
  goodsName: string;
  price: number;
  star: number;
  review: number;
  img: string;
};

export const Rank = () => {
  const [rankList, setRankList] = useState<Rank[]>([]);
  // const [goods, setGoods] = useState<Goods[]>([]);

  useEffect(() => {
    rankData.getAllRankData().then((rank) => {
      console.log(rank);
      setRankList(rank);
      //  console.log(rank.goods);
      //  setGoods([...rank.goods]);
    });
  }, []);

  return (
    <div>
      <div className="title">カテゴリ別ランキング</div>
      <div className="rank-list">
        {rankList.map((rank, index) => {
          return (
            <div key={index}>
              <div className="rank-number">{rank.id}</div>
              <div className="category-name">{rank.category}</div>
              <div className="rank-item">
                <RankItem rank={rank.goods} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Rank;
