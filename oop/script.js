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
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

jonas = new Person("jonas", 1991);
console.log(jonas instanceof Person);

//Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

//ADDING PROPERTIS TO PROTOTYPES
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
