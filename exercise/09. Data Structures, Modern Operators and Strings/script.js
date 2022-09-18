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

// // Use Any data type, return Any data type, (논리연산자에 꼭 Boolean 쓸 필요 없다.)
// // Short-circuiting, 단락평가라고 한다.

// // OR는 첫 번째 피연산자가 참이면 두번쨰 피연산자 보지도 않고 첫 피연산자 return 한다.
// console.log(3 || 'Jonas'); // 3 , OR 연산자라서 첫번째 피연산자가 참이니까 다른 피연산자 평가 되지 않는다.
// console.log('' || 'Paul'); // Paul, 첫번째 피연산자가 false니까 다른 피연산자 평가된다.
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// const restaurant = {};
// const guests1 = restaurant.numGeusts ? restaurant.numGeusts : 10;
// console.log(guests1); // 10
// restaurant.numGeusts = 30;
// console.log(guests1); // 30;

// // resturant.numGeusts가 없을 때 5를 반환하게 하는건데 위의 삼항연산자에 비해 더 좋은 방법이다.
// // 하지만 숫자가 0일 경우에는 false니까 0이 아니라 뒤에것이 나오는 문제가 있다.
// // 이 문제는 AND 연산자로 해결해야 
// const guests2 = restaurant.numGeusts || 5;
// console.log(guests2); // 10;

// console.log('-------or-------');

// // AND 연산자는 첫번째 피연산자가 true라도 평가가 계속 된다. 

// console.log(0 && 'Jonas'); // 0 (0이 false니까 평가 끝나고 바로 0 반환)
// console.log(7 && 'Jonas'); // Jonas (7이 true니까 다음 평가 가고 마지막 값 반환)
// console.log(7 && 0 && 5); // 0  (7이 true니까 다음 평가 갔는데 0이 false니까 평가 끝나고 마지막 값 반환)
// console.log('Hello' && 23 && null && 'jonas'); // null;

// const restaurant2 = {

// };

// // restaurant2.orderPizza가 존재하는지 먼저 체크하고 있을 때 펑션 작동시킨다.
// // If문을 이렇게 대체 할 수 있지만 코드를 굉장히 복잡하게 만들기 때문에
// // 기존 코드에 있는 If문을 전부 교체하는 이상한 짓 하면 안된다.
// if (restaurant2.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant2.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); 


// // console.log(4 && 'Jonas'); // Jonas
// // console.log(false && '')

///////////////////////////////// 06. The Nullish Coalescing Operator (??) null 병합 연산자

// const restaurant = {
//   numGeusts: 0,
//   testNull: null,
// };
// const guests1 = restaurant.numGeusts || 10;
// console.log(guests1); // 10, 실제 0인데도 falsy value라서 10으로 나오는 문제가 있다.

// // Nullish Coalescing Operator null 병합 연산자 falsy value 대신 null로 판단한다.
// // null and undefined (NOT 0 or ')
// // null이나 undefined일 경우에만 두번째 피연산자가 실행되고 반환되는 것이다.
// const guests2 = restaurant.numGeusts ?? 10;
// const testNull1 = restaurant.testNull ?? 'test';
// const testNull2 = restaurant.testNull ?? undefined ?? '' ?? 'test4';
// console.log(guests2); // 0
// console.log(testNull1); // test;
// console.log(testNull2); // ''

///////////////////////////////// 07. Logical Assignment Operators

// // ES2021에서 도입된 세가지 논리 할당 연산자 Logical Assignment Operators
// const rest1 = {
//   name: '김밥천국',
//   numGuests: 20,
//   testZeroNumb: 0,
//   testZeroNumb2: 0,
// };
// const rest2 = {
//   name: '피자스쿨',
//   owner: '김피자'
// };

// //// OR assignment operator

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;
// console.log(rest1.numberGuests); // 20;
// console.log(rest2.numberGuests); // 10;

