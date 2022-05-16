
const MenuSuggestions = props => {
  
  const suggestions = props.suggestions;

  return (
    <ul className="menu-suggestions">
      {
        suggestions.map( suggestion => (
          <li className="suggestion">
            { suggestion }
          </li>
        ))
      }
    </ul>
  );
}

export default MenuSuggestions;