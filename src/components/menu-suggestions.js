
import './styles/menu-suggestions.css';

const MenuSuggestions = props => {
  
  const suggestions = props.suggestions;
  const suggestions_keys = Object.keys(suggestions);
  const first_results = suggestions_keys.slice(0, 6);

  const renderItem = suggestion => {

    const image = suggestions[suggestion].image;

    return (
      <li className="suggestion">
        <div className="separator subtitle-text">
          <img src={image} />
          {suggestion}
        </div>
      </li>
    );
  }

  return (
    <div className="menu-suggestions">
      <ul className="suggestions-container">
        {first_results.map(renderItem)}
        <li className="suggestion suggestion-text">
          {
            suggestions_keys.length > 6 ?
              '....' : ''
          }
        </li>
      </ul>
    </div>
  );
}

export default MenuSuggestions;