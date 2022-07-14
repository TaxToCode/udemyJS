'use strict';

// /*
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} are ${age}, born in ${birthYear}`;
//     // You are 46, born in 1991
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // const firstName = 'Steven';
//       const str = `${firstName}은 밀레니엄 세대군요.`;
//       var millenial = true;

//       // Jonas은 밀레니엄 세대군요.
//       /* 해당 블록 스코프에 있는 firstName을 주석해제하면 이 범위에서
//       firstName을 찾을 수 있기 때문에 steven은 ~ 으로 뜬다. */
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//       // const output = 'NEW OUTPUT';
//     }
//     // script.js:16 Uncaught ReferenceError: str is not defined
//     // const, let은 블록 범위라서 이런 문제가 발생한다.
//     // console.log(str);

//     // true
//     // var를 사용할 경우에는 정상적으로 출력된다
//     console.log(millenial);

//     // NEW OUTPUT
//     // if 문 안에서 output을 재정의 해버리면 영향을 받아서 NEW OUTPUT
//     /* 반면에 const output = 'NEW OUTPUT'을 하면 if문 블럭 scope안에서
//     새로운 output이 생긴거라서 여기서 출력되는 output은
//     Jonas are 46, born in 1991 로 나온다.*/
//     console.log(output);

//     // script.js:29 Uncaught ReferenceError: add is not defined
//     // strict 모드를 끄면 5 , 함수는 strict mode 켜졌을때만 블록 스코프
//     // console.log(add(2, 3));
//   }
//   printAge();

//   // Jonas
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // Uncaught ReferenceError: age is not defined
// // console.log(age);

// /////////////////////////////////////
// // hoisting

// // // undefined
// // console.log(me);
// // // undefined
// // console.log(job);
// // // ncaught ReferenceError: Cannot access 'year' before initialization
// // // TDZ에 있는 상태
// // console.log(year);

// // var me = 'Jonas';
// // var job = 'teacher';
// // const year = 1991;

// // Function

// // 3, 함수 선언식이라 실행됨
// // console.log(addDecl(1, 2));
// // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// // console.log(addExpr(1, 2));
// // Uncaught ReferenceError: Cannot access 'addArrow' before initialization
// // console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // all products deleted
// // 실행될때 numbProduct는 undefined를 가지고 있어서 true라서 실행이 된다.
// if (!numbProduct) deleteShoppingCart();

// var numbProduct = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // true
// console.log(x === window.x);
// // false
// console.log(x === window.y);
// // false
// console.log(x === window.z);

// /////////////////////////////////////
// // this keyword

// // Window 객체
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// // 46
// // undefined (단순한 함수 호출이라서.. 엄격한 모드가 아니면 Window 객체가 나온다.)
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// // 57
// // Window 객체 (Arrow Function에서 this는 parent function, parent scope를 가져온다)
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// // {year: 1991, calcAge: ƒ} (jonas 객체)
// // 46
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// // method borrowing
// matilda.calcAge = jonas.calcAge;

// // {year: 2017, calcAge: ƒ} (matilda 객체)
// // 20
// matilda.calcAge();

// const f = jonas.calcAge;

// // Uncaught TypeError: Cannot read properties of undefined (reading 'year')
// // 이건 그냥 보통의 함수호출이다. 그래서 undefined
// f();

///////////////////////

// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// // Hey undefined
// // 자체 this 키워드가 있는게 아니라 단순히 주변 환경, parent scope
// // 그래서 this가 Window객체 가리키게 된다.
// // jonas = {}는 코드 블럭이 아니라 객체 리터럴이다.

// // 위에 var FirstName = 'Matilda'를 넣어주게 되면 Hey Matilda가 나온다.
// // var로 선언해서 Window.firstName이 생성되기 때문이다..
// // 그래서 var를 안쓰는것이 버그를 방지하는데 좋다.
// // 화살표 함수를 매서드로 사용하지 않는 것이 버그 방지를 위해 좋고 함수 표현식 쓰는게 좋다.
// jonas.greet();

///////////////

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// // {firstName: 'Jonas', year: 1991, calcAge: ƒ, greet: ƒ}
// // true
// jonas.calcAge();

///////////////

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };

// // {firstName: 'Jonas', year: 1991, calcAge: ƒ, greet: ƒ}
// // true
// // 화살표 함수는 상위 scope를 this 키워드로 사용한다. 그래서 이 경우 jonas를 가리킨다.
// jonas.calcAge();

//////////////////
// arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// // Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
// addExpr(2, 5);
// // Arguments(4) [2, 5, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// // Uncaught ReferenceError: arguments is not defined
// // arrow function에는 arguments 키워드가 존재하지 않는다.
// addArrow(2, 6);

////////////////////
// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 100;
// // friend: {name: 'Jonas', age: 100}
// console.log(`friend:`, friend);
// // me: {name: 'Jonas', age: 100}
// console.log(`me:`, me);

////////////////////
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// Davis
console.log(lastName);
// Willaims
// Primitive type은 이런식으로 직관적으로 작동한다.
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Wiliiams',
  age: 27,
};

// 이 과정에서 Heap에 새로운 객체를 만드는게 아니라 둘 다 동일한 메모리 주소 참조를 가지게 된다.
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// Before marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('Before marriage:', jessica);
// After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('After marriage:', marriedJessica);

// Uncaught TypeError: Assignment to constant variable.
// const로 선언했기 때문에 값을 새로운 메모리 주소로 변경 할 수 없다.
// let으로 선언했으면 변경 할 수 있으니 새로운 객체를 할당 할 수 있다.
// marriedJessica = {};

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Wiliiams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// Before marriage: {firstName: 'Jessica', lastName: 'Wiliiams', age: 27, family: Array(2)}
console.log('Before marriage:', jessica2);
// After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(2)}
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Before marriage: {firstName: 'Jessica', lastName: 'Wiliiams', age: 27, family: Array(4)}
console.log('Before marriage:', jessica2);
// After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}
// 객체 내의 family는 여전히 jessica2와 jessicaCopy가 같은 메모리 주소를 가리킨다. 얕은 복사
console.log('After marriage:', jessicaCopy);
