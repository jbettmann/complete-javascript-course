'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Nav
// putting event listener on all elements
// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault(); // prevent from go right to section
//     const id = this.getAttribute('href'); // gets ie 'section--1'
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// Event Delegation: putting event listener on parent element
// 1. Add event listener to common parent element
// 2. Determine what element originated the event. e.target

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // prevent from go right to section

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // gets ie 'section--1'
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement); // most interested in

// h1.closest('.header').style.background = 'var(--gradient-secondary';

// h1.closest('h1').style.background = 'var(--gradient-primary';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Tabbed Component ***********************************************

// Event Delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active tab
  // remove active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // add active class
  clicked.classList.add('operations__tab--active');

  // Activate content area
  // remove active tab
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  // add active class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation and event arguments *************************

// handler function that uses 'this' and bind method
const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const linked = e.target;
    const siblings = linked.closest('.nav').querySelectorAll('.nav__link');
    const logo = linked.closest('.nav').querySelector('img');

    siblings.forEach(sib => {
      if (sib !== linked) sib.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
// ******************************** PROJECT *******************************************

// ******************************** LECTURE *******************************************

// SMOOTH SCROLLING
// btnScrollTo.addEventListener('click', e => {
//   const s1coords = section1.getBoundingClientRect(); // get the DOM coordinate to an element or section
//   console.log(s1coords);
//   // console.log(e.target.getBoundingClientRect());
//   // console.log('Current Scroll', window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   'heigh/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   // Scrolling very old school
//   // scrollTo(s1coords.left + scrollX, s1coords.top + scrollY); // takes current scroll position and then adds section position

//   // Smooth Scrolling. still old school
//   // scrollTo({
//   //   left: s1coords.left + scrollX,
//   //   top: s1coords.top + scrollY,
//   //   behavior: 'smooth',
//   // });

//   // MOST MODERN WAY
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
// // random color rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // console.log(randomColor(0, 255));
// // Bubbling
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
//   },
//   true // capturing event in capturing phase
// );

// Selection Elements
// Selects Entire document
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// Need selector . or #.
const header = document.querySelector('.header');

// Need selector . or #. Produces Node List
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// only pass ID name. No selector
document.getElementById('section--1');

// HTML Collection. Updates auto.  No selector
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// HTML Collection. Updates auto.  No selector
document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML

// creates element. Pass element tag
const message = document.createElement('div');
message.classList.add('cookie-message');

// insert Text
// message.textContent = 'We use cookies for imporved functionality and analytics';
message.innerHTML = `We use cookies for imporved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// prepend adds as first child to element
header.prepend(message);

// append adds as last child of element
header.append(message); // message can only be displayed once in DOM

// header.append(message.cloneNode(true)); allows for double display

//  place element before or after element as a sibling
// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// Styles
// inline styles
message.style.backgroundColor = '#37383d'; // value type of string
message.style.width = '120%';

console.log(message.style.backgroundColor); // .style only works to read style if set inline

// getCgetComputedStyle(element) to get all style properties from CSS file
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Setting CSS variables. document(js).documentElement(CSS root).style.setProperty('CSS property/variable name')
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log('absolute', logo.src); // absolute
console.log('relative', logo.getAttribute('src')); // releative

console.log(logo.alt);
console.log(logo.className);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// set
logo.alt = 'Beautiful mim';
logo.setAttribute('company', 'Bankist');

// Data Attributes
// starts with data-. get with dataset
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// DO NOT USE!!! Overrides all exciting classes. Can only put ONE class on element
// logo.className = 'jordan';

// mouseenter event. Similar to hover in CSS
// const alertH1 = () => {
//   alert('addEventListner; Great! You did it');

//   setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
// };

// h1.addEventListener('mouseenter', alertH1);

// old school way of eventListener
// h1.onmouseenter = () => {
//   alert('addEventListner; Great! You did it');
// };
