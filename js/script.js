const noticeEl = document.querySelector('.notice');
const  = document.querySelector(".stepper");

if(noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener('click', () => {
    noticeCloseEl.classList.add('notice--hidden');
  })
}

if(stepperEl) {
  const stepperInputEl = stepperEl.querySelector('.stepper__input');
  const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
  const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');

  let count = Number(stepperInputEl.value);
}
