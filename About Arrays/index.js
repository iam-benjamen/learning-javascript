const movements = [200, -4500, 500, 700, -340, 500, -600];
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//native for
for (let i = 0; i < movements.length; i++) {
  const movement = movements[i];
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//For of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//USING forEach to iterate
//ForEach cannot break out of iteration
movements.forEach(function (movement, index, movements) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//Working with maps
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "EUR", "EUR"]);
console.log(currenciesUnique);

//Working with Sets
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//Coding challenge
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); //shallow copy
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog Number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([2, 4, 5, 2, 2, 5, 6], [3, 5, 3, 2, 8, 9]);

//MAP, FILTER AND REDUCE ARE THREE ARRAY TRABSFORMATION
//TOOLS THAT CREATES ANOTHER ARRAY WITH THEIR RESULTS

//MAP
console.log(movements.map((movement) => movement * 5));

//FILTER
console.log(movements.filter((movement) => movement > 0));

//REDUCE

//Adding elements with reduce
console.log(
  movements.reduce((acc, curr, i) => {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + curr;
  })
); //Reduce can take a second variable which will be the initial accumulator

//Finding Maximum with reduce
const max = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements[0]);

console.log(max);

//Coding Challenge
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

//Chaining methods

const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter((movement) => movement > 0)
  .map((movement, i, arr) => {
    return movement * eurToUsd;
  })
  .reduce((accumulator, movement) => accumulator + movement, 0);

//Avoid Mutating arrays and overly chaining methods together

//FIND METHOD
//retrieves an element of the array
const firstWithdrawal = movements.find(function (mov) {
  mov < 0;
});
console.log(firstWithdrawal);

//objects
const JessicaAccount1 = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(JessicaAccount1);
//with for of
for (const account of accounts) {
  if (account.owner === "Jessica Davis") {
    console.log(account);
  }
}

//with map
const JessicaAccount2 = accounts.filter(
  (account) => account.owner === "Jessica Davis"
);
console.log(JessicaAccount2);

//FINDINDEX METHOD
console.log(movements.findIndex((movement) => movement > 200));
//returns the index of the first element that satisfies the condition

//INCLUDES CHECKS FOR EQALITY3
console.log(movements.includes(-130));
//returns a bolean

//SOME can take conditions
console.log(movements.some((movement) => movement === -130));
//include works better for equality

//EVERY returns true if every elements
console.log(account4.movements.every((movement) => movement > 0));

//FLAT method, goes only one level
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, 5, [6]], 7, 8];
console.log(arrDeep.flat(2));

///SORTING STRINGS ALPHABETICAL
const names = ["Bayo", "Tolu", "Bola", "Ahmed"];
console.log(names.sort());

//Sorting Numbers
//If you return positive value: a,b
//If you return negative value: b,a
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   }
// });

//Ascending
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
//Note that sort mutates the original array

//Fill
const x = new Array(7); //creates an empty array
x.fill(1); //fill with 1s
x.fill(1, 3); //fill with 1s starting from index 3
x.fill(4, 2, 4); //fill with 4s starting from index 2 to 4

//Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Exercise
const diceRolls = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 7)
);
console.log(diceRolls);

//Mkaing array from NodeList
labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movemenets__value"),
    (el) => (el.textContent = "hey")
  );
  console.log(movementsUI);
});
//or

const movementsUI2 = [...document.querySelectorAll(".movemenets__value")];
