let nameArray: string [] = ['Pesho', 'Gosho', 'Ivan', 'Anton', 'Mitko'];
nameArray.push('Drago');
console.log(nameArray);

let numArray: number [] = [2, 4, 6, 8, 10, 12]
numArray.shift();
console.log(numArray);

let arrayOfNumbers: number[] = [1,2,3,4,5];
let DevideNums = arrayOfNumbers.map((number: number) => number /2);
console.log(DevideNums);

let greaterThanNumbers: number[] = [3,7,1,9,12,4];
let biggerThan: number [] = greaterThanNumbers.filter((num:number) => num >5);
console.log(biggerThan);

let numberSorting: number [] = [9,3,7,2,8,5];
let orderNums: number [] = numberSorting.sort((a: number, b: number) => a - b);
console.log(orderNums);

let fruits: string [] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let firstFruits: string[] = fruits.slice(0, 3);
console.log(firstFruits);

let vehichles: string [] = ['car','bike', 'bus', 'train', 'boat'];
let removedviechles: string [] = vehichles.splice(2,2, 'yach','plane');
console.log(vehichles);


function convertToCentimeters(inches: number = 1) {
   let centimeters = inches * 2.54;
   console.log(`${inches} inches is equal to ${centimeters} centimeters.`);
   return centimeters;
};

convertToCentimeters(5)

function theBiggestNumber(numbOne: number, numbTwo: number, numbThree: number) {
    if (numbOne > numbTwo && numbOne > numbThree) {
    console.log(`${numbOne} is the biggest number`)
    }
    else if (numbTwo > numbOne && numbTwo > numbThree) {
    console.log(`${numbTwo} is the biggest number`)
    }
    else {console.log(`${numbThree} is the biggest number`)}
}

theBiggestNumber(50,88,12);

function findLargest(num1: number, num2: number, num3: number) {
  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  console.log("The largest number is: " + largest);
  return largest;
}

findLargest(6,12,24);



function calculateArea(width: number, height?: number,): number {
    if (height) {
        return width * height;
    } else {
       return width * 4;
    }
}

console.log(calculateArea(5));
console.log(calculateArea(5,5));


