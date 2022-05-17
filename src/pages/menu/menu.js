
import './menu.css';
import MenuNavbar from "../../components/menu-navbar";
import MenuCategories from "../../components/menu-categories";
import MenuSearch from "../../components/menu-search";
import MenuSuggestions from "../../components/menu-suggestions";
import MenuContainer from "../../components/menu-container";
import menuDOM from "./menu-dom";
import { changeTitle } from "../../utils";

const Menu = () => {

  const {
    states,
    refs
  } = menuDOM();

  const { menuSearchRef } = refs;

  const { suggestions, setSuggestions } = states;

  changeTitle('Menu');

  return (
    <div id="app-menu">
      <MenuNavbar />

      <div className="menu-searcher">
        <div className="search-separator">
          <MenuSearch 
            ref_={ menuSearchRef }
            setSuggestions={setSuggestions}
          />
          <MenuSuggestions suggestions={suggestions}/>
        </div>
      </div>
      
      <MenuCategories />
      <MenuContainer content={suggestions}/>
    </div>
  );
}

export default Menu;