// // 위의 방법과 동일하게 작동한다.
// rest1.numGuests1 ||= 10;
// rest2.numGuests1 ||= 10;
// console.log(rest1.numberGuests); // 20;
// console.log(rest2.numberGuests); // 10;

// // 그래서 0(falsy value)일 경우 발생하는 문제도 동일하게 발생하게 된다.
// rest1.testZeroNumb ||= 40;
// console.log(rest1.testZeroNumb); // 40;

// //// nullish assignment operator (null or undefined)
// rest1.testZeroNumb2 ??= 50;
// rest2.testZeroNumb2 ??= 50;
// console.log(rest1.testZeroNumb2); // 0;
// console.log(rest2.testZeroNumb2); // 50;

// // AND assignment operator

// // 위의 방법으로 하면 rest1 안에 owner: undefined가 생김 
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1.owner); // undefined 
// console.log(rest1); // { name: '김밥천국', numGuests: 20, testZeroNumb: 0, testZeroNumb2: 0, owner: '<ANONYMOUS>' }
// console.log(rest2.owner); // <ANONYMOUS>

// // 아래의 방법으로 하면 rest1,3 안에 owner: undefined가 아예 안생겨서 더 좋다.
// const rest3 = { testNumb: 100};
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// rest3.owner &&= '<ANONYMOUS>';
// console.log(rest1.owner); // undefined
// console.log(rest2.owner); // <ANONYMOUS>
// console.log(rest3); // { testNumb: 100 }

///////////////////////////////// 08. Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2') 

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �

// 1. 각각 팀의 멤버로 구성된 2개의 배열 players1, players2를 만들어라
// 2. gk 변수와 fieldplayers 배열 만들어서 넣어라. 배열에서 첫번째 요소 선수들이 골키퍼
// 3. allPlayers라는 player1,2 멤버 모두 들어간 배열을 만들어라
// 4. player1의 배열에서 교체 선수 3명 Thiago Couthinho Perisic가 들어간 새로운 배열 players1Final을 만들어라
// 5. game.odds를 기초로 team1, draw, team2 변수를 만들어라
// 6. 플레이어들 넣으면(배열 x) 넣은 골의 수를 콘솔로 출력하는 printGoals 함수를 만들어라
// 7. odd가 낮을수록 팀이 이길 확률이 높은데 2개의 팀중 어느팀이 이길 확률이 높은지에 대해 출력하는 함수를 만들어라.
// - 단 if/else 나 삼항연산자를 사용하지 않는다.

*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },
// };

// // 1번 문제
// const [players1, players2] = game.players
// console.log(players1);
// console.log(players2);

// // 2번 문제
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3번 문제
// const allPlayers = [...players1, ...players2];

// // 4번 문제
// const players1Final = [...players1, 'Thiago', 'Couthinho', 'Perisic'];
// console.log(players1Final);

// // 5번 문제
// // const {team1, x: draw, team2} = game.odds
// const {odds: {team1, x:draw, team2}}= game
// console.log(team1, draw, team2);

// // 6번 문제
// const printGoals = function (...players) {
//   console.log(`팀이 ${players.length}골을 넣었습니다.`)
// }
// printGoals ('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Coman') // 팀이 5골을 넣었습니다.
// printGoals (...game.scored) //  팀이 4골을 넣었습니다.

// // 7번 문제
// const showTopdogTeam = function (team1, team2) {
//   (team1 < team2) && console.log(`team1이 이길 확률이 더 높습니다.`);
//   (team1 > team2) && console.log(`team2가 이길 확률이 더 높습니다.`);
// }
// showTopdogTeam(team1, team2) // team1이 이길 확률이 더 높습니다.

