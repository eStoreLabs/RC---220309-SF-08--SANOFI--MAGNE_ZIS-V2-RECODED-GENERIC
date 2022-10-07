const esKvIcon = document.querySelector('.es-kv__descIcon')
const esKvText = document.querySelector('.es-kv__descSingle')


  esKvIcon.addEventListener('click', ()=>{
    esKvText.classList.toggle('.es-kv__descSingleActive');
});



const esToggleBtn = document.querySelectorAll('.es-ash__iconSingle')
const esCtnBox = document.querySelectorAll('.es-ash__benefitsSingle')
const esMainCtn = document.querySelector('.es-ash__benefitsMainCtn')

for (let i = 0; i < esToggleBtn.length; i++){
  esToggleBtn[i].addEventListener('click', ()=>{
  // esMainCTn[i].classList.toggle('es-ash__active');
  esMainCtn.appendChild(esCtnBox[i]);
  esCtnBox[i].classList.toggle('es-ash__active');
  console.log(esCtnBox[i])
});
}


const esToggleArrow = document.querySelector('.es-ash__claimImg')
const esText= document.querySelector('.es-ash__claim--toggle')

esToggleArrow.addEventListener('click', ()=>{
  esText.classList.toggle('es-ash__active');
  esToggleArrow.classList.toggle('es-ash__remove');
});


const esDozeBtn = document.querySelector('.es-doze__containerBtn')
const esDozeCtn = document.querySelector('.es-doze__container')

esDozeBtn.addEventListener('click', ()=>{
  esDozeCtn.classList.add('.es-showIngr');
  // esDozeBtn.classList.add('.es-removeIngr');
  console.log('ing-clicked')
});