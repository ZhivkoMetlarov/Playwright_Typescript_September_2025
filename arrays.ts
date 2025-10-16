// arrays declaration
let numberArray: number[] = [ 1, 2, 3, 4];
let stringArray: string [] = ['Pesho','Gosho','Tosho','Ivan'];
let combineArray: (string | number) [] = [1, 'Pesho', 'Ivan', 2];

//acess element by index
stringArray [0];
stringArray [1];
combineArray [2];
console.log(stringArray[0]); //Pesho
console.log(stringArray[1]); //Gosho
console.log(combineArray[2]); //Ivan

// acces array lenght
numberArray.length;

// 'map' method 
let MultiplyNums = numberArray.map((number: number) => number * 2);
let mapNames = stringArray.map((currName: string) => `Hello ${currName}`)
let checkTypeof = combineArray.map((element: number | string) => {
    if (typeof element === "number") {
        return element + 5;
    } else {
        return `Welcome ${element}`;
    }
})
console.log(MultiplyNums, mapNames, checkTypeof)

// 'filter' method
let positiveNumbers: number [] = [2,3,4,5,6]
let filteredArray: number [] = positiveNumbers.filter((num:number) => num > 3);
// let arrayFilter: number [] = positiveNumbers.filter((num:number) => num <4);
console.log("FilteredArray", filteredArray);

// 'sort' method
let sortNumbers: number [] = [100,2,30,5,40,6];
let sortedResult = sortNumbers.sort((a: number, b: number) => a - b ); //"a-b" ascending, "b-a" descending 
console.log(sortedResult);

// 'push' method
sortedResult.push(200);
console.log(sortedResult);

// 'pop' method
sortedResult.pop();
console.log(sortedResult);

// 'shift' method
sortedResult.shift();
console.log(sortedResult);


// 'unshift' method
sortedResult.unshift(1);
console.log(sortedResult);
