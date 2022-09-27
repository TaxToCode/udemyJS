'use strict';


///////////////////////////// 128. Default Parameters /////////////////////////////
/*
const bookings = [];

const createBooking = function(flightNumb, numPasssengers, price){

  const booking = {
    flightNumb, 
    numPasssengers, 
    price
  }
  console.log(booking); 
  bookings.push(booking);
}

createBooking('LH123'); // {flightNumb: 'LH123', numPasssengers: undefined, price: undefined}

////

const bookings2 = [];

const createBooking2 = function(flightNumb , numPasssengers = 1, price = 199){
  
  // ES5 스타일
  // numPasssengers = numPasssengers || 1;
  // price = price || 199;

  // ES6 스타일 (better way)
  // function 선언할때 numPasssengers = 1, price = 199 선언해주는거

  const booking = {
    flightNumb, 
    numPasssengers, 
    price
  }
  console.log(booking); 
  bookings2.push(booking);
}

createBooking2('LP123'); // // {flightNumb: 'LP123', numPasssengers: 1, price: 199} 
createBooking2('LP124', 2 , 800); // {flightNumb: 'LP124', numPasssengers: 2, price: 800}
createBooking2('LP125', 2 ); // {flightNumb: 'LP125', numPasssengers: 2, price: 199}

// 중간에 비우고 싶으면 그냥 비우면 에러나니까 undefined로 지정해줘야 한다.
// createBooking2('LP125', , 5 ); // Uncaught SyntaxError: Unexpected token ',' (at script.js:43:25)
createBooking2('LP126', undefined , 6 ); // {flightNumb: 'LP126', numPasssengers: 1, price: 6}
*/


///////////////////////////// 129. How Passing Arguments Works: Value vs. Reference /////////////////////////////
/*
// 이 파트는 function에 arguments를 어떻게 pass하는지에 대해서 알아본다.
// 앞서 살펴본 primitive 타입과 reference 타입에 대해 배운것과도 연관된 내용

const flight = 'LH234';
const john = {
  name : 'John Lennon',
  passport :12345
}
const checkIn = function(flightNumb,  passenger) {
  // 함수 안에서 parameter를 변경하는것은 좋은 코딩 습관이 아니다.
  // 해당 강의에서는 작동원리에 대해 보기 위해서 parameter를 변경
  flightNumb = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 12345) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
}
checkIn(flight, john) // 'Check In' alert창으로 출력된다.

console.log(flight); // LH234 // checkIn 작동했지만 변하지 않았다.
// checkIn에서 parameter로 쓰인 flightNumb는 primitive type이니 value를 copy한 original value임.

console.log(john); // {name: 'Mr. John Lennon', passport: 12345} // checkIn이 작동하니 Mr.가 붙은 value로 변함.
// checkIn에서 parameter로 쓰인 passenger는 객체라서 reference type이고 
// memory heap에 있는 객체를 참조하는것이라 original value가 아님.
// 그래서 조작하면 original도 같이 조작되는거임.
// 그리고 이런 특성은 대규모 코드 기반의 프로젝트에서 예측할 수 없는 결과를 초래 할 수 있다.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 1000000);
}

newPassport(john); 
checkIn(flight, john); 
// alert코드로 'Check In'으로 뜬 다음에 한번 더 'Wrong Passport'가 뜨게 된다.
// 다른 function에서 하나의 object를 조작하다가 이렇게 문제가 발생 할 수 있다.


// 프로그래밍에서 value와 reference를 pass하는 함수를 다룰 때 항상 사용되는 2개의 용어가 있다.
// 능숙한 프로그래머들도 아래의 이유로 처음 JS를 접할 때 해당 용어에 대해 혼란스럽게 받아들이는 경향이 있다.

// 자바스크립트에서는 only passing by value, does not have passing by reference
// 참조가 전달되는것처럼 보이기는 하지만 실제로는 전달 안된다.

// C++ 같은 언어는 you can pass a reference to any value, instead of the value itself
// 5와 같은 primitive type의 참조도 전달 할 수 있다.
// 이것을 pass by reference 참조에 의한 전달이라고 한다. 
// Javascript는 다시 말하지만 참조에 의한 전달이 없다.

// 그런데 위에서 Object의 경우 reference를 pass한다. 그래서 혼란스러울수 밖에 없다.
// JS에서 해당 참조 자체는 여전히 값인데 memory address를 포함하고 있는 값이다.
// 그래서 함수에 참조를 전달 할 수 있는 것이다.
// 그러나 we do not pass 'by' reference, 참조를 전달하는것은 아니다!
// 이 중요한 차이점을 인식해야 한다

*/
///////////////////////////// 130. First-Class and Higher-Order Functions /////////////////////////////

