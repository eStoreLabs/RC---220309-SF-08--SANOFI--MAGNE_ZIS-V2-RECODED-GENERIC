const esKvIconAsh = document.querySelector('.es-kv__descIcon--leaf');
const esKvTextAsh = document.querySelector('.es-kv__descSingle--ash');

const esToggleBtn = document.querySelectorAll('.es-ash__iconSingle');
const esCtnBox = document.querySelectorAll('.es-ash__benefitsSingle');

const esToggleArrow = document.querySelector('.es-ash__claimImg');
const esText = document.querySelector('.es-ash__claim--toggle');

const esDozeBtn = document.querySelector('.es-doze__containerBtn');
const esDozeCtn = document.querySelector('.es-doze__container');
// for (let i = 0; i < esKvIcon.length; i++) {
//   esKvIcon[i].addEventListener('click', () => {
//     esKvText[i].classList.toggle('.es-kv__descSingleActive');
//   });
// }

esKvIconAsh.addEventListener('click', () => {
  esKvTextAsh.classList.toggle('es-kv__descSingleActive');
});

for (let i = 0; i < esToggleBtn.length; i++) {
  esToggleBtn[i].addEventListener('click', () => {
    esCtnBox[i].classList.toggle('es-ash__active');
  });
}

esToggleArrow.addEventListener('click', () => {
  esText.classList.toggle('es-ash__active');
  esToggleArrow.classList.toggle('es-ash__remove');
});
//

esDozeBtn.addEventListener('click', () => {
  esDozeCtn.classList.toggle('.es-showIngr');
  // esDozeBtn.classList.toggle('.es-removeIngr');
});
