// Functions

function displayPersonalData(name: string, age: number): string {
    return `${name} is ${age} years old.`
}

displayPersonalData('Ivan', 20);  //have to fallow the sequence name/string after that age/number
console.log(displayPersonalData('Ivan', 20));
//console.log(displayPersonalData('Pesho', 40));

const personalData: string = displayPersonalData('Peter', 25); //because in the interpulation we have a string, that is way we use string for the variable
console.log(personalData);

function devideNumbers(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

devideNumbers(10, 5);
devideNumbers(50, 5);
devideNumbers(100, 25);
console.log(devideNumbers(10,5));


// arrow functions
const sumNumbers = (a: number, b: number) => a + b;
sumNumbers(3,2);
console.log(sumNumbers(5,7));

// optional parameter
function greeting( name: string, age?: number) {
    if (age) {
        console.log(`${name} is ${age} years old.`)
    }
    console.log(`Hi I'm ${name}`);
}

greeting("Todor");
greeting("Trifon", 23);

function greetings( name: string, age?: number) {
    if (age) {
        return `${name} is ${age} years old.`;
    }
    return `Hi I'am ${name}`;
}

console.log(greetings("Todor"));
console.log(greetings("Trifon", 23));

// the sequence for optional paremeters is for them to be at the end of the list of parameters - function greeting( lastname?: string, name:string age?: number) gives error
// can not start with optional parameter//

// default parameters
function substractNumbers(numOne: number = 10, numTwo: number = 5) {
    console.log(numOne-numTwo);
}

substractNumbers();
substractNumbers(50); // 50 changes the default value because in this case we have value for it which is "50".
substractNumbers(50, 30);