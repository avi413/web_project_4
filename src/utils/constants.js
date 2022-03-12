const config = {
    formSelector: ".popup__form",
    formInputsFieldSet: ".popup__form-set",
    inputSelector: ".popup__input",
    submitBtnSelector: ".popup__submit-btn",
    inactiveBtnClass: "button_inactive",
    inputErrClass: "popup__input-text_type_error",
    inputErrActiveClass: "popup__input-text-error_active"
  }


/** profile popup elements */
const profileForm                  = document.forms.profileform;
const inputName             = profileForm.elements.profileName;
const inputAboutMe          = profileForm.elements.profileAboutMe;
const placeForm             = document.forms.placeform;

const galleryListSelector  = ".gallery__list";

export {config, inputName, inputAboutMe, placeForm, galleryListSelector}

