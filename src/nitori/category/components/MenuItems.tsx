import "./MenuItems.styles.css";
import { MenuItemsProps } from "../category";
import { Props } from "../category";
import SubMenu from "./subMenu.components";
export type ItemProps = {
  Item: MenuItemsProps;
};
const MenuItem = ({ Item }: ItemProps) => {
  const { categoryId, categoryName, categoryImage, subList } = Item;

  return (
    <div className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        <div className="img">
          <img src={categoryImage} alt="imgs" />

          <span className="category-name" data-testid="custom-element">
            {categoryName}
          </span>
          <ul className="category-List">
            {Array.isArray(subList)
              ? subList.map((sub: any) => {
                  return <SubMenu key={sub.categoryId} sub={sub} />;
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
