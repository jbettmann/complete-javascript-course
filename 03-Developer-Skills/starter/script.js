// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureK = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) fix
    value: Number(prompt("Degrees celsius:")),
  };

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) identify value
// console.log(measureK());

const temps1 = [17, 21, 23];

const printForcast = (arr) => {
  let tempString = ``;
  for (let i = 0; i < arr.length; i++) {
    tempString += `It will be ${arr[i]} degrees C in ${i + 1} days. `;
  }
  return tempString;
};

console.log(printForcast(temps1));
