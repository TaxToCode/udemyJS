// let js = "amazing;
// console.log(js);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let PI = 3.1415;
// let person = "Jonas";

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "Programmer";
// let job2 = "teacher";

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof(javascriptIsFun));

// javascriptIsFun = "YES";
// console.log(typeof(javascriptIsFun));

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// console.log(age);

// age = 31;
// console.log(age);

// const birthYear = 1991;

// var job = 'programmer';
// job = 'teacher';

// let nowYear = 2021;
// const jeonBrithYear = 1991;
// let jeonAge = nowYear - jeonBrithYear;
// console.log(jeonAge);

// console.log(7**2 , 7**3);

// const firstName = "Jihyeon";
// const lastName = "Jeon";
// console.log(firstName + ' ' + lastName);

// let x = 3 + 5; //8
// x += 4; // +4
// console.log(x); // 12
// x *= 4;
// console.log(x); // 48
// x++;
// console.log(x); // 49
// x--;
// console.log(x); // 48

// let ageJonas = 40;
// let ageSarah = 20;

// // console.log(ageJonas > ageSarah);
// // console.log(ageJonas >= 40);

// let isFullAge = ageSarah >= 25;
// console.log(isFullAge);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25-10-5;
// console.log(x,y);

// const firstName = 'Jihyeon';
// const lastName = 'Jeon';
// const birthYear = 1991;

// const hiJH = `I'm ${firstName} ${lastName},
// My birth year is ${birthYear}`;
// console.log(hiJH);

// let age = 15;

// if (age >= 18) {
//     console.log(`can drive`);
// } else {
//     console.log(`can't drive`);
// // }

// let n = '1' + 1;
// console.log(n-1);
// let n2 = 2+3+4+"5";
// console.log(n2);
// console.log(typeof n2);

// 5 falsy valvlues : 0 , '' , undefined , null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// const money = 0 ;
// if (money){
//     console.log("dont spend money");
// }else {
//     console.log("get a job");
// };

// const age = 18;
// if (age === String(age)) {
//     console.log("you are 18");
// } else {
//     console.log("wrong");
// }

// if (age == String(age)) {
//     console.log("you are 18");
// }

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if(Number(favourite)===12){
//     console.log("12 good");
// }else if(Number(favourite) === 7){
//     console.log("7 good");
// };

// if(Number(favourite) != 12){
//     console.log("It's not 12")
// };

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(Boolean(hasDriverLicense ^ hasGoodVision));

// const day = 'Ty';

// switch(day){
//     case 'Monday' :
//         console.log('월요일이다');
//         break;
//     case 'Tuesday' :
//         console.log('화요일이다');
//         break;
//     default :
//         console.log('월요일 화요일 아니다');
//         break;
// }

// const age = 20;
// age >= 18 ? console.log("can smoke") : console.log("can't smoke");

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const nowDay = "금요일";

// switch (nowDay) {
//     case "월요일": // nowDay === '월요일'
//         console.log("오전 9시에 월요일 정기회의가 있습니다.");
//         break;
//     case "화요일": // nowDay === '화요일'
//         consle.log("오늘은 08시까지 출근해야 합니다.");
//         break;
//     case "수요일":
//     case "목요일": // nowDay === '수요일' || '목요일'
//         console.log("수,목요일에는 특이사항 없이 정상업무를 합니다.");
//         break;
//     case "금요일": // nowDay === '금요일'
//         console.log("업무를 끝내고 주말을 즐기세요 :>");
//         break;
//     default:
//         // 적어놓은 경우의 수에 모두 해당이 안될 경우
//         console.log("유효한 날이 아닙니다.");
// }
