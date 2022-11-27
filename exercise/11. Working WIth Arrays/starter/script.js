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

/////////////////////////////////////////////////

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//////////////////////// 142. Simple Array Methods ////////////////////////

// // 이번 챕터는 위와 같은 starter code를 사용한다.
// // 앞서 배웠듯 기억해야 할 점은 매서드는 객체에 attached 된 함수이다.
// // 배열 매서드가 있는 것은 곧 Array 자체도 객체이기 때문이다.
// // 따라서 배열 매서드는 모든 어레이에 연결된 함수이다.
// // 이후 챕터에서 프로토타입 상속에 대해 배울때 모든 배열들이 이 매서드에 접근 할 수 있는지 배우게 된다.
// // 우선은 배열은 객체이며 배열의 도구로 볼 수 있는 메서드들에 접근 할 수 있는것을 기억하자.
// // 매서드의 사용방법이 헷갈릴땐 MDN 문서를 보자.

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //// SLICE 매서드

// // 오리지널 베열을 변경하지 않고 배열의 일부를 추출 할 수 있다.
// // 첫번쨰 parameter부터 마지막 parameter를 제외한 배열을 추출
// // 이러면 2개 파라미터 뺀 만큼이 새로운 배열의 length
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); //  ['c', 'd']

// // 음수를 넣으면 배열의 제일 마지막 요소부터 그 숫자 절대값만큼 요소로 담는다.
// // 그래서 -1을 넣으면 항상 배열의 마지막 요소를 선택
// // 두번째 parameter만 음수로 index를 넣으면 그 음수 index만큼을 제외하고 모든 것을 추출한다.
// // 예시에서 b로 시작했고 (1) -2로 인해서 d,e를 제외했으니 b,c가 남은거라 추출되는것
// // 어떤 변수도 넣지않고 호출하면 얕은 복사가 실행된다.
// // spread 연산자를 이용해서도 마찬가지로 shallow copy 가능하다.
// // 여러 매서드를 연결할 경우 slice를 써야한다.

// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']

// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// //// SPLICE 매서드
// // slice 매서드와 거의 동일하게 작동하지만 원본 배열을 변경한다.

// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b'] 원본 배열이 변경되었다.

// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// arr2.splice(-1); // 제일 마지막 요소 없앤다.
// console.log(arr2); // ['a', 'b', 'c', 'd']
// arr2.splice(1, 2); // 첫번째 요소를 배치하고 2개를 없앤다
// console.log(arr2); // ['a', 'd']

// // // REVERSE 매서드
// // 순서를 거꾸로 돌리는데 원본 배열이 변경이 된다.

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr3 = ['j', 'i', 'h', 'g', 'j'];
// console.log(arr3.reverse()); // ['j', 'g', 'h', 'i', 'j']
// console.log(arr3); // ['j', 'g', 'h', 'i', 'j'] 원본 배열이 변경됨.

// //// CONCAT 매서드
// // 두개의 배열은 연결하는데 사용된다.
// // spread 연산자 사용하는것이 똑같은 효과를 낸다.

// const test1 = ['a', 'b', 'c', 'd', 'e'];
// const test2 = ['j', 'i', 'h', 'g', 'j'];

// const letters = test1.concat(test2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'j']
// console.log([...test1, ...test2]);

// //// JOIN 매서드
// // 배열의 요소들을 인자로 들어간 것으로 결합시켜 string으로 만든다.

// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'j']
// console.log(letters.join('-')); // a-b-c-d-e-j-i-h-g-j

//////////////////////// 143. The new at Method ////////////////////////

//// AT 매서드
// ES2022에서 새로 생김
// 전통적인 bracket 표기법을 대체 할 수 있음.
// 배열의 length를 모를 때 마지막 요소를 고르는데 더 간편하게 사용 가능하다.

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

console.log(arr[arr.length - 1]); // 64
console.log(arr.at(-1)); // 64

//// 144. Looping Arrays: forEach
//// 145. forEach With Maps and Sets
//// 146. PROJECT: "Bankist" App
//// 147. Creating DOM Elements
//// 148. Coding Challenge #1
//// 149. Data Transformations: map, filter, reduce
//// 150. The map Method
//// 151. Computing Usernames
//// 152. The filter Method
//// 153. The reduce Method
//// 154. Coding Challenge #2
//// 155. The Magic of Chaining Methods
//// 156. Coding Challenge #3
//// 157. The find Method
//// 158. Implementing Login
//// 159. Implementing Transfers
//// 160. The findIndex Method
//// 161. some and every
//// 162. flat and flatMap
//// 163. Sorting Arrays
//// 164. More Ways of Creating and Filling Arrays
//// 165. Summary: Which Array Method to Use?
//// 166. Array Methods Practice
//// 167. Coding Challenge #4
