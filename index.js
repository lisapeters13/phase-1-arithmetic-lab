
// Write your code here
let num1 = 31; // Assign a value to num1
let num2 = 2; // Assign a value to num2
let multiply = num1 * num2;

function generateRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

const random = generateRandom();
console.log(random);

let num3 = 14; // Assign a value to num3
let num4 = 5; // Assign a value to num4

let mod = (num3 % num4 === 4) ? num3 % num4 : num3 % num4 + num4;
console.log(mod);
const numbers = [10, 20, 5, 15]; 

const max = Math.max(...numbers);
console.log(max);