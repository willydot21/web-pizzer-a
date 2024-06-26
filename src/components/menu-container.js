
import './styles/menu-container.css';

const MenuContainer = props => {

  document.body.style.backgroundAttachment = 'fixed';

  const content = props.content;

  const contentKeys = Object.keys(content);

  const renderItem = itemName => {
    
    const item = content[itemName];
    const item_keys = Object.keys(item);
    
    return (
      <li className="menu-item">
        <img src={item.image} className="menu-item-image" />
        <h3 className="subtitle-text">
          {itemName}
        </h3>
        <div className="item-info">
          {
            item_keys.map( key => {
              if ( key !== 'image' ){
                return (
                  <p className="subtitle-text">
                    {
                      key && item[key] && !['texto', 'categoria'].includes(key) ?
                        `${key}: ${item[key]} EUR`
                        : '' || item[key]
                    }
                  </p>
                )
              }
            })
          }
        </div>
      </li>
    );

  }

  if ( contentKeys.length <= 0 ){
    return (
      <div className="no-results">
        <div className="no-results-separator">
          <img src="data:image/png;base64,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" />
          <p className="no-results-text">
            Sin Resultados...
          </p>
        </div>
      </div>
    )
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