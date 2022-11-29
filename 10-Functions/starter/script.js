'use strict';

const flight = 'LH234';

const jordan = {
  name: 'Jordan Bettmann',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  // if (passenger.passport === 123456789) {
  //   alert('Check in');
  // } else {
  //   alert('No Good');
  // }
};

checkIn(flight, jordan);
console.log(flight);
console.log(jordan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jordan);
checkIn(flight, jordan);

// Higher Order Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(`OG String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
