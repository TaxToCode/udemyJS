'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number๐ฅฒ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

///////////////////////// ํ๋ก๊ทธ๋จ ์ง๊ธฐ

// ///// ์ ๋ต ์์ฑ๊ธฐ
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// // document.querySelector('.number').textContent = secretNumber;

// ///// ์ ์ ๊ด๋ฆฌ
// let score = 20;

// ///// ํ๋๊ธฐ
// document.querySelector('.check').addEventListener('click', function () {
//   //console.log(typeof guess); string์ผ๋ก ๋์จ๋ค ๊ทธ๋์ Number ๋ถ์ฌ์ค๋ค
//   const guess = Number(document.querySelector('.guess').value);

//   // ์๋ฌด๊ฒ๋ ์๋ ฅ ์ํ์๋
//   if (!guess) {
//     document.querySelector('.message').textContent = '๐ฅฒNo Numberโ ';
//   }
//   // ๋จ์ ํ์ 0์ ์ผ๋
//   else if (score === 0) {
//     document.querySelector('.message').textContent = 'You lost the game!';
//   }
//   // ์ ๋ต ๋ง์ท์๋
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '๐Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//   }
//   // ์๋ ฅ๊ฐ์ด ์ ๋ต๋ณด๋ค ํด ๋
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
//   // ์๋ ฅ๊ฐ์ด ์ ๋ต๋ณด๋ค ์์ ๋
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

/////// CC 4-1
////// 1. again ๋ฒํผ ์๋๊ฐ๋ฅํ๊ฒ
////// 2. again ๋ฒํผ ๋๋ฅด๋ฉด ์ค์ฝ์ด, ์ ๋ต ๋ฐ๋๊ฒ
////// 3. ๋๋ฅด๋ฉด ๋ฉ์ธ์ง๋ ์๋ ฅ์ฐฝ๋ ์ด๊ธฐํ
////// 4. ๋ฐฑ๊ทธ๋ผ์ด๋์ปฌ๋ฌ #222 ๋ก ๋ณต๊ตฌํ๊ณ  ๋๋ฒ์ฐฝ ํฌ๊ธฐ๋ 15rem์ผ๋ก ๋ณต๊ตฌํ๊ธฐ

// ///// ์ ๋ต ์์ฑ๊ธฐ
// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// // document.querySelector('.number').textContent = secretNumber;

// ///// ์ ์ ๊ด๋ฆฌ
// let score = 20;
// let highScore = 0;

// ///// ํ๋๊ธฐ
// document.querySelector('.check').addEventListener('click', function () {
//   //console.log(typeof guess); string์ผ๋ก ๋์จ๋ค ๊ทธ๋์ Number ๋ถ์ฌ์ค๋ค
//   const guess = Number(document.querySelector('.guess').value);

//   // ์๋ฌด๊ฒ๋ ์๋ ฅ ์ํ์๋
//   if (!guess) {
//     document.querySelector('.message').textContent = '๐ฅฒNo Numberโ ';
//   }
//   // ๋จ์ ํ์ 0์ ์ผ๋
//   else if (score === 0) {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('body').style.backgroundColor = '#CB4747';
//   }
//   // ์ ๋ต ๋ง์ท์๋
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '๐Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     // highscore ๊ธฐ๋ก
//     if (score > highScore) {
//       document.querySelector('.highscore').textContent = score;
//       highScore = score;
//     }
//   }
//   // ์๋ ฅ๊ฐ์ด ์ ๋ต๋ณด๋ค ํด ๋
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
//   // ์๋ ฅ๊ฐ์ด ์ ๋ต๋ณด๋ค ์์ ๋
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// // Again ๋ฒํผ ๊ด๋ จ ์๋๊ธฐ๋ฅ
// document.querySelector('.again').addEventListener('click', function () {
//   // ์ค์ฝ์ด ๋ฐ๋๊ฒ
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   // ์ ๋ต ๋ฐ๋๊ฒ
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   // ์๋ ฅ์ฐฝ ๋น ์ฐฝ์ผ๋ก ๋ง๋ค๊ธฐ
//   document.querySelector('.guess').value = '';
//   // ๋ฉ์ธ์ง ์ด๊ธฐํ
//   document.querySelector('.message').textContent = 'Start guessing...';
//   // ๋ฐฑ๊ทธ๋ผ์ด๋ ์ปฌ๋ฌ #222
//   document.querySelector('body').style.backgroundColor = '#222';
//   // ๋๋ฒ์ฐฝ ํฌ๊ธฐ
//   document.querySelector('.number').style.width = '15rem';
// });

