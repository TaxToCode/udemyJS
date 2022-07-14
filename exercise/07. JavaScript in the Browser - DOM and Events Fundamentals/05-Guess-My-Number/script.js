'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number🥲';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

///////////////////////// 프로그램 짜기

// ///// 정답 생성기
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// // document.querySelector('.number').textContent = secretNumber;

// ///// 점수 관리
// let score = 20;

// ///// 판독기
// document.querySelector('.check').addEventListener('click', function () {
//   //console.log(typeof guess); string으로 나온다 그래서 Number 붙여준다
//   const guess = Number(document.querySelector('.guess').value);

//   // 아무것도 입력 안했을때
//   if (!guess) {
//     document.querySelector('.message').textContent = '🥲No Number⚠';
//   }
//   // 남은 횟수 0점일때
//   else if (score === 0) {
//     document.querySelector('.message').textContent = 'You lost the game!';
//   }
//   // 정답 맞췄을때
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '😍Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//   }
//   // 입력값이 정답보다 클 때
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
//   // 입력값이 정답보다 작을 때
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

/////// CC 4-1
////// 1. again 버튼 작동가능하게
////// 2. again 버튼 누르면 스코어, 정답 바뀌게
////// 3. 누르면 메세지랑 입력창도 초기화
////// 4. 백그라운드컬러 #222 로 복구하고 넘버창 크기도 15rem으로 복구하기

// ///// 정답 생성기
// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// // document.querySelector('.number').textContent = secretNumber;

// ///// 점수 관리
// let score = 20;
// let highScore = 0;

// ///// 판독기
// document.querySelector('.check').addEventListener('click', function () {
//   //console.log(typeof guess); string으로 나온다 그래서 Number 붙여준다
//   const guess = Number(document.querySelector('.guess').value);

//   // 아무것도 입력 안했을때
//   if (!guess) {
//     document.querySelector('.message').textContent = '🥲No Number⚠';
//   }
//   // 남은 횟수 0점일때
//   else if (score === 0) {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('body').style.backgroundColor = '#CB4747';
//   }
//   // 정답 맞췄을때
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '😍Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     // highscore 기록
//     if (score > highScore) {
//       document.querySelector('.highscore').textContent = score;
//       highScore = score;
//     }
//   }
//   // 입력값이 정답보다 클 때
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
//   // 입력값이 정답보다 작을 때
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// // Again 버튼 관련 작동기능
// document.querySelector('.again').addEventListener('click', function () {
//   // 스코어 바뀌게
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   // 정답 바뀌게
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   // 입력창 빈 창으로 만들기
//   document.querySelector('.guess').value = '';
//   // 메세지 초기화
//   document.querySelector('.message').textContent = 'Start guessing...';
//   // 백그라운드 컬러 #222
//   document.querySelector('body').style.backgroundColor = '#222';
//   // 넘버창 크기
//   document.querySelector('.number').style.width = '15rem';
// });

///////////// 중복코드가 너무 많아서 Dry하게 변경
///////////// 리팩토링 수행
/////// 경우의 수 축소
/////// 주사위 펑션
/////// 메세지 창 입력 펑션

// 정답 생성기
const rollDice = function () {
  return Number(Math.trunc(Math.random() * 20) + 1);
};
let secretNumber = rollDice();
// document.querySelector('.number').textContent = secretNumber;

// 점수 관리
let score = 20;
let highScore = 0;

// 메세지 출력기
const displayMessage = function (input) {
  document.querySelector('.message').textContent = input;
};

// 판독기
document.querySelector('.check').addEventListener('click', function () {
  //console.log(typeof guess); string으로 나온다 그래서 Number 붙여준다
  const guess = Number(document.querySelector('.guess').value);

  // 아무것도 입력 안했을때
  if (!guess) {
    displayMessage('🥲번호를 입력하고 눌러주세요');
  }
  // 정답 맞췄을때
  else if (guess === secretNumber) {
    displayMessage('😍정답입니다!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // highscore 기록
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  }

  // 입력값이 정답이랑 다를때
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? displayMessage('정답보다 높아요') : displayMessage('정답보다 낮아요');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('패배~!');
      document.querySelector('body').style.backgroundColor = '#CB4747';
    }
  }
});

// Again 버튼 관련 작동기능
document.querySelector('.again').addEventListener('click', function () {
  // 스코어 바뀌게
  score = 20;
  document.querySelector('.score').textContent = score;
  // 정답 바뀌게
  secretNumber = rollDice();
  // 입력창 빈 창으로 만들기
  document.querySelector('.guess').value = '';
  // 메세지 초기화
  displayMessage('Start guessing...');
  // 백그라운드 컬러 #222
  document.querySelector('body').style.backgroundColor = '#222';
  // 넘버창 크기
  document.querySelector('.number').style.width = '15rem';
});
