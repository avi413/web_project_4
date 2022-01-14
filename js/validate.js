const config = {
  formSelector: ".popup__form",
  formInputsFieldSet: ".popup__form-set",
  inputSelector: ".popup__input",
  submitBtnSelector: ".popup__submit-btn",
  inactiveBtnClass: "button_inactive",
  inputErrClass: "popup__input-text_type_error",
  inputErrActiveClass: "popup__input-text-error_active"
}

const showInputErr = (formEl, inputEl, errMsg) => {
    const errEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add(config.inputErrClass);
    errEl.textContent = errMsg;
    errEl.classList.add(config.inputErrActiveClass);
  };
  
  const hideInputError = (formEl, inputEl) => {
    const errEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove(config.inputErrClass);
    errEl.classList.remove(config.inputErrActiveClass);
    errEl.textContent = "";
  };
  
  const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
      showInputErr(formEl, inputEl, inputEl.validationMessage);
    } else {
      hideInputError(formEl, inputEl);
    }
  };
  
  const hasInvalidInput = (inputLst) => {
    return inputLst.some((inputEl) => !inputEl.validity.valid);
  };
  
  const toggleButtonState = (inputLst, btnEl) => {
    if (hasInvalidInput(inputLst)) {
      btnEl.classList.add(config.inactiveBtnClass);
      btnEl.disabled = true;
    } else {
      btnEl.classList.remove(config.inactiveBtnClass);
      btnEl.disabled = false;
    }
  };
  
  const setEventListeners = (formEl) => {
    const inputLst = Array.from(formEl.querySelectorAll(config.inputSelector));
    const btnEl = formEl.querySelector(config.submitBtnSelector);
    toggleButtonState(inputLst, btnEl);
    inputLst.forEach((inputEl) => {
      inputEl.addEventListener("input", function () {   
        checkInputValidity(formEl, inputEl);
        toggleButtonState(inputLst, btnEl);
      });
    });
  };
  
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formEl) => {
      formEl.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
      const fieldSetList = Array.from(formEl.querySelectorAll(config.formInputsFieldSet));
      fieldSetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
  };

  
  enableValidation(config);