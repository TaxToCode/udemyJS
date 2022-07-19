'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

///////////////////////////////// 01. Destructuring Arrays
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  }
}

let [main, secondary] = restaurant.categories;
// console.log(main, secondary) // Italain Pizzeria

// 번거롭다.
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary) // Pizzeria Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Pizzeria Italian

const [starter,mainCourse] = restaurant.order(2,0)
console.log(starter,mainCourse) // Garlic Bread Pizza

// Nested destructuring 
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j) // 2 , [5, 6]
// const [k, , [p, q]] = nested;
// console.log(k,p,q) // 2, 5, 6

// default values 
// const [a1, a2, a3] = [8 ,9];
// console.log(a1, a2, a3); // 8, 9, undefined
// const [b1=1, b2=1, b3=1] = [5,4];
// console.log(b1, b2, b3); // 5 , 4, 1


// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr
// console.log(a,b,c) // 2,3,4
// console.log(x,y,z) // 2,3,4
// console.log(arr) // [2,3,4]
*/

///////////////////////////////// 02. Destructuring Objects
/*

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj;
// Uncaught SyntaxError: Unexpected token '='
({ a, b } = obj);
console.log(a, b);
// 23 7

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// 11 23
const {
  fri: { open: test1, close: test2 },
} = openingHours;
console.log(test1, test2);
// 11 23

const testObject = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderDelivery: function (obj) {
    console.log(obj);
  },
  secondOrderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `startMenu : ${this.starterMenu[starterIndex]}, mainMenu: ${this.mainMenu[mainIndex]}`
    );
  },

  thirdOrderDelivery: function ({ starterIndex = 2, mainIndex }) {
    console.log(
      `startMenu : ${this.starterMenu[starterIndex]}, mainMenu: ${this.mainMenu[mainIndex]}`
    );
  },
};

testObject.orderDelivery({
  time: '22:30',
  address: 'Seoul, South Korea',
  mainIndex: 2,
  startIndex: 2,
});
// {time: '22:30', address: 'Seoul, South Korea', mainIndex: 2, startIndex: 2}

testObject.secondOrderDelivery({
  time: '22:30',
  address: 'Seoul, South Korea',
  mainIndex: 2,
  starterIndex: 0,
});
// startMenu : Focaccia, mainMenu: Risotto

testObject.thirdOrderDelivery({
  mainIndex: 1,
});
// startMenu : Garlic Bread, mainMenu: Pasta
*/

/////////////////////////////////  03. The Spread Operator (...)

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// // (5) [1, 2, 7, 8, 9]

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// // (5) [1, 2, 7, 8, 9]
// console.log(...newArr);
// // 1 2 7 8 9

// const restaurant = {
//   name: '이가네 파스타',
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`맛있는 파스타를 ${ing1}, ${ing2}, ${ing3}랑 같이 드세요.`);
//   },
// };

// const newMenu = [...restaurant.mainMenu, '김치찌개'];
// console.log(newMenu);
// // (4) ['Pizza', 'Pasta', 'Risotto', '김치찌개']

// // Copy Array (얕은 복사 Shallow Copy)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // (3) ['Pizza', 'Pasta', 'Risotto']

// // Join 2 arrays
// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenu);
// // (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// // Iterables: arrays, string, map, sets, NOT objects
// // 객체는 반복이 안된다.
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];

// console.log(letters); // (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']
// console.log(...str); // J o n a s
// // console.log(`${...str}`); // Uncaught SyntaxError: Unexpected token '...'

// const ingredients = [
//   prompt('ingredient 1?'),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];
// console.log(ingredients); // ['사과', '딸기', '수박'] 사과,딸기,수박 내가 입력했음.
// restaurant.orderPasta(...ingredients); // 맛있는 파스타를 사과, 딸기, 수박랑 같이 드세요.

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'George' };
// console.log(newRestaurant);
// // {foundedIn: 1998, starterMenu: Array(4), mainMenu: Array(3), founder: 'George', orderPasta: ƒ}

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = '숙고당';
// console.log(restaurant.name); // 이가네 파스타
// console.log(restaurantCopy.name); // 숙고당


/////////////////////////////////  04. Rest Pattern and Parameters

// // Spread와 Rest는 똑같이 생겼지만 사용되는 위치에 따라 정 반대로 작동한다.
// // Spread는 배열의 요소를 뿌리지만 Rest는 수집해서 배열로 만들어준다.

// // SPREAD, =가 오른쪽에 있을 때  
// const arr = [1, 2, ...[3, 4]]
// console.log(arr) // [1,2,3,4]

// // REST, =가 왼쪽에 있을 때 
// const [a, b, ... others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [3,4,5]

// const restaurant = {
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // REST는 반드시 마지막 요소여야 한다. (그래야 남은 요소들 다 REST로 넣는거 알 수 있으니)
// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu, 
//   ...restaurant.starterMenu
// ]; 
// console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// // Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
// }
// add (2, 3); // [2, 3]
// add (5, 3, 7, 2); // [5, 3, 7, 2]
// add (8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 2, 1, 4]

// const add2 = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// }

// add (2, 3); // 5
// add (5, 3, 7, 2); // 20
// add (8, 2, 5, 3, 2, 1, 4); // 30

// const x = [23, 5, 7];
// add(...x); // 30

// const orderPizza = function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients)
//     console.log(otherIngredients)
//   }

// orderPizza('mushrooms', 'onion', 'olives', 'meat'); 
// // mushrooms 첫 번째 인자가 mainIngredients로 된 이후에
// // ['onion', 'olives', 'meat'] 나머지 인자들 모두 수집해 otherIngredients로 넣는다.
// orderPizza('mushrooms'); 
// // mushrooms
// // [] 빈 배열로 나온다.

/////////////////////////////////  05. Short Circuiting (&& and ||)

// Use Any data type, return Any data type, (논리연산자에 꼭 Boolean 쓸 필요 없다.)
// Short-circuiting, 단락평가라고 한다.

console.log(3 || 'Jonas'); // 3 , OR 연산자라서 첫번째 피연산자가 참이니까 다른 피연산자 평가 되지 않는다.
console.log('' || 'Paul'); // Paul, 첫번째 피연산자가 false니까 다른 피연산자 평가된다.
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(4 && 'Jonas'); 
// Jonas
console.log(false && '')