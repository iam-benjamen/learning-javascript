const movements = [200, -4500, 500, 700, -340, 500, -600];

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
  const HumanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const AdultHumanAges = HumanAges.filter((age) => age >= 18);
  const average =
    AdultHumanAges.reduce((acc, age) => acc + age, 0) / AdultHumanAges.length;
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