// First-Class Functions 일급함수
// JavaScript treats functions as first-class citizens 
// This means that functions are simply values
// Functions are just another 'type' of object

// function은 자바스크립트에서 다른 유형의 object이다.
// Object는 value이기 때문에 마찬가지로 function도 값이다.
// 값이기 때문에 변수나 object의 property로 저장 할 수 있는 등 여러가지 특징이 생기낟.
// 그림의 빨간색 박스가 그 예시처럼 function은 그 자체로 값이기 때문에 원하는 곳에 저장 할 수 있다.
// 또한 다른 함수의 argument로 사용 될 수도 있다.
// Return functions From functions 다른 함수에서 함수를 반환 할 수도 있다.
// 마지막으로 function은 object이고 JS에서 많은 객체 유형들은 매서드를 가지고 있다.
// actually there are also function methods. 마찬가지로 펑션도 매서드를 가지고 있다.
// So methods that we can call on functions
// bind 매서드가 그 예 (뒤에서 추가적으로)

// Higher-order functions 고차함수 
// A function that receives another function as an argument, that returns a new function, or both
// This is only possible because of first-class functions
// JS에서 First-class functions 기능이 있어서 고차함수를 사용 할 수 있다.

// 첫번째 예시처럼 function을 다른 function에 argument로 사용 할 수 있다.
// argument로 전달되는 함수를 보통 Callback function이라고 부른다.
// 왜 콜백함수라고 부르냐면 고차 함수에 의해서 나중에 호출되기 때문이다.

// 두번째는 다른 함수를 반환하는 함수

// 일급함수와 고차함수에 대해서 혼동 하는 사람들이 있는데 엄연히 다른 개념 (미묘한 차이일지라도)
// 일급함수는 프로그래밍 언어가 가지고 있거나 가지고 있지 않은 feature를 말하는 것
// 의미는 모든 펑션이 value라는 개념일뿐 실제로 일급함수라는 함수가 있는게 아니다.

// 그러나 고차함수는 실제로 있는 함수이다.
// 프로그래밍 언어에서 일급함수 feature를 제공하는 경우에 한해서 

///////////////////////////// 131. Functions Accepting Callback Functions /////////////////////////////
/*
//// High-order function 실제로 만들어보자

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
};

// argument에 다른 function이 들어가는 high-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScripit is the best!', upperFirstWord)
// Original String: JavaScripit is the best!
// Transformed string: JAVASCRIPIT is the best!
// Transformed by: upperFirstWord

transformer('JavaScripit is the best!', oneWord)
// Original String: JavaScripit is the best!
// Transformed string: javascripitisthebest!
// Transformed by: oneWord

// 콜백함수로 upperFirstWord, oneWord 가 동작한것을 알 수 있다.

const high5 = function () {
  console.log('hello');
}

//// JS uses callbacks all the time

document.body.addEventListener('click', high5);
// 클릭하면 high5 콜백함수 작동해서 콘솔창에 hello가 출력된다.
// addEventListenr는 high-order function
// high5는 call-back function이다.
// body에 클릭하는 즉시 high5를 호출한다.

// JS에 내장된 function에도 이러한 콜백 함수 개념이 사용되어 있다.

['John', 'Paul', 'George'].forEach(high5);
// hello 가 3번 출력
// 각각 배열의 요소마다 한번씩 high5를 호출하는 상황

//// 콜백함수의 장점 

// 1. 쉽게 분할하거나 재사용가능하고 상호 연결이 가능한 코딩을 할 수 있다.

// 2. 추상화(abstraction)을 가능하게 한다.
// 프로그래밍에서 추상화는 코드의 세부사항 구현에 대해 숨긴다는 것
// 세부사항에 대해 숨기는 것은 우리가 문제에 대해 더 추상적인 레벨로 생각 할 수 있게 해준다.
// 추상화에 대해서는 OOP에서 더 자세하게 이야기

// 예시에서는 oneWord, uppFirstWord로 low level의 디테일함을 분리시켰고
// transformer에서 높은 레벨로 추상화를 한 상황이다.

*/

