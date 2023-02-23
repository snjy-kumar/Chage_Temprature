const store = new Map([
  ["Jeans", 39],
  ["jacket", 36],
  ["Tie", 31],
  ["Shirt", 30],
  ["hoodie", 32]
]);

//GET method
// let shoppingCart = 0;
// shoppingCart += store.get("Jeans");
// shoppingCart += store.get("Tie");
// console.log(shoppingCart);
//till ^^


//SET method
// store.set("hat",50);
// store.delete("hat");
// console.log(store.has("Tie"));

console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`)
);