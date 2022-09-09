import "./category.styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./components/MenuItems";
import { Link, Outlet, useParams } from "react-router-dom";
import * as categoryData from "../../apis/category";

export type MenuItemsProps = {
  categoryName: string;
  subList: Props;
  categoryImage: string;
  categoryId: number;
};
export type Props = {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
};
export function Category() {
  const [categories, setCategories] = useState<MenuItemsProps[]>([]);

  //获取所有内容,get
  useEffect(() => {
    categoryData.getAllCategoryData().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="homepage-background">
      <div className="header">
        <div className="g-header"></div>
        <div className="g_outer-head">
          <div className="category">
            <div className="button">カテゴリ</div>
            <div className="content_category">
              <ul className="a-goodsList">
                {categories.map((Item) => {
                  return <MenuItem key={Item.categoryId} Item={Item} />;
                })}
              </ul>
            </div>
          </div>
          <div className="mypage"></div>
        </div>
      </div>
    </div>
  );
}

export default Category;
