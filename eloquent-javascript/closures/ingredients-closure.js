/*
* The code in ingredient.js
* can be wrapped in a closure
* by taking the factor parameter
* first then subsequently calling
* its ingredients within the closure
*/

const hummus = function(factor) {

    return function(amount, unit, name) {
        let ingredientAmount = amount * factor;

        if (ingredientAmount > 1) {
            unit += "s";
          }
      
        console.log(`${amount} ${unit} ${name}`);

    }
}

// using closures
var servings = hummus(4);

// probably not the best 
// implementation but a simple 
// example of using closures
servings(1, "can", "chickpeas");
servings(1, "can", "chickpeas");
servings(0.25, "cup", "tahini");
servings(0.25, "cup", "lemon juice");
servings(1, "clove", "garlic");
servings(2, "tablespoon", "olive garden");
servings(0.5, "tablespoon", "cumin");
