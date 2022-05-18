
import menu from './menu.json';

const removeAcentuations = str => {
    var r = str.toLowerCase();

    r = r.replace(new RegExp(/[\s()]/g), ""); // spaces and parentheses
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[èéêë]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/ñ/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[ùúûü]/g), "u");

    return r;
}

const parsedMenu = function () {

    const filter = [
        "ingredientes",
        "salsas para bocadillos",
        "anotación final"
    ];

    var this_ = {};

    const menu_category_keys = Object.keys(menu);

    menu_category_keys.forEach(category => {

        const category_food_keys = Object.keys(menu[category]);

        this_[category] = {};

        category_food_keys.forEach(foodName => {

            if (!filter.includes(foodName.toLowerCase())) {
                this_[category][foodName] = { ...menu[category][foodName], categoria:category };
            }

        });
    });

    return this_;

}();

const food = function () {

    const food = {};

    for (const [key] of Object.entries(parsedMenu)) {
        for (const [subKey] of Object.entries(parsedMenu[key])) {
            food[subKey] = parsedMenu[key][subKey];
        }
    }
    // iterate and filter to get only food names

    return food;

}();

const getFoodProperties = (foodName) => {

    for (const key in menu) {

        const keys = Object.keys(menu[key]);

        if (keys.includes(foodName)) {
            return { ...menu[key][foodName], categoria: key };
        }

    }

    return {};
}

const changeTitle = title => {
  document.querySelector('title').innerHTML = title;
}

export {
    parsedMenu,
    changeTitle,
    getFoodProperties,
    removeAcentuations,
    food
}