// // 1. 각각 팀의 멤버로 구성된 2개의 배열 players1, players2를 만들어라
// // 2. gk 변수와 fieldplayers 배열 만들어서 넣어라. 배열에서 첫번째 요소 선수들이 골키퍼
// // 3. allPlayers라는 player1,2 멤버 모두 들어간 배열을 만들어라
// // 4. player1의 배열에서 교체 선수 3명 Thiago Couthinho Perisic가 들어간 새로운 배열 players1Final을 만들어라
// // 5. game.odds를 기초로 team1, draw, team2 변수를 만들어라
// // 6. 플레이어들 넣으면(배열 x) 넣은 골의 수를 콘솔로 출력하는 printGoals 함수를 만들어라
// // 7. odd가 낮을수록 팀이 이길 확률이 높은데 2개의 팀중 어느팀이 이길 확률이 높은지에 대해 출력하는 함수를 만들어라.
// // - 단 if/else 나 삼항연산자를 사용하지 않는다.

///////////////////////////////// 09. Looping Arrays: The for-of Loop

// // for-of 루프는 일반적인 for 루프에서 고려해야할 count 같은거 고려 안해도 되는게 편리함
// // 또한 continue break도 마찬가지로 쓸 수 있다. (다음 챕터)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item) ;
// // Focaccia
// // Bruschetta
// // Garlic Bread
// // Caprese Salad
// // Pizza
// // Pasta
// // Risotto

// // index를 써야 한다면 entries() 사용하면 된다.
// for (const item of menu.entries()) {
//   console.log(item)
// }
// // (2) [0, 'Focaccia']
// // (2) [1, 'Bruschetta']
// // (2) [2, 'Garlic Bread']
// // (2) [3, 'Caprese Salad']
// // (2) [4, 'Pizza']
// // (2) [5, 'Pasta']
// // (2) [6, 'Risotto']

// console.log([...menu.entries()]);
// // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }
// // 1: Focaccia
// // 2: Bruschetta
// // 3: Garlic Bread
// // 4: Caprese Salad
// // 5: Pizza
// // 6: Pasta
// // 7: Risotto

///////////////////////////////// 10. Enhanced Object Literals

// // ES6 새로운 feature인 Enhanced Object Literals (향상된 객체 리터럴)
// // ES6에서는 세 가지 바법을 도입하여 더 쉽게 객체 리터럴을 작성 할 수 있다.

// const testCase = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// }

// const exampleObject = {
//   // 1. Object Initialization From Variables 객체를 정의할 때
//   // 속성(property)와 값(value)이 같으면 이런식으로 축약 작성 가능
//   //
//   testCase,
// }
// console.log(exampleObject.testCase)
// // {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy'}

// const testCase2 = {
//   // 2. Object Method Definition Shorthand 함수 표현식을 이런 식으로 축약해서 사용 가능하다.
//   // testFunc: function () {console.log('do testCase2')}
//   testFunc() {console.log('do testCase2')}
// }
// testCase2.testFunc()
// // do testCase2

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// const testCase3 = {
//   [weekdays[3]]: {open:12 , close: 22},
//   [weekdays[4]]: {open:10 , close: 20},
//   // 3. Dynamic Property Keys
//   [`day-${2+4}`]: {open: 0, close: 12 + 12}
// }
// console.log(testCase3)
// // day-6: {open: 0, close: 24}
// // fri: {open: 10, close: 20}
// // thu: {open: 12, close: 22}

