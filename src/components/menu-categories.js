
import './styles/menu-categories.css';
import menu from '../menu.json';

const MenuCategories = () => {
  
  const keys = Object.keys(menu);

  return (
    <div className="menu-categories">
      <div className="separator">
        <h3 className="subtitle-text categories-title">
          Categorias
        </h3>
        <div className="categories-container">
          {
            keys.map( key => (
              <a className="menu-category" href={`/menu/${ encodeURI(key) }`}>
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