const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll(".stepper");

if(noticeEl) {
  const noticeCloseEl = noticeEl.querySelector(".notice__close");
  noticeCloseEl.addEventListener('click', () => {
    noticeCloseEl.classList.add('notice--hidden');
  })
}

if(stepperEls) {
  stepperEls.forEach(stepperEl => {
      const stepperInputEl = stepperEl.querySelector(".stepper__input");
      const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--minus");
      const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--plus");

      const stepperMin = Number(stepperInputEl.getAttribute("min"));
      const stepperMax = Number(stepperInputEl.getAttribute("max"));

      let count = Number(stepperInputEl.value);

      stepperBtnPlusEl.addEventListener("click", () => {
        stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
        stepperInputEl.value = count;
        if (count < stepperMax) {
          stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
          count++;
          stepperInputEl.value = count;
        }
        if (count === stepperMax) {
          stepperBtnPlusEl.classList.add("stepper__btn--disabled");
        }
      });
      stepperBtnMinusEl.addEventListener("click", () => {
        stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
        stepperInputEl.value = count;
        if (count > stepperMin) {
          stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
          count--;
          stepperInputEl.value = count;
        }
        if (count === stepperMax) {
          stepperBtnMinusEl.classList.add("stepper__btn--disabled");
        }
      });

  });
  // const stepperInputEl = stepperEl.querySelector('.stepper__input');
  // const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
  // const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');

  // const stepperMin = Number(stepperInputEl.getAttribute('min'));
  // const stepperMax = Number(stepperInputEl.getAttribute('max'));

  // let count = Number(stepperInputEl.value);


  // stepperBtnPlusEl.addEventListener('click', () => {

  //   stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
  //   stepperInputEl.value = count;
  // if(count < stepperMax) {
  //   stepperBtnPlusEl.classList.remove("stepper__btn--disabled");
  //   count++;
  //   stepperInputEl.value = count;
  // }
  // if (count === stepperMax) {
  //   stepperBtnPlusEl.classList.add("stepper__btn--disabled");
  // }


  // });
  // stepperBtnMinusEl.addEventListener('click', () => {

  //   stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
  //   stepperInputEl.value = count;
  // if (count > stepperMin) {
  //   stepperBtnMinusEl.classList.remove("stepper__btn--disabled");
  //   count--;
  //   stepperInputEl.value = count;
  // }
  // if (count === stepperMax) {
  //   stepperBtnMinusEl.classList.add("stepper__btn--disabled");
  // }


  // });


}
