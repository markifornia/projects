/*
* Using a simple Javascript user class
*/

class UserClass {

  // accepts an object with 4 properties
  constructor({firstName, lastName, age, occupation}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
  }

  describeSelf() {
    console.log(`My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, I work as a ${this.occupation}`);
  }

  getAge() {
    return this.age;
  }

}

let newUser = new UserClass({firstName: 'Mark', lastName: 'Matanza', age: '42', occupation: 'Web Developer'});

newUser.describeSelf();
console.log(`Mark is ${newUser.getAge()} old`);

/*
* Using a simple Javascript user closure
*/

// Wrap in IIFE
(function() {

  let UserClosure = function({firstName, lastName, age, occupation }) {

    return ({
      describeUser() {
        console.log(`My name is ${firstName} ${lastName}, I ${age} old, I work as a ${occupation}`);
      },  
      getAge: function() {
        return age;
      }
    })
  }

console.log('-------------------------------------------------');

// Begin call the closure 

// Initialize user
callUserClosure = UserClosure({firstName: 'Mark', lastName: 'Matanza', age: '42', occupation: 'Web Developer'});

// Same syntax applies, use dot notation
callUserClosure.describeUser();

console.log(`Mark is ${callUserClosure.getAge()} old.`);

})();


