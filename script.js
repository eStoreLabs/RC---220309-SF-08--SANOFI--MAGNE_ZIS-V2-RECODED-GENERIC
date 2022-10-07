const esKvIcon = document.querySelector('.es-kv__descIcon');
const esKvText = document.querySelector('.es-kv__descSingle');

// for (let i = 0; i < esKvIcon.length; i++) {
//   esKvIcon[i].addEventListener('click', () => {
//     esKvText[i].classList.toggle('.es-kv__descSingleActive');
//   });
// }

// esKvIcon.addEventListener('click', () => {
//   esKvText.classList.toggle('.es-kv__descSingleActive');
// });

const esDozeBtn = document.querySelector('.es-doze__containerBtn');
const esDozeCtn = document.querySelector('.es-doze__container');

esDozeBtn.addEventListener('click', () => {
  esDozeCtn.classList.add('.es-showIngr');
  // esDozeBtn.classList.add('.es-removeIngr');
  console.log('ing-clicked');
});

const esToggleBtn = document.querySelectorAll('.es-ash__iconSingle');
const esCtnBox = document.querySelectorAll('.es-ash__benefitsSingle');

for (let i = 0; i < esToggleBtn.length; i++) {
  esToggleBtn[i].addEventListener('click', () => {
    esCtnBox[i].classList.toggle('es-ash__active');
  });
}

const esToggleArrow = document.querySelector('.es-ash__claimImg');
const esText = document.querySelector('.es-ash__claim--toggle');

esToggleArrow.addEventListener('click', () => {
  esText.classList.toggle('es-ash__active');
  esToggleArrow.classList.toggle('es-ash__remove');
});
