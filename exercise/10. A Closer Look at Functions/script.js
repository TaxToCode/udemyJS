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
/*
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

*/
///////////////////////////// 135. Coding Challenge #1 /////////////////////////////
// A Closer Look at Functions
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
// This data is stored in the starter 'poll' object below.
// Your tasks:

// 1. Createamethod called'registerNewAnswer'on the'poll'object.The method does 2 things:
// 'registerNewAnswer'라는 매서드를 poll object 안에 만든다. 해당 매서드는 아래와 같은 역할을 한다.
// 1.1. Display a prompt window for the user to input the number of the selected option.
// prompt창을 보여준다. 유저는 옵션 넘버를 입력 할 수 있다. 아래 예시처럼 창이 떠야한다.
// The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Based on the input number, update the 'answers' array property.
// 입력된 input number 값에 맞춰서 answers array를 업데이트 한다.
// For example, if the option is 3, increase the value at position 3 of the array by 1.
// Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// input넘버 말이 안되는거 들어오면 해당 케이스 체크해야함.

// 2. Call this method whenever the user clicks the"Answerpoll" button.
// 유저가 Answerpoll 버튼을 누를 때 해당 매서드가 호출되게 해라

// 3. Create a method 'displayResults' which displays the poll results.
// 'displayResults'라는 매서드를 만들어서 poll 결과를 보여준다.
// The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
// 해당 매서드는 string이나 array를 인풋으로 받는다.
// If type is 'array', simply display the results array as it is, using console.log(). This should be the default option.
// 만약 type이 array면 그냥 console.log()를 사용해서 results array를 보여준다. 이게 기본값이다.
//  If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 만약 type이 string이면 "Poll results are 13, 2, 4, 1" 이런식으로 보여준다.

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// 'registerNewAnswer' 매서드가 호출될 때마다 'displayResults' 매서드를 실행시켜라.

// 5. Bonus: Use the 'displayResults' method to display the 2arrays in the test data.
// Bonus: 'displayResults' 매서드를 사용해서 test data 안에 있는 2개의 array를 보여준다.
// Use both the 'array' and the 'string' option.
// 'array'와 'string' 옵션을 사용해라.
// Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
// poll object 안에 array를 넣지 말아라! 그럼 this keyword는 어떻게 보여야할까?

// Test data for bonus:
// § Data1:[5,2,3]
// § Data2:[1,5,3,9,6,1]
// Hints: Use many of the tools you learned about in this and the last section 😉 GOOD LUCK 😀

//// self try
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const usersAnswer = window.prompt(`
    The prompt should look like this: 
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    `);

  if (Number(usersAnswer) >= 1 && Number(usersAnswer) <= 3) {
    this.answers[usersAnswer] += 1;
  } else {
    alert('0~4 사이로 입력하세요.');
  }
  displayResults(this.answers);
};

const registerNewAnswer = poll.registerNewAnswer;
const registerNewAnswerPoll = registerNewAnswer.bind(poll);

document
  .querySelector('.poll')
  .addEventListener('click', registerNewAnswerPoll);

const displayResults = function (input) {
  if (Array.isArray(input)) {
    console.log(input);
  }
  if (typeof input === 'string') {
    console.log(`Poll results ars ${input}`);
  }
};
*/

//// lecture
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // Poll results are 5, 2, 3
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); // Poll results are 1, 5, 3, 9, 6, 1
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); // (6) [1, 5, 3, 9, 6, 1]

///////////////////////////// 136. Immediately Invoked Function Expressions (IIFE) /////////////////////////////

// JS에서는 때때로 딱 한번만 실행되고 다시 실행되지 않고 사라지는 함수가 필요함.
// 예를 들어 async/await

// 우리는 즉시 함수를 실행시키고 저장하지 않고 사라지는걸 원한다.
// 이건 사라지지 않고 이후에도 호출이 가능하므로 우리가 원하는 것이 아니다.
// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// Uncaught SyntaxError: Function statements require a function name (at script.js:570:1)
// 이렇게 하면 에러가 뜬다..
// function() {
//   console.log('This will never run again');
// }

// 이렇게 하면 에러는 뜨지 않지만 호출은 되지 않는다.
// (function () {
//   console.log('This will never run again');
// });

// This will never run again
// 이런걸 Immediately Invoked Function Expressions (IIFE)라고 부른다.
// 즉시 호출된 함수 표현식
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// This will also nver run again
(() => console.log('This will also nver run again'))();

// 이 패턴이 만들어진 이유가 무엇일까?
// 우리는 앞에서 function이 scope를 생성한다는 것을 배웠다.
// one scope does not have access to variabels from an inner scope
// 외부 스코프에서는 내부 스코프에 접근 할 수 없지만 반대로 inner scope에서는 외부 스코프 접근 가능
// global scope에서는 inner scope에 있는 어떤 것도 access 할 수 없다는 소리
// 범위 내부는 비공개이고 이것을 데이터가 캡슐화(encapsulate) 되었다고 한다.
// data encapsulation and data privacy는 프로그래밍에서 굉장히 중요한 개념이다.
// 변수가 실수, 외부 스크립트나 라이브러리 프로그램 등의 다른 부분에 의해 덮어씌워지는 것을 막고 보호해야 할 필요가 있다.
// 자세한것은 뒤에 나오는 객체 지향 프로그래밍 파트에서...
// 변수를 보호하기 위해 scope를 활용하는것은 굉장히 좋은 방법이다.

// 그리고 이것이 IIFE가 만들어진 이유다.
// JS의 언어의 feature가 아니고 일부 개발자가 생각 해낸 패턴에 가깝다.
// 앞서 배웠듯이 var는 block scope를 무시한다.
// 이것이 모던JS에서 IIFE를 더 이상 사용하지 않는 이유다.
// 왜냐면 우리는 data privacy를 위해 new scope를 만들기 위해서는 그냥 block을 생성하면 된다.
// new scope를 만들기 위해서 함수를 만들 필요가 없다는 것
// 다만 함수를 딱 한번만 실행하기 위해서 IIFE를 사용하는 것은 모던 JS에서도 여전히 쓰는 방법이다.

{
  const isPriveate = 23;
  var notPrivate = 24;
}
console.log(notPrivate); // 24
console.log(isPrivate); // script.js:606 Uncaught ReferenceError: isPrivate is not defined

///////////////////////////// 137. Closures /////////////////////////////
///////////////////////////// 138. More Closure Examples /////////////////////////////
///////////////////////////// 139. Coding Challenge #2 /////////////////////////////
