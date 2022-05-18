
import './styles/menu-suggestions.css';

const MenuSuggestions = props => {
  
  const suggestions = props.suggestions;
  const suggestions_keys = Object.keys(suggestions);
  var limit = suggestions_keys.slice(0, 5);

  const handleSuggestion = e => {
    const target_name = e.target.textContent;
    const items = document.querySelectorAll('.menu-container h3');
    const target = [...items].filter(item => item.lastChild.textContent === target_name)[0];
    target.parentNode.scrollIntoView();
  }
 
  const renderItem = suggestion => {

    const image = suggestions[suggestion].image;

    return (
      <li className="suggestion" onClick={handleSuggestion}>
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
        {limit.map(renderItem)}
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