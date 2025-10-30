//console.log("A"); // prints it in order, reads code line by line
//console.log("B"); // waits for operation from previous line to finish and after that is starts,prints the new line
//console.log("C"); // single-threaded

// basic async operation

//console.log("Start");

//setTimeout(() => {
//   console.log("Async operation");
//}, 2000);

//console.log("End");


// multiple async operations

function setTimeouts () {
    setTimeout(() => {
        console.log("3 seconds delay");
    }, 3000);

    setTimeout(() => {
        console.log("1 second delay");
    }, 1000);

    setTimeout(() => {
        console.log("2 seconds delay");
    },2000);
}

// setTimeouts();

// async await syntax

function delay (ms: number) {
    return new Promise( (resolve) => setTimeout(resolve, ms))
};

async function demo() {
    await delay(3000);
    console.log('3 seconds delay');
    
    await delay(2000);
    console.log('2 seconds delay');

    await delay(1000);
    console.log('1 second delay');
}

//demo();

// get product data

interface Rating {
    rate: number;
    count: number;
}


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}


async function getData() {
    const resposne = await fetch("https://fakestoreapi.com/products/1"); // await the operation to finish when we get a response, with "wait" we say wait for the fatching of the data to finish
    const data: Product = await resposne.json();  // turns the repsone from json format to an object
    console.log("data", data);
    console.log(`Tittle ${data.title}`);
    console.log(`Price ${data.price}`);
    console.log(`Category ${data.category}`);
}

//getData();


// try catch finally

try {
    const jsonData = JSON.parse('{"valid":true}');   // valid json format show the case without an error
    console.log(jsonData)
} catch(err) {
    console.error(err);
}

try {
    const jsonData = JSON.parse('{"valid:true}'); // invalid json format to show the case when we have an error
    console.log(jsonData)
} catch(err) {                    // not to stop the performance of the code
    console.error(err);
}

try {
    const jsonData = JSON.parse('{"valid:true}'); // invalid json format to show the case when we have an error
    console.log(jsonData)
} catch(err) {
    console.error(err);
} finally {                                    // finnaly block 
    console.log('JSON parser ready');
}


/// try,catch,finally exercise
function devideNumbers(numOne: number, numTwo: number) {
    try{
        if (numTwo === 0) {
            throw new Error ("Can not devide by zero!");
        } else {
            const result: number = numOne/numTwo;
            console.log(`Result ${result}`);
        }
        
        console.log()
    } catch (err: unknown) {
        console.error(`Error: ${err}`)
    } finally {
        console.log('Operation finished')
    }
}

devideNumbers(20,0)


async function getDataSecond(): Promise <void> {
    try{
    const resposne = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await resposne.json();
    console.log("data", data);
    } catch (error: unknown) {
        console.error(error);
    }
}

getDataSecond();