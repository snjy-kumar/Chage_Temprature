//array.reduce();

let prices = [2, 5, 6, 6, 33, 66, 64];
let total = prices.reduce(checkOut);

console.log(`The total price of your cart $${total}`)

function checkOut(total, element) {
  return total + element
}