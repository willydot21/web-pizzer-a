
import menu from '../../menu.json';

const removeAcentuations = str => {

  var r = str.toLowerCase();

  r = r.replace(new RegExp(/\s/g),"");
  r = r.replace(new RegExp(/[àáâãäå]/g),"a");
  r = r.replace(new RegExp(/[èéêë]/g),"e");
  r = r.replace(new RegExp(/[ìíîï]/g),"i");
  r = r.replace(new RegExp(/ñ/g),"n");                
  r = r.replace(new RegExp(/[òóôõö]/g),"o");
  r = r.replace(new RegExp(/[ùúûü]/g),"u");
                
  return r;

}

const food = function(){

  const food = [];

  const filter = [
    "ingredientes",
    "salsas para bocadillos",
    "anotación final"
  ];

  for( const [key] of Object.entries(menu) ){
    for( const [subKey] of Object.entries(menu[key]) ){

      if ( !filter.includes(subKey.toLowerCase()) ){
        food.push(subKey);
      }

    }
  }
  // iterate and filter to get only food names

  return food;

}();

const getFoodProperties = foodName => {

  for( const key in menu ){

    const keys = object.keys(menu[key]);
    
    if( keys.includes(foodName) ){
      return menu[key][foodName];
    }

  }

  return {};
}

const getAllFoodProperties = foodArray => {

  if( Array.isArray(foodArray) ){

    const results = [];

    foodArray.forEach( el => {
      const food_content = getAllFoodProperties(el);
      results.push(food_content);
    });

    return results;
  }
}

const searchFood = query => {

  query = removeAcentuations(query);

  return food.filter( item => {

    item = removeAcentuations( item );

    const regex = new RegExp( query, 'gi');

    return item.match(regex);

  });

}

const changeSuggestions = (value, setSuggestions) => {
  const query = value;
  const suggestions = searchFood( query );
  if( query.length > 0 ){
    setSuggestions(suggestions);
  } else {
    setSuggestions([]);
  }
};

export {
  searchFood,
  changeSuggestions,
  getFoodProperties,
  getAllFoodProperties
}