
const MenuContainer = props => {
  
  const content = props.content;
  const contentKeys = Object.keys(content);

  const renderItem = itemName => {
    
    const item = content[itemName];

    return (
      <div className="menu-item">
        <img src={item.image} className="menu-item-image"/>
        <h3 className="menu-item-title">
          {itemName}
        </h3>
      </div>
    );

  }

  return (
    <div className="menu-container">
      {
        contentKeys.map(renderItem)
      }
    </div>
  );

}

export default MenuContainer;