///////////////////////////// 132. Functions Returning Functions /////////////////////////////
// 이번에는 함수를 반환하는 함수를 만들어 보자
/*
const greet = function (greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('John'); // Hey John
greeterHey('Paul'); // Hey Paul

// 이것이 작동하는 이유는 Closure (클로저) 메커니즘
// 클로저는 굉장히 복잡하고 어려운 메커니즘
// 이에 대해서는 나중에 따로 강의

greet('Hello')('Jonas'); // Hello Jonas

// 이렇게 함수가 함수를 반환하는 것은 functional programming(함수형 프로그래밍)에서 특히 유용하다.

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('George'); // Hi George

*/

///////////////////////////// 133. The call and apply Methods /////////////////////////////
/*
// this keyword에 대해서 

const lufthansa = {
  airline : 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  }
}

lufthansa.book(239, 'John Lennon'); // John Lennon booked a seat on Lufthansa flight LH 239
lufthansa.book(619, 'Paul Mccartney'); // Paul Mccartney booked a seat on Lufthansa flight LH 619
console.log(lufthansa.bookings)
// 0: {flight: 'LH 239', name: 'John Lennon'}
// 1: {flight: 'LH 619', name: 'Paul Mccartney'}

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// book(23, 'George Harrison'); 
// Uncaught TypeError: Cannot read properties of undefined (reading 'airline')

// 여기서 book은 regular function call이다.
// 그래서 여기서 book은 위에 lufthansa object에 있는 function이 아니다
// 단지 lufthansa.book의 copy가 되는것일뿐 더 이상 매서드가 아니게 되고 그러니까 일반 함수 호출이 되는거
// 일반 함수 호출에서 this keyword는 strict mode에서는 undefined를 가리킨다.
// 따라서 이 안에 있는 this 키워드는 undefined가 되는것
// 이전 파트에서 this keyword를 결정하는 역할은 어떤 함수가 실제로 호출하는지에 달렸다고 한 이유


// 그러면 의도한대로 this키워드가 작동하고 매서드를 돌리려면 어떻게 해야 할까?
// JS에게 해당 사항에 대해서 명시적으로 알려줘야 한다.
// 이것을 하는 세가지의 방법이 있다.
// 1.Call 2.Apply 3.Bind


//// 1. Call method
book.call(eurowings, 23, 'Ringo Star');
console.log(eurowings); // {name: 'Eurowings', iataCode: 'EW', bookings: [{flight: 'EW 23', name: 'Ringo Star'}]}
// book 함수를 직접 호출하지 않고 call method를 호출했다.
// call method가 book function을 호출했다.
// call method에 argument로 원하는 것을 전달 할 수 있다.
// 그래서 우리가 수동으로 호출하려는 함수의 this 키워드를 첫번째 argument를 통해 설정 할 수 있게 되는것.
// 첫번째 argument 이외의 모든 argument는 단순히 original function의 argument다.

book.call(lufthansa, 239, 'David Silva');
console.log(lufthansa.bookings); //  (3) [{…}, {…}, {flight: 'LH 239', name: 'David Silva'}]

const swiss = {
  airline : 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 555, 'Vincent Kompany');
console.log(swiss) // {airline: 'Swiss Air Lines', iataCode: 'LX', bookings: Array(1)}

//// 2. Apply method
const flightData = [593, 'Noel Gallagher'];
book.apply(swiss, flightData);
console.log(swiss) // {airline: 'Swiss Air Lines', iataCode: 'LX', bookings: Array(2)}
book.call(swiss, ...flightData);
// Modern JS에서는 apply 잘 안쓰고 spread 연산자 써서 call을 쓴다. 똑같은 효과


*/