///////////////////////////////// 11. Optional Chaining (?.)
/*

// if문을 쓰지 않고 optional chaining 사용하면 간편하게 쓸 수 있다.
// 거의 모든 경우에서 nullish 연산자(??)와 함께 쓰인다.

console.log(restaurant.openingHours.mon);
// undefined

// console.log(restaurant.openingHours.mon.oepn);
// Uncaught TypeError: Cannot read properties of undefined (reading 'oepn')

// 월요일이 존재하는 경우에만 open을 읽고 아니면 undefined를 return 한다.
console.log(restaurant.openingHours.mon?.open);
// undefined

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of weekdays) {
  // console.log(day)
  console.log(`${day}: ${restaurant.openingHours[day]?.open ?? 'closed'}`)
}
// mon: closed
// tue: closed
// wed: closed
// thu: 12
// fri: 11
// sat: 0
// sun: closed

//// Methods
const testObj = {
  order: function (starterIndex, mainIndex) {
    return `테스트1:${starterIndex} ,테스트2:${mainIndex}`
  }
}

console.log(testObj.order?.(0,1) ?? 'Method does not exist')
// 테스트1:0 ,테스트2:1
console.log(testObj.orderRisotto?.(0,1) ?? 'Method does not exist')
// Method does not exist

//// Arrays
const sampleUsers = [{
  name: '테스터',
  email: 'tester@naver.com'
}]

console.log(sampleUsers[0]?.name ?? 'User array empty')
// 테스터
console.log(sampleUsers[1]?.name ?? 'User array empty')
// User array empty

*/
//////////////////

// 12. Looping Objects: Object Keys, Values, and Entries
/*
const restaurant = {
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
}

// Property NAMES
const properties = Object.keys(restaurant.openingHours)
let openStr = `영업일은 ${properties.length}일 입니다. : `
for (const day of properties){
  openStr += `${day}, `;
}
console.log(properties) // (3) ['thu', 'fri', 'sat']
console.log(openStr) // 영업일은 3일 입니다. : thu, fri, sat,

// Property VALUES
const values = Object.values(restaurant.openingHours)
console.log(values) // (3) [{…}, {…}, {…}]

// Property Object
const entries = Object.entries(restaurant.openingHours)
console.log(entries) // [Array(2), Array(2), Array(2)]
console.log(entries[0]) // ['thu', {open: 12, close: 22]
for (let [key, {open, close}] of entries){
  console.log(key,open, close) // thu 12 22 // fri 11 23 // sat 0 24
}

*/
//////////////////
/*
// 13. Coding Challenge #2
// 문제
const game = {
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [
      ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',], 
      ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',], 
    ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    }, 
};

// 1. game.scored 배열을 루프 돌리고 해당 형태로 콘솔 출력해라 (Example: "Goal 1: Lewandowski")

// self try
const entriesArr = Object.entries(game.scored)
for (let [i, name] of entriesArr){
  console.log(`GOAL ${Number(i)+1} : ${name}`)
}

// lecture 
for (const [i, player ]of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`)
}

// 2. 루프 써서 평균 odd 계산하고 콘솔에 찍어라

// self try
const tempArr1 = Object.values(game.odds)
let sum = 0
for(let el of tempArr1){
  sum += el
}
console.log(`평균 ${sum / tempArr1.length}`)

// lecture
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds ) average += odd;
average /= odds.length
console.log(average)


// 3. 3개의 odd를 다음과 같은 형식으로 콘솔에 찍어라. 팀명은 game 객체에서 곧바로 가져다가 써라
//Odd of victory Bayern Munich: 1.33 
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5

// self try
const tempArr2 = Object.entries(game.odds)
for (let [teamName, odd] of tempArr2){
  console.log(`Odd of ${teamName === 'x' ? 'draw' : `victory ${game[teamName]}`} : ${odd}`)
}

// lecture
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}

// 4(보너스). 'scorers'라는 객체를 만들고 key값은 득점자 이름, value값은 득점수가 들어 있게 만들어라.

// self try
const scorers = {}
for (let name of game.scored){
  Object.keys(scorers).includes(name) ? scorers[name] += 1 : scorers[name] = 1  
}


//   1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
// 3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }

*/
////////////////// 14. Sets
/*
// ES6에서 JS 빌트인 데이터 구조로 set와 map이 추가됨
// 다른 프로그래밍 언어에 일반적으로 존재하는 데이터 구조임.

// From 모던 자바스크립트 Deep Dive
// Set 객체는 중복되지 않는 유일한 값들의 집합(set)이다. Set 객체는 배열과 유사하지만 다음과 같은 차이가 있다.
// 1. 동일한 값을 중복하여 포함 할 수 있다. Array : true, Set : false
// 2. 요소 순서에 의미가 있다. Array : true, Set : false
// 3. 인덱스로 요소에 접근할 수 있다. Array : true, Set : false

const ordersSet = new Set(['라면', '김밥', '쫄면', '김밥', '피자', '피자']) // 일부러 피자 2개 중복
console.log(ordersSet) // Set(4) {'라면', '김밥', '쫄면', '피자'}// 중복 제거됨
console.log(new Set('AAAAaabbccccd')) //  Set(5) {'A', 'a', 'b', 'c', 'd'}
console.log(ordersSet.size) // 4 // size를 통해 set의 크기를 알 수 있다. // array의 length와 혼동하지 않도록 주의
console.log(ordersSet.has('라면')) // true
ordersSet.add('초밥')
ordersSet.add('초밥')
console.log(ordersSet) // Set(5) {'라면', '김밥', '쫄면', '피자', '초밥'} // 중복추가 안됨.
ordersSet.delete('라면')
console.log(ordersSet) // Set(4) {'김밥', '쫄면', '피자', '초밥'}
ordersSet.clear()
console.log(ordersSet) // Set(0) {size: 0}

// 모든 값이 unique하기 때문에 순서가 의미가 없다. (index x) 
// 우리가 알아야 할 것은 set안에 해당 값이 있는지 없는지에 대한 여부, 그래서 has 매서드가 있다
// 값에 중복이 있어야 하거나 목적이 값을 순서대로 저장하고 찾아오는 것이면 set가 아니라 array를 써야 한다.

for (const order of ordersSet) console.log(order);

const staff = ['웨이터', '요리사', '접수원', '청소부', '요리사', '웨이터'];
const staffUnique = [...new Set(staff)] // 중복을 제거한 array가 되는것이다.

console.log(new Set(staff).size) // 4 // staff 의 종류가 몇인지
console.log(new Set('aaaaabbbbccccccc').size) // 3 // 몇 종류의 char가 쓰였는지

// set는 값이 unique하다는 특성과 매서드 사용이 쉽다는 특징이 있어 유용하게 쓸 수 있지만 배열만큼 중요하지는 않다.

*/

