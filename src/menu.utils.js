
const menu = require('./menu.json');

const includesAny = (ofArray, inArray) => {

  const references = [];

  for( const el of ofArray ){
    if( inArray.includes(el) ){
      references.push(el);
    }
  }

  return references.length? references:null;
}

const filterMenu = () => {

  const filteredMenu = [];

  const SpecialCases = [
    "Pastas Gratinadas",
    "Al Horno de Leña",
    "A la Parrilla"
  ];

  for ( const [key, value] of Object.entries(menu) ) {

    const valueKeys = Object.keys(value);

    const coincidences = includesAny(SpecialCases, valueKeys);

    if( coincidences !== null ){
      coincidences.forEach( coincidence => {
        const subValues = menu[key][coincidence];
        console.log(subValues);
      });

    }

  }

}

let keys = [];

/*
for( const key in menu ) {

  let subKeys = Object.keys( menu[key] );

  const SpecialCases = [
    "Pastas Gratinadas",
    "Al Horno de Leña",
    "A la Parrilla"
  ];

  const references = includesAny(SpecialCases, subKeys);
  
  if ( references !== null ){
    subKeys = [];
    references.forEach( ref => {
      const _next = Object.keys(menu[key][ref]);
      subKeys.push( ..._next );
    } );
  }

  keys.push( ...subKeys );
}

*/

const remove = [
  "Ingredientes",
  "Anotación final",
  "Salsas para Bocadillos",
  "Salsas a elegir"
];

console.log( filterMenu(menu) );