
import { useParams, Navigate } from "react-router-dom";
import MenuContainer from "../../components/menu-container";
import {changeTitle, parsedMenu} from '../../utils';

const MenuCategory = () => {
  
  const categories = Object.keys(parsedMenu);
  
  const category = decodeURI(useParams().category);

  changeTitle(`Categoria ${category}`);

  if (categories.includes(category)){
    return (
      <div className="app-menu-category">
        <h1>{category}</h1>
        <MenuContainer content={ parsedMenu[category] } />
      </div>
    );
  }
  
  return (
    <Navigate to="/404" />
  );
}

export default MenuCategory;