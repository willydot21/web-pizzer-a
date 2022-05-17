
import './styles/menu-container.css';

const MenuContainer = props => {
  
  const content = props.content;
  const contentKeys = Object.keys(content);

  const renderItem = itemName => {
    
    const item = content[itemName];

    return (
      <li className="menu-item">
        <img src={item.image} className="menu-item-image"/>
        <h3 className="subtitle-text">
          {itemName}
        </h3>
      </li>
    );

  }

  return (
    <div className="center-menu">
      <ul className="menu-container">
        { contentKeys.map(renderItem) }
      </ul>
    </div>
  );

}

export default MenuContainer;