////////////////// 15. Maps: Fundamentals
/*
// Map이 set보다 더 유용함
// Object와 다르게 Map은 key의 유형 

const rest = new Map();
rest.set('name', '김흥국');
rest.set(1, '강남, 서울');
console.log(rest.set(2, 'test문구')) // {'name' => '김흥국', 1 => '강남, 서울', 2 => 'test문구'}
console.log(rest.get('2')) // undefined
console.log(rest.get(2)) // test문구

rest
  .set('categories', ['라면', '김밥', '쫄면', '김밥', '피자', '피자'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest.get(true)) // We are open

const time1 = 8;
const time2 = 21;
console.log(rest.get(time1 > rest.get('open') && time1 < rest.get('close'))) // We are closed
console.log(rest.get(time2 > rest.get('open') && time2 < rest.get('close'))) // We are open
// 이런 패턴 복잡해서 좋지 않음.. 예시로 보여준것뿐

console.log(rest.has('categories')) // true
console.log(rest.has(2)) // true
rest.delete(2);
console.log(rest.has(2)) // false
console.log(rest.size) // 7
rest.clear();
console.log(rest.size) // 0
// delete operator 써서 삭제하는거 slow process라서 비권장
// Object에서 has처럼 hasOwnProperty라는 매서드 있는데 이거는 나중에 OOP파트에서 얘기 할거임.


rest.set([1,2], 'Test');
console.log(rest.get([1,2])); // undefined
// set에서 쓴 [1,2]와 console.log에서 쓴 [1,2]는 동일한 요소를 가지고 있지만 
// heap에 있는 same object가 아니다. 그래서 작동하지 않는다.

const sample = [1,2,3,4]
rest.set(sample, 'test11');
console.log(rest.get([1,2,3,4])) // undefiend
console.log(rest.get(sample)) // test11
// 작동하게 하려면 이렇게 메모리의 동일한 위치를 참조하게 해야 한다.

rest.set(document.querySelector('h1'), 'Heading')


// From 모던 자바스크립트 Deep Dive
// Map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.
// Map 객체는 객체와 유사(Set은 배열과 유사)하지만 다음과 같은 차이가 있다.
// 1. 키로 사용할 수 있는 값 
// 객체: 문자열 또는 심벌 값 , Map 객체: 객체를 포함한 모든 값
// 2. 이터러블
// 객체: X , Map 객체: O
// 3. 요소 개수 확인
// 객체: Object.keys(obj).length , Map객체: map.size

*/
//////////////////

