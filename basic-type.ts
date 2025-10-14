// let vs const

let num: number = 5;
num = 10;
num = 25;

const welcomeMessage: string = "Welcome!";
// Cannot assign to 'welcomeMessage' because it is a constant.
// welcomeMessage="Welcome Peter!"


// string
let message: string = 'Hello, Peter!';

// return string lenght
let messageLenght: number = message.length;
console.log(messageLenght);


// string interpulation
let welcomeMessageDetails: string = `Text message lenght is ${messageLenght}`;
// move it in the upper - `Text Message ${messageLenght}`;
console.log(welcomeMessageDetails);

// number and number operations
let numberOne: number = 10;
let numberTwo: number = 5;

let add: number = numberOne + numberTwo;
//console.log(add);

let substract: number = numberOne - numberTwo;
let multiply : number = numberOne * numberTwo;
let devide: number = numberOne / numberTwo;
//console.log(add, substract, multiply, devide);

// boolean type (true/false)
let areEqual: boolean = numberOne === numberTwo;
let isGrater: boolean = numberOne > numberTwo;
let isGraterorEqual: boolean = numberOne >= numberTwo;
//console.log('are equal:', areEqual);

// logical operators
let areEqualTo: boolean = numberOne === 10 && numberTwo === 5;
let isAnyNumberEqualTo: boolean = numberOne === 10 || numberTwo === 5; //returns false only if both are not true//
//console.log('areEqualTo:', areEqualTo);

// Conditions (if,else)

// a)ternary operator (syntax 5 = 5 ? "true result : false result")
let positiveNumberComparison: string =  numberOne > 0 ? "The number is positive" : "The number is negative";
let isPositiveComparison: string =  numberOne > 0
? `The number ${numberOne} is positive`
: `The number ${numberOne} is negative`;
//console.log(positiveNumberComparison);
//console.log(isPositiveComparison);

// b) if/else statement

const numberThree: number = 100;
//if (numberOne > 3)  {
//    console.log("numberOne is grater than 3");
//} else {
//    ("number is not grater than 3");
//

if (numberThree<=10) {
    console.log("The number is less or equal to 10");
} else if (numberThree>110) {
    console.log("The number is grater than 110");
} else if (numberThree > 50) {
    console.log("The number is grater than 50");
} else {
    console.log("numberOne is not grater than 3");
}