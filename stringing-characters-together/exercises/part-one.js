let num = 1001;

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let num1 = String(num)
console.log(typeof num1)
console.log(num1)
console.log(num1.length)



//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

num = 123.45
let num2 = num.toString().replace('.','');
console.log(num2.length)

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 123.45
if(!isNaN(num)) {
    let numCon = num.toString();
    if(numCon.includes('.'))
 console.log('It is a  decimal number!');
}else {
 console.log(" It is a integer Number.");
 
}