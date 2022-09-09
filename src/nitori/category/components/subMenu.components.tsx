import { Link, Route, Routes } from "react-router-dom";
// import Home from "../../routes/home/home";
// import SubHome from "../../routes/home/subhome.component";
// import SubHome1 from "../../routes/home/subhome1.component ";

import "./subMenu.styles.css";
export type Props = {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
};
export type SubProps = {
  sub: Props;
};

const SubMenu = ({ sub }: SubProps) => {
  const { categoryName, categoryId } = sub;

  return (
    <div className="subCategory-list">
      <div className="categoryName"> {categoryName}</div>
      {categoryId}
    </div>
  );
};
export default SubMenu;
