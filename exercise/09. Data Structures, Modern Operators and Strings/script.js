'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

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
};

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
