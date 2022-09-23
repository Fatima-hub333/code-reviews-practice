/* Challenge: Give a textual code review.
Provide feedback using code comments. */

// Function name would be more readable in camelCase like getDiscount, 
function getdiscount(code) {
  // convert the value of code to uppercase before finding a matching promo code
  // Declare promo with const to prevent its reassignment
  let promo = promos.find(promo => promo.code === code)
  console.log(promo) // lets not include console.log statements in production code
  // I belive you should pay close attention
// to code indentation & commas consistency
  
  /* Make this condition more concise without the !== comparison;
  only check if promo is truthy and active: promo && promo.isActive */
  if (promo !== undefined && promo.isActive) {
    console.log(`You get a ${promo.amount}% discount!`) // Consider leaving out of production code
    return promo.amount / 100;
}
return 0;
}

// Good job so far in creating functio, 
// Function name would be more readable in camelCase like calculateFinalPrice,
function calculatefinalprice(basePrice, userCode) {
  /* Similar to getDiscount, consider omitting the else block and
  returning basePrice if the condition is false */
  if (userCode) {
    const discount = getdiscount(userCode)
    const finalPrice = basePrice - basePrice * discount
    return finalPrice;
  } else {
    return basePrice;
  }
}

// Move this array to the top of the file
// for better code organization
const promos = [
  { code: 'TOTALLY10', amount: 10, isActive: true },
  { code: 'PLENTY20', amount: 20, isActive: false },
  { code: 'NIFTY50', amount: 50, isActive: true },
  { code: 'WHOPPING75', amount: 75, isActive: true },
  { code: 'YOLOFREE', amount: 100, isActive: false },
]

console.log(calculatefinalprice(500, 'NIFTY50'))