// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}


// Object declaration

const car: Car = {    //object name is car
    type: "Fiat",   // object propertie key value pair - key type, value for the key "Fiat"
    model: "500",
    color: "white",
    horsePower: 100,
};

console.log(car);

// Interface person Object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string [];
    greeting: () => string;   // property greeting is a function which returns a string
}

// object with method and array

const person: Person = {
    name: "Ivan",
    lastName: "Petrov",
    address: "bul. Vitosha 30",
    age: 30,
    hobbies: ["football", "tennis", "hiking"],
    greeting: function () {
        return "Hello my name is Ivan";
    },
}
 console.log(person);

 // access concrete properties
 person.name;                           // first way
 console.log(person.name);

 person["address"];
 
 person.greeting()   // how to perform the method
 person["greeting"]();
 console.log(person.greeting());

 // properties redeclaration - (keys can not be change, values can)
 person.age = 35;
 console.log(person)


 // let vs const redeclaration
 //let dog={name:"Spark"}
 //dog.name = "Bobb"
 //dog ={name:"Nik"}     //let can re-write 

 //const cat={ name:"Lusi", age: 10}; // const can not re-write
 //cat.name="Kitty";
 //cat = {"Tom", age: 20};

//explicit object type
const mouse: {name: string, favFood: string, age: number} = {
    name:"Jerry",
    favFood:"cheese",
    age: 2,
}



// interface

//person {
 // age: 20,
 // name: "Peter",
 //}


 // Interfaces - optional parameters, read only and string literals

interface User {
    name: string;
    readonly email: string; // read only parameter can only be acessed, can not be changed
    role: "user" | "admin" | "superuser" | "superadmin"  // string literal
    job?: string;    // optional parameter needs to have ? - job?:
    password?: string | number;
}

 const user : User = {
    name: "Rob",
    email: "rob@mail.com",
    role: "admin",   // can not change role to guest, as the property for role has been prededine as a string literal and ca joose only from list - "user", "admin", "superuser"
    job: "QA",
};

user.password = 234692184;
//user.email ="john@mail.com"   gives error as email is a readonly property
console.log(user);

const secondUser: User = {
    name: "Tom",
    email:"john@mail.com",
    role:"superuser",
    job: "QA",
};

interface UserPermissions extends User {
    permissions: string;
}

const thirdUser: UserPermissions = {
    name: "Tom",
    email:"tom@MediaList.com",
    role:"superuser",
    job:"QA",
    permissions: "denied",

};