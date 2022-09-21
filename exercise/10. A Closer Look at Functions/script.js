'use strict';


///////////////////////////// 128. /////////////////////////////
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


///////////////////////////// 129. /////////////////////////////
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

///////////////////////////// 130. /////////////////////////////