///////////// ์ค๋ณต์ฝ๋๊ฐ ๋๋ฌด ๋ง์์ Dryํ๊ฒ ๋ณ๊ฒฝ
///////////// ๋ฆฌํฉํ ๋ง ์ํ
/////// ๊ฒฝ์ฐ์ ์ ์ถ์
/////// ์ฃผ์ฌ์ ํ์
/////// ๋ฉ์ธ์ง ์ฐฝ ์๋ ฅ ํ์

// ์ ๋ต ์์ฑ๊ธฐ
const rollDice = function () {
  return Number(Math.trunc(Math.random() * 20) + 1);
};
let secretNumber = rollDice();
// document.querySelector('.number').textContent = secretNumber;

// ์ ์ ๊ด๋ฆฌ
let score = 20;
let highScore = 0;

// ๋ฉ์ธ์ง ์ถ๋ ฅ๊ธฐ
const displayMessage = function (input) {
  document.querySelector('.message').textContent = input;
};

// ํ๋๊ธฐ
document.querySelector('.check').addEventListener('click', function () {
  //console.log(typeof guess); string์ผ๋ก ๋์จ๋ค ๊ทธ๋์ Number ๋ถ์ฌ์ค๋ค
  const guess = Number(document.querySelector('.guess').value);

  // ์๋ฌด๊ฒ๋ ์๋ ฅ ์ํ์๋
  if (!guess) {
    displayMessage('๐ฅฒ๋ฒํธ๋ฅผ ์๋ ฅํ๊ณ  ๋๋ฌ์ฃผ์ธ์');
  }
  // ์ ๋ต ๋ง์ท์๋
  else if (guess === secretNumber) {
    displayMessage('๐์ ๋ต์๋๋ค!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // highscore ๊ธฐ๋ก
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  }

  // ์๋ ฅ๊ฐ์ด ์ ๋ต์ด๋ ๋ค๋ฅผ๋
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? displayMessage('์ ๋ต๋ณด๋ค ๋์์') : displayMessage('์ ๋ต๋ณด๋ค ๋ฎ์์');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('ํจ๋ฐฐ~!');
      document.querySelector('body').style.backgroundColor = '#CB4747';
    }
  }
});

// Again ๋ฒํผ ๊ด๋ จ ์๋๊ธฐ๋ฅ
document.querySelector('.again').addEventListener('click', function () {
  // ์ค์ฝ์ด ๋ฐ๋๊ฒ
  score = 20;
  document.querySelector('.score').textContent = score;
  // ์ ๋ต ๋ฐ๋๊ฒ
  secretNumber = rollDice();
  // ์๋ ฅ์ฐฝ ๋น ์ฐฝ์ผ๋ก ๋ง๋ค๊ธฐ
  document.querySelector('.guess').value = '';
  // ๋ฉ์ธ์ง ์ด๊ธฐํ
  displayMessage('Start guessing...');
  // ๋ฐฑ๊ทธ๋ผ์ด๋ ์ปฌ๋ฌ #222
  document.querySelector('body').style.backgroundColor = '#222';
  // ๋๋ฒ์ฐฝ ํฌ๊ธฐ
  document.querySelector('.number').style.width = '15rem';
});
