
import MenuNavbar from "../../components/menu-navbar";
import MenuCategories from "../../components/menu-categories";
import MenuSearch from "../../components/menu-search";
import MenuSuggestions from "../../components/menu-suggestions";
import MenuContainer from "../../components/menu-container";
import menuDOM from "./menu-dom";

const Menu = () => {

  const {
    states,
    refs
  } = menuDOM();

  const { menuSearchRef } = refs;

  const { content, suggestions, setSuggestions } = states;

  return (
    <div id="app-menu">
      <MenuNavbar />
      <MenuCategories />

      <div className="menu-searcher">
        <MenuSearch 
          ref_={ menuSearchRef }
          setSuggestions={setSuggestions}
        />
        <MenuSuggestions suggestions={ suggestions }/>
      </div>

      <MenuContainer />
    </div>
  );
}

export default Menu;