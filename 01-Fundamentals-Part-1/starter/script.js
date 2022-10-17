// let js = "good";
// if (js === "good") {
//   console.log("Nice");
// }

// let firstname = "jordan";
// console.log(firstname);

// let country = "USA";
// let continent = "North America";
// let population = "325M";

// console.log({ country, continent, population });

// let isIsland = false;
// let language;

// console.log({ country, continent, population, isIsland, language });

markHeight = 1.69;
markWeight = 78;
johnHeight = 1.95;
johnWeight = 92;

markBMI = (markWeight / markHeight ** 2).toFixed(2);
johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

markBMIBigger = markBMI > johnBMI;

if (markBMIBigger) {
  console.log(`Marks BMI (${markBMI}) is bigger then John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is bigger then Marks BMI (${markBMI})`);
}

console.log({ markBMI, johnBMI, markBMIBigger });

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You can drive!! 🚗");
} else {
  console.log("No 🚗");
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

// const number = Number(prompt("What is your favorite number"));

dolphinsAverage = (96 + 108 + 89) / 3;
koalasAverage = (99 + 110 + 110) / 3;

console.log({ dolphinsAverage, koalasAverage });

if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
  console.log("Dolphins Win");
} else if (dolphinsAverage > koalasAverage && dolphinsAverage < 100) {
  console.log("No win for dolphins");
} else if (dolphinsAverage < koalasAverage && koalasAverage > 100) {
  console.log("Koalas Win");
} else if (dolphinsAverage < koalasAverage && koalasAverage < 100) {
  console.log("No win for Koalas");
} else {
  console.log("Draw");
}
