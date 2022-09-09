import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Rank from "./rank";
import RankItem from "./rankItem";
import rankStories from "./rank.stories";
import Category from "../category/category";
import axios, { AxiosResponse } from "axios";
import { getAllRankData } from "../../apis/rank";

jest.mock("axios"); // axios を mock する

const mockAxios = axios as jest.Mocked<typeof axios>;

test("render Rank", async () => {
  mockAxios.get.mockResolvedValue({
    id: 1,
    category: "学習机・ランドセル・子供用品",
    goods: [
      {
        id: 10001,
        goodsName: "キャスター付きトイボックス",
        price: 1990,
        star: 4,
        review: 22,
        img: "https://www.nitori-net.jp/ecstatic/image/product/8422233s/8422233s00.jpg?ts=20210813095140100&imwidth=200&imdensity=1",
      },
      {
        id: 10002,
        goodsName: "キッズ絵本ラック(セルフル)",
        price: 5990,
        star: 5,
        review: 1,
        img: "https://www.nitori-net.jp/ecstatic/image/product/8422232s/8422232s00.jpg?ts=20210813095101572&imwidth=200&imdensity=1",
      },
      {
        id: 10003,
        goodsName: "折り畳みできるキッズプレイマット(ロード)",
        price: 3290,
        star: 5,
        review: 4,
        img: "https://www.nitori-net.jp/ecstatic/image/product/8422235s/8422235s00.jpg?ts=20210607104122215&imwidth=200&imdensity=1",
      },
    ],
  });
  //const response = await getAllRankData();

  render(<Rank />);
  const response = await getAllRankData();
  expect(screen.getByText(/カテゴリ/)).toHaveTextContent(
    "カテゴリ別ランキング"
  );
  /*
  expect(response).toStrictEqual({
    status: 200,
    data: [{ id: 1, text: "test result" }],
  });
*/
});
