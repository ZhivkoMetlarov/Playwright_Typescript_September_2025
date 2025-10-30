/// class declaration

class Person {
    name: string;   // property "name" of type "string"
    age: number;

    constructor (name: string, age: number) {     //two parameters that we are working with, constructor is called automaticaly after we instance the class
        this.name = name;                         // assignment to the class itself is done with "this"
        this.age = age;
    }

    introduction(): void {                  // method that call 
        console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const  person1 = new Person ("Ivan", 20);     // instantiation of the class

person1.introduction()                       // with introduction we are calling the introduction method, response should be "Hi I'm Ivan and I'm 20 years old."
person1.name;
person1.age;
console.log("person1.name", person1.name);
person1.age

// access modifiers, by default properties in this class are public which means they can be access and changed.

person1.name = "Petar";
console.log('person1.name:', person1.name);


class People {

    constructor (public name: string, public age: number) {         /// same example as the above, just to show shorter syntax/writing version in here we add the access modifier "public" in the constructor direcly
        this.name = name;                                      
        this.age = age;
    }

    introduction(): void {                  // method that call 
        console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);
    }
}


/// readonly access modifier

class ReadonlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;

    }

    intro(): void {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person2 = new ReadonlyPersonData("Teodor", 25)   /// creating the class instance 
console.log('person2.age:', person2.age);
console.log('person2.age:', person2.name);
console.log(person2.intro);

//person2.age = 33;          // error thrown  because access modifier is readonly
//person2.name = "Petya";    // can not reassign name because access modifier is readonly.


// private access modifier 

class PrivatePersonData {
    private name: string;
    private age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private displaySecretMessage(): string {
        return "This is a message from private method";
    }

        intro(): void {                        // fisrt case string
        //return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;   first case
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
        console.log(this.displaySecretMessage);
    }
}

const person3 = new PrivatePersonData('Plamen', 34);
// person3.name;       // Property 'name' is private and only accessible within class 'PrivatePersonData'.
// person3.age;        // access modifier is of type private

console.log(person3.intro());
// console.log(person3.displaySecretMessage)     // Property 'displaySecretMessage' is private and only accessible within class 'PrivatePersonData'.


/// Class Inheritance

class User {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    intro(): void {
        console.log('Nice to meet you!')
    }
}

class UserDetails extends User {      /// new class UserDetails inherits properties from class User with the expression extends.
    constructor(name: string) {
        super(name)
    }

    showDetails(): void {
        console.log(`My name is ${this.name}!`);
    }
}

const user = new UserDetails('Vladislav');
console.log(user.name);
user.showDetails();
user.intro();


/// protected access modifier

class ProtectedPerson {
    constructor (protected name: string, protected age: number) {
        this.name = name;
        this.age = age;
    }

    getProtectedData(): string {
        return `Protected name ${this.name} and protected age ${this.age}`;
    }
}

const protectedPerson = new ProtectedPerson('Protected Pesho', 30);
// protectedPerson.name     Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// protectedPerson.age      Property 'age' is protected and only accessible within class 'ProtectedPerson' and its subclasses.

class Student extends ProtectedPerson {
    private grade: number;

    constructor(name:string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    studentIntro(): void {
        console.log(this.getProtectedData());
        console.log(`${this.name} is ${this.age} old with this kind of grades ${this.grade}`)
    }
}

const student = new Student('Mitko',21, 6);
student.studentIntro();

export{}

