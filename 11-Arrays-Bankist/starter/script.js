'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ************* MY CODE ********************

const displayMovements = function (movements) {
  // clears out html
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    // accepts two stings (positionAttachHTML, stringOfHTML)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// console.log(containerMovements.innerHTML);

const createUsernames = arrAccounts => {
  arrAccounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(amount => amount > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(amount => amount < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(amount => amount > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = acc => {
  // display and calcluate movements
  displayMovements(acc.movements);
  /// display balance
  calcPrintBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

// event handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  // prevent form from sumbitting
  e.preventDefault(e);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // optional chaining to check if currentAccount exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }

  console.log(currentAccount);
});

// Transfer money between users

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // clear out input fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing transfer
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);

    console.log('Move SUccess ');
  }
  console.log(amount, receiverAcc);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const array1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// SLICE
console.log(array1.slice(2));
// end perimeter is not included
console.log(array1.slice(2, 4));
console.log(array1.slice(-2));
console.log(array1.slice());

//SPLICE (start, numberOfElementsToRemove) Mutates array
// console.log(array1.splice(2));
// array1.splice(-1);
// array1.splice(1, 2);

console.log(array1);

// REVERSE Mutates OG array
const array2 = ['j', 'r', 't', 'm'];
// console.log(array2.reverse());

// CONCAT
const letters = array1.concat(array2);
console.log([...array1, ...array2]);

// JOIN
console.log(letters.join(' - '));

// AT Method (Also works on Strings)
const arry = [23, 11, 64];
console.log(arry[0]);
console.log(arry.at(0));

// getting last array element
console.log(arry.length - 1);
console.log(arry.slice(-1)[0]);
console.log(arry.at(-1));

console.log('jordan'.at(3));

// for (const movement of movements {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1} You deposited ${movement}`);
  } else {
    console.log(`${i + 1} You withdrew ${Math.abs(movement)}`); // Math.ads() removes sign
  }
}
console.log('---- forEach() ----');
movements.forEach((move, i, arr) =>
  move > 0
    ? console.log(`${i + 1} You deposited ${move}`)
    : console.log(`${i + 1} You withdrew ${Math.abs(move)}`)
);

// forEach on Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'ERU', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${_}: ${value}`);
});

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

const checkDogs = (juilesArr, katesArray) => {
  const julNewArray = juilesArr.slice(1, -2);
  const bothArray = julNewArray.concat(katesArray);
  bothArray.forEach((dog, i) => {
    if (dog < 3) {
      console.log(`Dog number ${i + 1} is still a puppy at ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an adult at ${dog} years old`);
    }
  });
};

checkDogs(Julia, Kate);
console.log('---- Data 2 -----');
checkDogs(Julia2, Kate2);

console.log('--- Challenge 2 ---');

const calcAverageHumanAge = arry => {
  const humanAge = arry.map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16));
  console.log(humanAge);

  const adultDogs = humanAge.filter(dog => dog >= 18);
  console.log(adultDogs);

  let aveAdultAge =
    adultDogs.reduce((acc, cur) => acc + cur, 0) / adultDogs.length;

  console.log(aveAdultAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log('--- Challenge 3 Chaining---');
const calcAverageHumanAgeChain = arry => {
  const aveAdultAge = arry
    .map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16))
    .filter(dog => dog >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  console.log(aveAdultAge);
};

calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]);

// MAP
const eurToUsd = 1.1;
const movementUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementUSD);

const moveDescrp = movements.map(
  (mov, i) => `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
);
console.log(moveDescrp);

// FILTER
const deposits = movements.filter(mov => {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => {
  return mov < 0;
});
console.log(withdrawals);

// REDUCE
// acc -> SNOWBALL
const balance = movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(balance);

// Maximum value
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);

console.log(max);

// Chaining Methods PIPELINE
const totalDepoUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr); // ability to debug within chaining
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur);

console.log(totalDepoUSD);

// FIND. Returns first element that satisfies the condition
const firstWithDrawl = movements.find(mov => mov < 0);

console.log(firstWithDrawl);
