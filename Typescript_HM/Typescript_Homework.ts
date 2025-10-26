let numberOne: number = 10;
let numberTwo: number = 15;
const Addition: number = numberOne + numberTwo;
const Substraction: number = numberOne - numberTwo;
console.log("The result of the addition is", Addition, "and the result of the substraction is", Substraction);

let Name: string = 'Ivan Petrov';
let Age: number = 33;
let city: string = 'Haskovo';
const presentmyself: string = `Hi my name is ${Name}, I'm ${Age} years old and I'm from the town of ${city}`;
console.log('Hi my name is', Name, 'and I am', Age ,'old', 'and I am from the city of', city); 
console.log(presentmyself);

let numOne: number = 35;
let isWithinRange: boolean = numOne >=10 && numOne <=50;
console.log(isWithinRange)

let numTwo: number = 12;
let isTheNumWithinRange: boolean = numTwo >=10 || numTwo <=50;
console.log(isTheNumWithinRange)