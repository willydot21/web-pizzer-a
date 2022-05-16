
const MenuContainer = props => {
  
  const content = props.content;
  
  return (
    <div className="menu-container">
       { JSON.stringify(content) }
    </div>
  );

}

export default MenuContainer;