export default class FormValidator {
    constructor( config, formEl ){
      this._formSelector         = config.formSelector;
      this._formInputsFieldSet   = config.formInputsFieldSet;
      this._inputSelector        = config.inputSelector;
      this._submitBtnSelector    = config.submitBtnSelector;
      this._inactiveBtnClass     = config.inactiveBtnClass;
      this._inputErrClass        = config.inputErrClass;
      this._inputErrActiveClass  = config.inputErrActiveClass;
      this._formEl               = document.querySelector(formEl);
    }

    _showInputErr (inputEl) {
      const errEl = this._formEl.querySelector(`.${inputEl.id}-error`);
      
      inputEl.classList.add(this._inputErrClass);
      errEl.textContent = inputEl.validationMessage;
      errEl.classList.add(this._inputErrActiveClass);
    }

    _hideInputError (inputEl) {
      const errEl = this._formEl.querySelector(`.${inputEl.id}-error`);

      inputEl.classList.remove(this._inputErrClass);
      errEl.classList.remove(this._inputErrActiveClass);
      errEl.textContent = "";
    }

    _checkInputValidity (inputEl) {
      if (!inputEl.validity.valid) {
        this._showInputErr(inputEl);
      } else {
        this._hideInputError(inputEl);
      }
    }

    _hasInvalidInput (inputLst) {
      return inputLst.some((inputEl) => !inputEl.validity.valid);
    }

    toggleButtonState () {
      const inputLst = Array.from(this._formEl.querySelectorAll(this._inputSelector));
      const btnEl = this._formEl.querySelector(this._submitBtnSelector);
      if (this._hasInvalidInput(inputLst)) {
        btnEl.classList.add(this._inactiveBtnClass);
        btnEl.disabled = true;
      } else {
        btnEl.classList.remove(this._inactiveBtnClass);
        btnEl.disabled = false;
      }
    }

    _setEventListeners () {
      const inputLst = Array.from(this._formEl.querySelectorAll(this._inputSelector));
      const btnEl = this._formEl.querySelector(this._submitBtnSelector);
      this.toggleButtonState(inputLst, btnEl);
      inputLst.forEach((inputEl) => {
        inputEl.addEventListener("input", () => {   
          this._checkInputValidity(inputEl);
          this.toggleButtonState(inputLst, btnEl);
        });
      });
    }

    enableValidation () {
      this._setEventListeners();
      this._formEl.addEventListener("submit", (evt) => evt.preventDefault());
    }

  }