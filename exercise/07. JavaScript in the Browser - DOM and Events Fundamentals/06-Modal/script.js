'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

////////////////////// 일단 길게 쓴 코드 시작

//// 클릭하면 modal 창 뜨게
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//     //modal.style.display = 'block'; 이건 클래스로 지정안해주고 일일이 해준거
//   });
// }

//// 배경눌러도 modal창 닫히게
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//// 배경눌러도 modal창 닫히게
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

////////////////////// 일단 길게 쓴 코드 끝

////////////////////// 리팩토링 시작

// 중복되는 함수 따로 만들고
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 여는 기능
btnsOpenModal;
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// 닫는 기능
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// esc로 닫는 기능
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////// 리팩토링 끝
