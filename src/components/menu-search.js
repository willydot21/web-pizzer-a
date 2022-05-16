
import { changeSuggestions } from '../pages/menu/functions';

const MenuSearch = props => {

  const ref_ = props.ref_;

  const setSuggestions = props.setSuggestions;

  const handleOnChange = () => {
    const query = ref_.current.firstChild.value;
    changeSuggestions(query, setSuggestions);
  };

  return (
    <div className="menu-search" ref={ ref_ } >
      <input 
        type="text"
        onChange={ handleOnChange }
      />
    </div>
  );
}

export default MenuSearch;