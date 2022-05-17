
import './styles/menu-search.css';
import { changeSuggestions } from '../pages/menu/functions';

const MenuSearch = props => {

  const ref_ = props.ref_;

  const setSuggestions = props.setSuggestions;

  const handleSearch = () => {
    const query = ref_.current.firstChild.value;
    changeSuggestions(query, setSuggestions);
  };

  return (
    <div className="menu-search" ref={ ref_ } >
      <input 
        className="menu-search-text subtitle-text"
        type="text"
        onChange={ handleSearch }
        placeholder="search anything..."
      />
      <input
        className="menu-search-button subtitle-text"
        type="button"
        onClick={ handleSearch }
        value="search"
      />
    </div>
  );
}

export default MenuSearch;