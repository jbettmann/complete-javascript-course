'use strict'; // help avoid bugs. Shows visible errors.

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
    console.log('No winner');
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
array.forEach(ar => {
  ages.push(calcAge2(ar));
});
console.log(ages);

// Add elements to end
array.push('jay');

//  Adds element to begining of array
array.unshift('jay');

// Remove elements
array.pop(); // removes last. Does return removed element
array.shift(); // removes first. Does return removed element

array.indexOf(1992);
array.includes(1992); // includes test with stick equality. Does not due type cohorsion

// const tipCalc = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [100, 125, 555, 44];

// let tips = [];
// bills.forEach((bill) => tips.push(tipCalc(bill)));
// console.log(tips);

//===================== Objects ===========================

const mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Johnson',
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBMI();
john.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(`John's BMI ${john.BMI} is higher than Mark's BMI ${mark.BMI}`);
} else {
  console.log(`Mark's BMI ${mark.BMI} is higher than John's BMI ${john.BMI}`);
}

let typers = [];
for (let i = 0; i < array.length; i++) {
  // typers[i] = typeof array[i];
  typers.push(typeof array[i]);
  console.log(array[i], typers[i]);
}

const age = [];

for (let i = 0; i < array.length; i++) {
  age.push(2037 - array[i]);
}
console.log(age);

// continue and break

const type = [
  100,
  'no',
  true,
  'yes',
  125,
  555,
  44,
  ['jordan', 'kathryn', 'barch'],
];

console.log('Continue and break');
for (let i = 0; i < type.length; i++) {
  if (typeof type[i] !== 'string') continue;
  console.log(type[i], typeof type[i]);
}
for (let i = 0; i < type.length; i++) {
  if (typeof type[i] === 'string') break;
  console.log(type[i], typeof type[i]);
}

// loop over array backwards
for (let i = type.length - 1; i >= 0; i--) {
  // console.log(i, type[i]);
}

for (let i = 1; i <= 4; i++) {
  console.log(`------------ Start exercise ${i}`);
  for (let r = 1; r < 6; r++) {
    // console.log(`Lifting weight reps ${r} 🏋🏼‍♀️`);
  }
}
console.log('========== While Loop========');

for (let r = 1; r <= 6; r++) {
  // console.log(`Lifting weight reps ${r} 🏋🏼‍♀️`);
}

let rep = 1;
while (rep <= 6) {
  // console.log(`Lifting weight reps ${rep} 🏋🏼‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('You rolled a 6!! Looped ended');
}

const bills = [22, 295, 176, 440, 34, 105, 10, 1100, 86, 52];

let tip = [];
let totals = [];

const tipCalc = bill => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tips = tipCalc(bills[i]);
  tip.push(tips);
  totals.push(tips + bills[i]);
}

const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log({ tip, totals });
console.log(calcAverage(totals));
console.log(calcAverage(tip));

const x = '23';

const call = year => 2039 - year;
console.log();

let a = [5, 6, 7];
let b = [3, 6, 10];

function compareTriplets(a, b) {
  let al = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      al++;
      console.log(al);
    } else if (a[i] < b[i]) {
      bob++;
      console.log(bob);
    }
  }
  return [al, bob];
}

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    ar[i] += sum;
  }
  return sum;
}
console.log(aVeryBigSum(a));

// getting the difference between diaganal sums
function dD(arr) {
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        d2 += arr[i][j];
      }
    }
  }
}

const arraysss = [6, [-4, 3, -9, 0, 4, 1]];

function plusMinus(arr) {
  // Write your code here
  let l = arr[0];
  let nl = arr[1];
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < nl.length; i++) {
    //find ratio of negitive
    if (Math.sign(nl[i]) === -1) {
      negative++;
    }
    // find ratio of postive
    if (Math.sign(nl[i]) === 1) {
      positive++;
    }

    //find ratio of 0
    if (Math.sign(nl[i]) === 0) {
      zero++;
    }
  }

  let pos = (positive / l).toFixed(6);
  let neg = (negative / l).toFixed(6);
  let ze = (zero / l).toFixed(6);

  return (
    console.log(Number(pos)), console.log(Number(neg)), console.log(Number(ze))
  );
}

plusMinus(arraysss);

const jsonSameple = [
  'task: taskA',
  'files: lib/foo.txt lib/bar.txt',
  'deps:',
  '',
  'task: taskB',
  'files: src/baz.txt',
  'deps:',
  '',
  'task: taskC',
  'files: README.md',
  'deps:',
  '',
];

console.log(JSON.parse(jsonSameple));
