
import './styles/menu-categories.css';
import { parsedMenu } from '../utils';


const MenuCategories = props => {
  
  const keys = Object.keys(parsedMenu);
  const {
    menuSearchRef,
    setSuggestions
  } = props.options;

  const handleChangeCategory = (value) => {
    menuSearchRef.current.firstChild.value = '';
    setSuggestions(value);
  }

  return (
    <div className="menu-categories">
      <div className="separator">
        <h3 className="subtitle-text categories-title">
          Categorias
        </h3>
        <div className="categories-container">
          {
            keys.map( key => (
              <a 
                className="menu-category subtitle-text" 
                onClick={ () => handleChangeCategory(parsedMenu[key]) }>
                {key}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MenuCategories;