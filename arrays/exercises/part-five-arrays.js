let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('n'));
console.log(str.split(' '));
// () parameter in split separates at the given value in the parantheses and creates new array or substrings

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join())
// Combines all elements of an array into a string.

//3) Do split or join change the original string/array?

// No it returns new arrays with separation at a point () or comibining as a point() respectively

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits, food, plasma sword, batteries";
console.log(cargoArray = cargoHold.split(",").sort())
console.log(cargoArray.join(""))



