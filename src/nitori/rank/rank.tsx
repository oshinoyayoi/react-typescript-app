import { useEffect, useState } from "react";
import * as rankData from "../../apis/rank";
import RankItem from "./rankItem";
import "./rank.css";
import { AiFillCrown } from "react-icons/ai";
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
      setRankList(rank);
    });
  }, []);

  return (
    <div>
      <div className="title">カテゴリ別ランキング</div>
      <div className="rank-list">
        {rankList.map((rank, index) => {
          return (
            <div key={index}>
              <AiFillCrown />
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
