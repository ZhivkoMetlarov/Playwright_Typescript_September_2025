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

