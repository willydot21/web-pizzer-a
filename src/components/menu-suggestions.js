
import { getAllFoodProperties } from "../pages/menu/functions";

const MenuSuggestions = props => {
  
  const suggestions = props.suggestions;

  //getAllFoodProperties( suggestions  );

  console.log( getAllFoodProperties( suggestions ) );

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