/*
* Using Javascript classes
*/

class UserClasses {

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
