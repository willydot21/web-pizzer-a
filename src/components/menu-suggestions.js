
import './styles/menu-suggestions.css';

const MenuSuggestions = props => {
  
  const suggestions = props.suggestions;
  const suggestions_keys = Object.keys(suggestions);

  const renderItem = suggestion => {

    const image = suggestions[suggestion].image;

    return (
      <li className="suggestion">
        <div className="separator">
          <img src={image} />
          {suggestion}
        </div>
      </li>
    );
  }

  return (
    <ul className="menu-suggestions">
      { suggestions_keys.map(renderItem) }
    </ul>
  );
}

export default MenuSuggestions;