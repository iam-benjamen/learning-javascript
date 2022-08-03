"use strict";

//fUNDAMENTAL PRINCIPLES OF OOP
// ABSTRACTION: IGNORING OR HIDING DETAILS THAT DON'T MATTER
// ENCAPSULATION: KEEPING PROPERTIES OR METHODS PRIVATE IN A CLASS
//INHERITANCE: MAKING PROPERTIES AND METHODS OF A PARENT CLASS AVAILABLE TO A CHILD
//POLYMORPHISM:A CHILD ELEMENT OVERWRITING PARENT POPERTIES, GIVING IT MANY SHAPES

//OOP IN JS
//iNSTANTIATION IS THE PROCESS OF CREATING AN INSTANCE OF AN OBJECT
//PROTOTYPAL INHERITANCE
//The prototype contains methods that are accessible to all objects linked to that prototype
//Objects are linekd to a prototype object
//Behavior is delegatedto the linked prototype object

//Constructor function
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //Prototype
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// jonas = new Person("jonas", 1991);
// console.log(jonas instanceof Person);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

// //ADDING PROPERTIS TO PROTOTYPES
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty("firstName"));

// //Coding Challenge
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//   }
// }

// const bmw = new Car("BMW", 120);

// //Class Expressions
// // const PersonCl = class {};

// //Class declarations
// class PersonCl {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this.fullName = name;
//     else alert(`${name} is not a function`);
//   }

//   //Static Methods
//   static hey() {
//     console.log("Hey");
//     console.log(this);
//   }
// }

// const Jessica = new PersonCl("Jessica", 1996);
// console.log(Jessica.__proto__ === PersonCl.prototype); //returns true

// //Using Object.create()
// class Dog {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const lucky = Object.create(Dog);
// lucky.init("Sarah", 1979);
// lucky.calcAge;

// //Coding Challenge

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // const Student = function (firstName, birthYear, course) {
// //   Person.call(this, firstName, birthYear);
// //   this.course = course;
// // };

// // Student.prototype.introduce = function () {
// //   console.log(`My Name is ${this.firstName} and I study ${this.course}`);
// // };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();

// console.log(Person.prototype);
// console.log(Student.prototype);

// //Using Classes

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// class Account {
//   //Public fields
//   locale = navigator.language;

//   // Private fields
//   //  we get a syntax error if we try ro access this outside the class
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//   }

//   //Public Interface/Methods
//   deposit(val) {
//     this.#movements.push(val);
//   }

//   getMovement() {
//     return this.#movements;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved!`);
//     }
//   }
// }

class Student extends Person {
  university = "university of Ibadan";
  #studyHours = 0;
  #course;
  static numSubject = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }
}
