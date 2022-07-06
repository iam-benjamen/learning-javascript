//learning about functions in JavaScript
//DEFAULT Parameters Example

function Sum(x = 4, y = 6) {
  return x + y;
}

//Functions can direcyl have impact on an object, beware
//Functions in JavaScript are first class
//Thay are treated like jsut another typr of object

//We can store functions in variables
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

//We can pass functions as arguments to other fundtions
btnClose.addEventListener("click", function greet() {
  console.log("Hello");
});

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

book.call(swiss, ...flightData);

//Bind - retuns a new function
