// I belive you should pay close attention
// to code indentation & commas consistency

// JavaScript guides suggest function & variable names in camelCase i.e calculatePrice, finalPrice
function calculate_price(basePrice) {
  // lets not include console.log statements in production code
  console.log("Calculating final price...");

  let discount = getDiscount(basePrice)
// JavaScript guides suggest function & variable names in camelCase i.e calculatePrice, finalPrice
  const final_price = basePrice - discount
  return final_price;
}

// Declare getDiscount with const to prevent its reassignment or change this to a named function
let getDiscount = function (basePrice) {
// This variable is unused, please remove it
  let currentDiscount = 0;
  
  // What do you think about returning the value using 
  // ternary operator to make the function more consice
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}

console.log("The final price is $${calculate_price(90)}")