///////////////////////////// 134. The bind Method /////////////////////////////

//// bind
// bind를 사용하면 마찬가지로 this keyword를 수동으로 설정 할 수 있다.
// 차이점을 즉시 호출하지 않는 것
// 대신 this keyword가 bind된 곳에 새로운 함수를 반환한다.

const lufthansa = {
  airline : 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  }
}
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}
const book = lufthansa.book;


// bind는 book 함수를 호출하는 것이 아니라
// this keyword를 eurowings로 하는 new function을 return한다.
// eurowings를 this keyword로 지정한 상황
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

// bind를 통해서 이미 this키워드가 지정되어 있기 때문에 사용 할 때 지정 할 필요가 없다.
bookEw(23, 'Steven Williams'); //Steven Williams booked a seat on Eurowings flight EW 23


// call 매서드에서 2번째 인수부터 시작해서 여러 인수 전달 할 수 있다.
// bind도 마찬가지로 똑같이 할 수 있다.

// 위에 펑션을 보면 argument로 flightNum, name 2개가 들어가야 한다.
// bookEW23처럼 넣으면 flightNumb만 기입이 된 상황임.
// 그러면 우리가 사용 할 때는 name만 넣어주면 되는거임.
// 이렇게 parameter를 일부 preset해놓고 쓰는 패턴을 partial application 이라고 한다.
const bookEW23 = book.bind(eurowings, 23);

// 23은 미리 기입된 거라서 자동으로 들어가게 된다.
bookEW23('Joe Hart'); // Joe Hart booked a seat on Eurowings flight EW 23
bookEW23('John Stones'); // John Stones booked a seat on Eurowings flight EW 23

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes ++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// 버튼을 누르면 콘솔창에 이렇게 뜬다.
// <button class=​"buy">​Buy new plane ​</button>​
// NaN

// 앞서 배웠듯 eventhandler 함수에서는 this keyword가 연결된 요소를 가리킨다.
// 그래서 <button class=​"buy">​Buy new plane ​</button>​ 를 반환하는것

lufthansa.buyPlane();
// {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(0), planes: 300, book: ƒ, …}
// 301

// 이 경우에는 버튼을 누른것과는 다르게 함수를 호출하는 객체라서 의도대로 작동함.
// this keyword가 동적으로 작동하기 때문임


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(0), planes: 301, book: ƒ, …}
// 302

// 그렇다면 버튼에 의도대로 작동시키기 위해서는 this keyword를 수동으로 지정해줘야 한다는 소리임
// 이렇게 bind를 사용해서 this keryword를 지정해주면 버튼이 의도대로 작동된다.


//// Partial application 
// we can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// this keyword를 지정하지 않을 것이기 때문에 null을 사용해줌
// null을 사용하는것을 일종의 표준
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(400)); // 492
console.log(addVAT(23)); // 28.29

// mini challenge

const addTaxRate = function(rate) {
  return function(value){
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(400)); // 492



///////////////////////////// 135. Coding Challenge #1 /////////////////////////////
///////////////////////////// 136. Immediately Invoked Function Expressions (IIFE) /////////////////////////////
///////////////////////////// 137. Closures /////////////////////////////
///////////////////////////// 138. More Closure Examples /////////////////////////////
///////////////////////////// 139. Coding Challenge #2 /////////////////////////////


