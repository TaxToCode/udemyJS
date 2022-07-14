"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//     console.log("I can drive");
// }

// const interface = "audio";
// const private = 534;

// function logger() {
//     console.log("My name is Jonas");
// }

// logger();

// function fruitPorcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitPorcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitPorcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//   return 2037-birthYear;
// };

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear){
//   return 2037-birthYear;
// }

// const age2 = calcAge2(1992);
// console.log(age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991,'Jihyeon'));

// function cutFruitProcessor(fruite) {
//     return fruite * 4;
// }

// function fruitPorcessor(apples, oranges) {
//     const applePieces = cutFruitProcessor(apples);
//     const orangePieces = cutFruitProcessor(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitPorcessor(2,3));

// const calcAge3 = birthYear => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   if(retirement>0){
//       return `${firstName} retires in ${retirement}`;
//     }else{
//       console.log(`${firstName} is already retired`);
//       return -1;
//     };
// }

// console.log(yearsUntilRetirement(1991,'Jihyeon'));
// console.log(yearsUntilRetirement(1944,'Jihyeon'));

// const friend = ["Michael", "Steven", "Peter"];

// console.log(friend[0]);
// console.log(friend[1]);
// console.log(friend[2]);

// const years = new Array(1991, 1992, 1993, 1994);

// console.log(years);
// console.log(years.length);
// console.log(years[years.length - 1]);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = function(a){
//   for(let i=0 ; i < a.length; i++){
//     console.log(a[i]);
//   };
// };

// age1(years);

// let friend = ['Paul', 'John', 'Geroge'];
// friend.push('Ringo');
// console.log(friend);

// friend.unshift('Martin');
// console.log(friend);

// friend.shift(friend);
// console.log(friend);

// friend.pop(friend);
// console.log(friend);

// console.log(friend.indexOf('Paul'));
// console.log(friend.indexOf('Michael'));

// console.log(friend.includes('John'));
// console.log(friend.includes('Michael'));

// const jjh = {
//   firstName : 'Jihyeon',
//   lastName : 'Jeon',
//   birthYear : 1991,
//   job : "Student",
//   friend : ["George", "Ringo", "Paul", "John"],
// };

// console.log(jjh);
// console.log(jjh.firstName);
// console.log(jjh['lastName']);

// const nameKey = 'Name';
// console.log(jjh['first' + nameKey]);

// // const interestedIn = prompt('"job" "lastName" "firstName"');
// // console.log(jjh[interestedIn]);

// jjh.location = 'South Korea';
// jjh['Gender'] = 'Male';
// console.log(jjh);

// console.log(`${jjh.firstName} has ${jjh.friend.length} friends, best freinds is ${jjh.friend[0]}`);

// for(let i = 0 ; i < 10 ; i++){
//   console.log(`counting ${i+1}`);
// };

// const jjh = {
//     firstName: "Jihyeon",
//     lastName: "Jeon",
//     birthYear: 1991,
//     job: "Student",
//     friend: ["George", "Ringo", "Paul", "John"],
// };

// for (let i = 0; i < jjh.friend.length; i++) {
//     console.log(jjh.friend[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2048 - years[i]);
// }

// console.log(ages);

// const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["George", "Ringo", "Paul", "John"]];

// for(let i=0 ; i < jonas.length ; i++){
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i]);
// }

// console.log('/////');

// for(let i=0 ; i < jonas.length ; i++){
//   if(typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = jonas.length -1 ; i >= 0 ; i-- ){
//   console.log(i, jonas[i])
// };

// for (let exercise = 1; exercise <4 ; exercise++){
//   console.log(`--------- starting exercise ${exercise}`)
//   for(let rep = 1 ; rep < 6 ; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
//   };
// };

// let rep = 1;
// while (rep<=10){
//   console.log(`repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end...`);
//     }
// }
// const friends = ["Michael", "Steven", "Peter"];

// ////// 요소 추가
// const pushResult = friends.push("John");
// const unshiftResult = friends.unshift("Lucy");
// console.log(pushResult); // return : 4(length)
// console.log(unshiftResult); // return : 5(legnth)

// ////// 요소 제거
// const popResult = friends.pop();
// const shiftResult = friends.shift();
// console.log(popResult); // return : "John"
// console.log(shiftResult); // return : "Lucy"

// ////// 요소 검사 (Strict eqaulity)
// console.log(friends); //  ['Michael', 'Steven', 'Peter']
// console.log(friends.indexOf("Peter")); // return : 2
// console.log(friends.indexOf("George")); // return : -1(요소가 없어서)
// console.log(friends.includes("Peter")); // return : true
// console.log(friends.includes("George")); // return : false

// const johnLennon = {
//     firstName: "John",
//     lastName: "Lennon",
//     job: "Musicain",
//     age: 2022 - 1940,
//     friends: ["Paul", "Ringo", "George"],
// };

// console.log(johnLennon.firstName); // John
// console.log(johnLennon["firstName"]); // John
// const callName = "Name";
// console.log(johnLennon["last" + callName]); // Lennon
// console.log(johnLennon[`last${callName}`]); // Lennon
// console.log(johnLennon.last + name); // undefined 사용불가

// const insertName = prompt("Name을 입력해보세요.");
// console.log(johnLennon["last" + insertName]); // Lennon
