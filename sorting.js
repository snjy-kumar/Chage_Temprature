//Number sorting in Ascending and descending
let grades = [23, 53, 21, 34, 34];
grades = grades.sort(descending);
grades.forEach(print)
function asending(x, y) {
  return x - y;
}

function descending(x, y) {
  return y - x;
}

function print(element) {
  console.log(element);
}

//Sorting using Arrow function
// let grades = [32,53,56, 64, 34,44];

// grades.sort((x,y)=>y-x);
// grades.forEach((element)=> console.log(element));