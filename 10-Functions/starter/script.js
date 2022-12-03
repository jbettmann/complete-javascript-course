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

const greet = greeting => name => console.log(`${greeting} ${name}`);

// variable that holds return of first function (the second function)
const greetingHey = greet('Hey');

// second function
greetingHey('Jordan');

//this works too
greet('Hello')('Jordan');

const lufthansa = {
  airline: 'Lufs',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jordan Bettmann');
console.log(lufthansa);

const eurowings = {
  airline: 'EUWing',
  iataCode: 'EU',
  bookings: [],
};

const book = lufthansa.book;

// Call Method call(whereThisShouldPoint, parm1, parm2)
console.log('--- Assign "this" keyword by call() method ---');

book.call(eurowings, 23, 'Jordan Smith');
book.call(lufthansa, 24, 'Tim Smith');

// Apply Method apply(whereThisShouldPoint,[parm1, parm2])
console.log('--- Assign "this" keyword by apply() method ---');

book.apply(eurowings, [589, 'Kathryn Cooper']);

// Bind Method bind())
console.log('--- Assign "this" keyword by bind() method ---');

const bookEW = book.bind(eurowings);

bookEW(26, 'Steve Willams');

// sets predefined arguments for this function

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Bryce');
bookEW23('Dad');
console.log(eurowings);

// With EventListeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// dont care about 'this' keyword, so null
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(200));

const comboAddTax = rate => value => value + value * rate;

const addVatTax = comboAddTax(0.23);

console.log(addVatTax(100));

console.log('---- Challenge One ----');
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // Register

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
// f() now has access to a variable
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`We are now boarding all ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will Start boarding in ${wait}`);
};

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
