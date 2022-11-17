'use strict';

// console.log(this);

// const calAge = function (year) {
//   console.log(2037 - year);
//   console.log(this); // undefined
// };
// calAge(1989);

// const calAgeArrow = year => {
//   console.log(2037 - year);
//   console.log(this); // points to window
// };

// calAgeArrow(1989);

// const jordan = {
//   year: 1989,
//   firstName: 'Bettmann',
//   calAge: function () {
//     console.log(2098 - this.year);
//     const self = this;
//     const mil = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     mil();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jordan.greet();
// jordan.calAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jordan',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log(friend);
// console.log(me);

// primitive types
let lastName = 'Bettmann';
let oldLastName = lastName;
lastName = 'Werner';

console.log(lastName, oldLastName);

// reference types
const kathryn = {
  firstName: 'Kathryn',
  lastName: 'Tim',
  age: 34,
};
const marriedKathryn = kathryn;
marriedKathryn.lastName = 'NOOOOOO';
// console.log('before', kathryn);
// console.log('after', marriedKathryn);

//copy object
const kathryn2 = {
  firstName: 'Kathryn',
  lastName: 'Tim',
  age: 34,
};

const kathrynCopy = Object.assign({}, kathryn2);

kathrynCopy.lastName = 'Bettmann';
console.log('before', kathryn2);
console.log('after', kathrynCopy);