////////////////// 16. Maps: Iteration
/*
// 앞서 배운 내용과 반대로 set 매서드를 사용하지 않고 map을 채우는 방법이 있다.
// set매서드는 설정할 값이 많으면 번거로워서 조나스는 비선호 하는 편

const question = new Map([
  ['question', '강남은 어느 도시에 있는 지역일까요'],
  [1, '서울'],
  [2, '부산'],
  [3, '대구'],
  ['정답', 1],
  [true, '맞습니다'],
  [false, '틀렸습니다'],
]);
console.log(question) 
// Map(7) {'question' => '강남은 어느 도시에 있는 지역일까요', 1 => '서울', 2 => '부산', 3 => '대구', '정답' => 1, …}

//// Object를 Map으로 변환 할 때 Object.entries쓰면 된다.
const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
  }

const hoursMap = new Map(Object.entries(openingHours))
console.log(openingHours) // {thu: {…}, fri: {…}}
console.log(hoursMap) // Map(2) {'thu' => {…}, 'fri' => {…}}

//// Iteration 
console.log(question.get('question'))
for (const [key, value] of question){
  if( typeof(key) === 'number'){
    console.log(`${key}번. ${value} `)
  }
}
// const answer = Number(prompt('Your answer'))
const answer = 1
console.log(question.get(question.get('정답') === answer)) // 1번 입력 '맞습니다 // 나머지 입력 '틀렸습니다'

//// map을 array로 변환
console.log([...question]) // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(question.entries()) // MapIterator {'question' => '강남은 어느 도시에 있는 지역일까요', 1 => '서울', 2 => '부산', 3 => '대구', '정답' => 1, …}
console.log([...question.entries()]) // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(question.keys()) // MapIterator {'question', 1, 2, 3, '정답', …}
console.log([...question.values()]) // (7) ['강남은 어느 도시에 있는 지역일까요', '서울', '부산', '대구', 1, '맞습니다', '틀렸습니다']
*/
//////////////////
////////////////// 17. Summary: Which Data Structure to Use?
//////////////////
////////////////// 18. Coding Challenge #3
/*
// Let's continue with our football betting app!
// This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game.
// The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
// 2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
// 3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//// 1번. 'event'라는 발생한 게임 이벤트들 배열을 만들어라 (중복 없는).

// self try
const event = [...new Set([...gameEvents.values()])];
console.log(event);

// lecture
const eventsLecture = [...new Set(gameEvents.values())];
console.log(eventsLecture);

//// 2번. 게임이 끝난 후 64분에 옐로카드 잘못된거 파악되어서 취소해야함. 이벤트 로그에서 해당 내용 지워라.

// self try
gameEvents.delete(64);
console.log(gameEvents);

// lecture
gameEvents.delete(64);

//// 3번. '이벤트는 x분 마다 발생했다' 라는 문구를 콘솔창에 출력하라.

// self try
console.log(`이벤트는 ${90 / gameEvents.size}분 마다 발생했다.`);

// lecture
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

//// 4번. 'gameEvents'를 루프돌리고 해당 양식으로 출력한다. [전반전] 17: '⚽ GOAL'

// self try
for (let event of gameEvents) {
  const isFirstHalf = event[0] < 46 ? '전반전' : '후반전';
  console.log(`[${isFirstHalf}] ${event[0]} : ${event[1]}`);
}

// lecture
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${event}`);
}

// 1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
// 2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
// 3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀

*/
//////////////////
////////////////// 19. Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10;
console.log(airline.indexOf('portugal')); // -1 // 소문자라 못 찾아서

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air // index 4번부터 시작해서 7번에 도달하기전에 멈춘다.
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('middle seat입니다.');
  } else {
    console.log('middle seat이 아닙니다.');
  }
};

