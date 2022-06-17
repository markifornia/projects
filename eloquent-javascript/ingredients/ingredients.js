// Create a function
// which takes one argument
// and nest another function
// which takes 3 arguments
// (1) amount
// (2) unit
// (3) name

// call the nested function
// we are simply logging
// outputting arguments
// passed & determining whether
// there are many or one
// indicating plurality

const hummus = function(factor) {

  const ingredient = function(amount, unit, name) {

    let ingredientAmount = amount * factor;

    if (ingredientAmount > 1) {
      unit += "s";
    }

    console.log(`${amount} ${unit} ${name}`);

  };

  // call the nested function
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice")


}

// Factor or 2
hummus(2);
