const noticeEl = document.querySelector('.notice');
const stepperEl = document.querySelector(".stepper");

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
  stepperBtnPlusEl.addEventListener('click', () => {
    stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
    count++;
    stepperInputEl.value = count;
  }
  if(stepper === stepperMax) {
    stepperBtnPlusEl.classList.add('stepper__btn--disabled')
  });
}