checkMiddleSeat('11B'); // middle seat입니다.
checkMiddleSeat('23C'); // middle seat이 아닙니다.

// String은 primitive type인데 왜 method를 가지고 있는가?
// 문자열에서 매서드를 호출할때마다 JS는 자동으로 배후에서 같은 내용으로 string primitive를 string object로 변환한다.
// 사용 이후 object를 지워 버리는데 이 과정을 boxing이라고 한다.

console.log(new String('jonas')); // String {'jonas'}
console.log(typeof new String('jonas')); // Object
console.log(typeof new String('jonas').slice(1)); // String {'jonas'} // String
*/
//////////////////

////////////////// 20. Working With Strings - Part 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

//// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

//// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io
console.log(email === normalizedEmail); // true

//// replacing
const testString = '1,400Won 1600Won';
const testString2 = testString.replace('Won', 'Dollar');
const testString3 = testString.replaceAll('Won', 'Dollar');
const testString4 = testString.replace(/Won/g, 'Dollar');
console.log(testString2); // 1,400Dollar 1600Won // 첫번째만 바뀐다.
console.log(testString3); // 1,400Dollar 1600Dollar
console.log(testString4); // 1,400Dollar 1600Dollar // 정규식

//// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.startsWith('A320')); // true
console.log(plane.startsWith('Air')); // false
*/
//////////////////

////////////////// 21. Working With Strings - Part 3
/*
// split과 join의 조합은 강력하다.
console.log('a+very+nice+string'.split('+')); // (4) ['a', 'very', 'nice', 'string']
const [firstName, lastName] = 'George Harrison'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. George HARRISON

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // 이 방법 써도 된다.
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smite davis'); // Jessica Ann Smite Davis
capitalizeName('jonas schemdtmann'); // Jonas Schemdtmann

//// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++

const maskCreditCart = function (number) {
  const str = number + ''; // String안쓰고도 연산자 이용해서 type을 String으로 변환
  const last = str.slice(-4); // 끝에서 4개 추출
  return last.padStart(str.length, '*');
};

console.log(maskCreditCart(412333213122)); // ********3122
console.log(maskCreditCart(738127381271212)); // ********3122
console.log(maskCreditCart('21312342')); // ****2342

//// Repeat
const message2 = 'apple banana ';
console.log(message2.repeat(3)); // apple banana apple banana apple banana

*/
//////////////////
////////////////// 22. Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
/*

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// self try
const exerciseData = `  'underscore_case',
'first_name',
'Some_Variable',
'  calculate_AGE',
'delayed_departure'`;

const convertString = function (input) {
  const arr = input.split('_');
  const outputString =
    arr[0].toLowerCase() + arr[1][0].toUpperCase() + arr[1].slice(1);
  return outputString.trim();
};

const editResult = function (stringData) {
  const checkIcon = '✅';
  const arrayData = stringData.split(',');
  let outputString = '';

  for (let word of arrayData) {
    outputString +=
      convertString(word).padEnd(20, ' ') +
      checkIcon.repeat(arrayData.indexOf(word) + 1) +
      '\n';
  }
  return outputString;
};

console.log(editResult(exerciseData));
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(editResult(text));
});

*/
//////////////////
////////////////// 23. String Methods Practice
// 생략
//////////////////
