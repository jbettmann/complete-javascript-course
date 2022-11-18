'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays2 = ['mon', 'tues', 'wed', 'thurs'];
const hours = {
  [weekdays2[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays2[0]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (stratIndex, mainIndex) {
    return [this.starterMenu[stratIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time, address }) {
    console.log({ time, address });
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // uses Rest operator to compress otherIngred
  orderPizza(mainIngred, ...otherIngred) {
    console.log(mainIngred);
    console.log(otherIngred);
  },
  // ES6 enhanced object literals
  hours,
};

console.log(restaurant);

// restaurant.orderDelivery({
//   time: '3',
//   address: 'Via',
// });

// // destructuring objects
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// // destructuring and making new variable names
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables

// let l = 111;
// let m = 999;
// const obj = { l: 23, m: 7, c: 14 };

// ({ l, m } = obj);

// console.log(l, m);

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // destructure arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // switching variables
// // const temp = first;
// // first = second;
// // second = temp;

// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log({ starter, mainCourse });

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [n = 1, e = 1, d = 1] = [2, 33];
// console.log(i, e, d);

// //Spread Operator

// //Combined two array's
// const combinedTwoArrays = [...restaurant.starterMenu, ...restaurant.categories];

// console.log(combinedTwoArrays);

// // Real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// // Objects spread
// const newResturant = { ...restaurant, founder: 'Jordan', founded: 1992 };

// console.log(newResturant);

// // REST Operator *** Destructuring
// // Rest operator *** On LEFT side of =

// const [s, t, ...others] = [1, 2, 3, 4, 5];
// console.log(s, t, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Object Rest
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// // REST Operator *** Functions

// // uses Rest pattern as paramaters to accept as many arguments or types as need
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 10, 4, 5);

// const xx = [23, 5, 7];
// add(...xx); // use the spread

// restaurant.orderPizza('mushroom', 'onions', 'olives', 'meat', 'brock');

// console.log('*******************************');
// console.log('----- OR -----');

// // && || operators Use ANY data Type, Return ANY data type, short-circuiting
// console.log(33 || 'jordan');
// console.log('' || 'Jordan'); // jordan
// console.log(true || 0); // true
// console.log(undefined || null); // null

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10

// // same as above but best practice.
// const guest2 = restaurant.numGuests || 10;

// console.log('----- && -----');

// console.log(0 && 'Jordan');

// console.log('Hello' && 23 && 0 && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'meet');
// }
// // checks if the method 'orderPizza' exists. If it does, it then executes it.
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'sausage');
// console.log('----- ?? -----');
// console.log('----- Nullish Coalescing Operator -----');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10

// // Nullish: null and undefined (NOT 0 or " ")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

// console.log('----- Logical Assignment Operator -----');

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Jordan',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

console.log('---- Challenge -----');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('---- Challenge 2-----');
// 1)
// Loop over game.scored arry
for (const [i, name] of game.scored.entries()) {
  //print goal number & print each player
  console.log(`Goal ${i + 1}: ${name}`);
}
// 2)
// loop over odds to calculate average odds
// create Object to loop over
const odds = Object.values(game.odds);
// averageOdds variable
let averageOdds = 0;
for (const odd of odds) {
  // add odds together
  averageOdds += odd;
}
// divide odds by length and print average odds
console.log('Average Odds', (averageOdds /= odds.length));

// 3)

// Print the 3 odd to consoel with team names

// loop over odds object
// create variable for teams
//create variable for odds
// combine string

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamString}: ${odd}`);
}

console.log('---- Challenge 1-----');

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(
    'Players:',
    ...players,
    'Number of goals scored:',
    players.length
  );
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log('---- Challenge 3 -----');

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1) create array with no duplicates
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)remove Yellow card at min 64
gameEvents.delete(64);
console.log(gameEvents);

// 3) Find average amount of time something happened by taking the total time of game divided by the number of events
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4) Loop over events and find if its first half or second
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// console.log('----- for of Loop ------');

// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for of loop
// for (const item of menu1) console.log(item);

// // entries() get index of item
// // you can descruture item into index, i , and element, el
// for (const [i, el] of menu1.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log('-- Optional Chaining --');

// // OLD way of writing
// if (restaurant.hours && restaurant.hours.fri)
//   console.log(restaurant.hours.fri.open);

// // WITH optional chaining
// console.log(restaurant.hours.fri?.open);
// console.log(restaurant?.hours?.fri?.open);
// console.log(restaurant.hours.mon?.open);

// // example

// for (const day of weekdays2) {
//   // console.log(day);
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // Methods
// console.log(restaurant.order?.(1, 2) ?? 'Method does not exist');

// //Array

// const userss = [
//   {
//     // name: 'jordan',
//     email: 'hello@gmail.com',
//   },
// ];

// console.log(userss[0]?.name ?? 'user array empty');

// // Property NAMES "keys"
// const properties1 = Object.keys(hours);
// console.log(properties1);

// let openString = `We ar open on ${properties1.length} days: `;

// for (const day of properties1) {
//   openString += `${day}, `;
// }
// console.log(openString);

// //Property VALUES
// const values = Object.values(hours);
// console.log(values);

// // Entire object
// const entries = Object.entries(hours);
// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
//}

// Sets
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'pasta',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set('Jordan'));

// console.log(ordersSet.size); // simplar to .length
// console.log(ordersSet.has('Bread')); // similar to includes()
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('risotto');

// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['waiter', 'Chef', 'waiter', 'Manger', 'Chef', 'waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //Maps

// const restt = new Map();

// // set() is simplar to add()
// restt.set('name', 'Classico Intalian'); // first arg is "key" second is "value"
// restt.set(1, 'Italy');

// // set() method returns the Map
// console.log(restt.set(2, 'Germany'));

// restt
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// // use the get() method to read data from Map. Just pass the name of key in its data type
// console.log(restt.get('name'));
// console.log(restt.get(true));

// const time = 8;
// console.log(restt.get(time > restt.get('open') && time < restt.get('close')));

// // check if Map has key
// console.log(restt.has('categories'));
// restt.delete(2);
// restt.set([1, 2], 'Test');

// console.log(restt);
// // restt.clear();
// console.log(restt.size);

// // prints undefined because of JavaScript behind the seines, Heap
// console.log(restt.get([1, 2])); // undefined

// // This works
// const arr = [1, 2];
// restt.set(arr, 'Test');
// console.log(restt.get(arr)); // "Test"

// // selecte a DOM element
// restt.set(document.querySelector('h1', 'Heading'));

// // This is the perfered way of creating a Map
// const question = new Map([
//   ['question', 'what is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try Again'],
// ]);

// // console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// // console.log(answer);

// // checks if answer === to correct answer in Map, then returns 'true' or 'false'
// console.log(question.get(answer === question.get('correct')));

// console.log([...question]);
// console.log('All Keys', [...question.keys()]);
// console.log('All Values', [...question.values()]);
// console.log(console);
