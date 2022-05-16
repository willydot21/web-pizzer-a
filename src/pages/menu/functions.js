
import { 
  getFoodProperties,
  food,
  removeAcentuations } from "../../utils";

const searchFood = query => {

  const food_names = Object.keys(food);

  query = removeAcentuations( query );

  return food_names.filter( item => {

    item = removeAcentuations( item );

    const regex = new RegExp(query, 'gi');

    const matched_food = item.match(regex);

    return matched_food;

  });

}

const changeSuggestions = (value, setSuggestions) => {

  const query = value;

  const filtered = searchFood( query );

  const suggestions = {};

  filtered.forEach( food_name => {
    suggestions[food_name] = getFoodProperties(food_name);
  });

  if( query.length > 0 ){
    setSuggestions(suggestions);
  } else {
    setSuggestions([]);
  }

};

export {
  searchFood,
  changeSuggestions
}