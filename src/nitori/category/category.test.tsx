import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Category from "../category/category";
import axios, { AxiosResponse } from "axios";
import { getAllRankData } from "../../apis/rank";

test("render category", () => {
  render(<Category />);

  expect(screen.getByText(/カテゴリ/)).toHaveTextContent("カテゴリ");
});
