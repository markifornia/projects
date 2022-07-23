// Scope

// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a, b, c);
//     }
//     inner();
// }

// outer();

// Closure

// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }

// const fn = outer();
// fn();
// fn();

// Function Currying

// function (a, b, c) is tranformed to f(a)(b)(c)

function sum(a, b, c) {
    return a + b + c;
}

// console.log(sum(2, 3, 5));

// from sum(2, 3, 5) to sum sum(2)(3)(5)
// Nest functions

function curry(fn) {
    return function(a) {
        return function(b) {
            return function (c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

// console.log(add5);

// this keyword
// refers to the object it belongs to
// (1) Implicit Binding
// (2) Explicit Binding
// (3) New Binding
// (4) Default Binding

// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// }

// sayMyName('Walter White');
// sayMyName('Heisenberg');

const person = {
    name: "Mark",
    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
}

// person.sayMyName();
globalThis.name = 'Superman';
function sayMyName(name) {
    console.log(`My name is ${this.name}`);
}

// sayMyName.call(person);

// function Person(name) {
//     this.name = name;
// }

// const p1 = new Person('Mark');
// const p2 =  new Person('Batman');

// console.log(p1.name, p2.name);

//sayMyName();

// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// }

// const person1 = new Person('Bruce', 'Wayne');
// const person2 = new Person('Clark', 'Kent');

// person1.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// console.log(person1.getFullName());

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName);
//     this.superHero = true;
// }

// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime');
// }

// SuperHero.prototype = Object.create(Person.prototype);


// const batman = new SuperHero('Bruce', 'Wayne');
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName());

// console.log(person1.getFullName());
// console.log(person2.getFullName());

class Person {

    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    sayMyName () {
        return `${this.firstName} ${this.lastName}`; 
    }

}

// const classP1 = new Person('Bruce', 'Wayne');
// console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }

    fightCrime() {
        console.log('Fighting crime');
    }

}

const batman = new SuperHero('Bruce', 'Wayne');
// console.log(batman.sayMyName());

// Iterables and Iterators

// String

const str = 'Mark';

// for loop
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }

// array
const arr = ['M', 'A', 'R', 'K'];

// for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (const char of str) {
//     console.log(char);
// }

// for (const item of arr) {
//     console.log(item);
// }

// Iterator - Protocol
const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                step++;
                if(step === 1) {
                    return { value: 'Hello', done: false}
                } else if (step == 2) {
                    return { value: 'World', done: false}
                }
                return { value: undefined, done: true}
            }
        };
        return iterator;
    }
}

// for (const word of obj) {
//     console.log(word);
// }

// Yeah that previous example was a bit much 


// Enter Generators (pause execution)
function normalFunction() {
    console.log('Hello');
    console.log('World');    
}

// normalFunction();
// normalFunction();

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}

const generatorObject = generatorFunction();

for (const word of generatorObject) {
    console.log(word);
}

























