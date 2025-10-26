let numberOne: number = 10;
let numberTwo: number = 15;
const addition: number = numberOne + numberTwo;
const substraction: number = numberOne - numberTwo;
console.log("The result of the addition is", addition, "and the result of the substraction is", substraction);

let name: string = 'Ivan Petrov';
let age: number = 33;
let city: string = 'Haskovo';
const presentmyself: string = `Hi my name is ${name}, I'm ${age} years old and I'm from the town of ${city}`;
console.log('Hi my name is', name, 'and I am', age ,'old', 'and I am from the city of', city); 
console.log(presentmyself);

let numOne: number = 35;
let isWithinRange: boolean = numOne >=10 && numOne <=50;
console.log(isWithinRange)

let numTwo: number = 12;
let isTheNumWithinRange: boolean = numTwo >=10 || numTwo <=50;
console.log(isTheNumWithinRange)