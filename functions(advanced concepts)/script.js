//More about functions in JavaScript
//Default Parameters Example

function Sum(x = 4, y = 6) {
  return x + y;
}

//Functions can directly have impact on an object, beware
//Functions in JavaScript are first class
//Thay are treated like just another type of object

//We can store functions in variables
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

//We can pass functions as arguments to other fundtions
// btnClose.addEventListener("click", function greet() {
//   console.log("Hello");
// });

//Functions are just another kind of objects with methods
//Higher Order Functions are functions that take in functinos as arguments or return fundtions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order Functions
const transformer = function (str, fn) {
  console.log(`Original strng: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);

//Functions returning Functions
const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

//THIS KEYWORD

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  //using object literal
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, "Jonas Schmedtmann");

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book(23, "Sarah Williams"); //error
//This keyword points to undefined in a regular function call

//To manaually define what the this keyword points to, we use the call, apply and bind methods
book.call(eurowings, 23, "Sarah Williams");
book.call(lufthansa, 239, "Mary Cooper");

//Apply
const flightData = [239, "Mary Cooper"];
book.apply(eurowings, flightData);
//or

// book.call(swiss, ...flightData);

//Bind - retuns a new function
const bookEW = book.bind(eurowings);
bookEW(23, "Steven williams");

//custom
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas coopter");

//With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
//this keyword in lufthansa.buyplane is not accessed in document.querySelector(".buy")
//So there needs to be a binding tolufthansa

//Partial APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

//function returning functions

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const test = addTaxRate(0.23);
console.log(test(100));

//Immediately Invoked Function Expressions
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(() => console.log("This will also never run again"))();
//Variable inside IIFE are private and encapsulated
//but why use IIFE to simply make a variable private when
//const and let are blocked scoped

//Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

/*A closure makes a function recall
all variables at its birthplace 

A function always has access to the variable environment
where it was created 


A closure is the closed over variable environment
of the execution context in which a function was created,
even after that execution context is gone

A closure makes sure that a function doesn't lose connection
to the variables that existed at the function's birthplace
*/

console.dir(booker);
//exposes the Closures available

//Coding Challenge 1 -Poll App

const poll = {
  question: "What is your favourite programming language?",
  options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    if (typeof answer === "number" && answer < this.answers.length) {
      this.answers[answer - 1]++;
      this.displayResults();
    } else {
      alert("Please input a correct number");
    }
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document.querySelector(".poll").addEventListener("click", function () {
  poll.registerNewAnswer();
});

poll.displayResults.call({ answers: [5, 2, 3] });

//Coding CHALLENGE 2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  const body = document.querySelector("body");
  body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
