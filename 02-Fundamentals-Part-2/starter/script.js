// "use strict"; // help avoid bugs. Shows visible errors.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive");

// // const interface = "Audio"; // cannot use interface

// function logger() {
//   console.log("Logger running");
// }

// logger(); // invoking, running or calling function
// logger();

// // function declaration. Can be called before declared.
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1999);
// console.log(age1);

// // // function expression. Expression create values.
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const yearsUntilRet = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   return `${firstName} retires in ${retirment}`;
// };

// console.log(yearsUntilRet(1999, "Jordan"));

// const age2 = calcAge2(1999);
// const age3 = calcAge3(1999);

// console.log(age1, age2, age3);

// function cutFruitPieces(fruit1, fruit2) {
//   return fruit1 * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const orange = cutFruitPieces(oranges);
//   const apple = cutFruitPieces(apples);
//   const juice = `Juice with ${apple} apples and ${orange} oranges!!`;
//   return juice;
// }

// const appleJuice = fruitProcessor(9, 13);
// console.log(appleJuice);

const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvgScore = average(85, 54, 41);
const koalasAvgScore = average(23, 24, 27);
console.log(dolphinsAvgScore, koalasAvgScore);

function checkWinner(dolAverage, kolAverage) {
  if (dolAverage > kolAverage * 2) {
    console.log(`Dolphins win (${dolAverage} to ${kolAverage})`);
  } else if (dolAverage * 2 < kolAverage) {
    console.log(`Koalas win (${kolAverage} to ${dolAverage})`);
  } else {
    console.log("No winner");
  }
}

checkWinner(dolphinsAvgScore, koalasAvgScore);

// // function expression. Expression create values.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
// ========================== Arrays =============================
const array = [1992, 1967, 2002, 2010, 2018];

let ages = [];
array.forEach((ar) => {
  ages.push(calcAge2(ar));
});
console.log(ages);

// Add elements to end
array.push("jay");

//  Adds element to begining of array
array.unshift("jay");

// Remove elements
array.pop(); // removes last. Does return removed element
array.shift(); // removes first. Does return removed element

array.indexOf(1992);
array.includes(1992); // includes test with stick equality. Does not due type cohorsion

const tipCalc = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [100, 125, 555, 44];

let tips = [];
bills.forEach((bill) => tips.push(tipCalc(bill)));
console.log(tips);
