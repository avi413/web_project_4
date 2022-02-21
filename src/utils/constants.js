export const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ]; 
  export const config = {
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
export const inputName             = profileForm.elements.profileName;
export const inputAboutMe          = profileForm.elements.profileAboutMe;
export const placeForm             = document.forms.placeform;

export const galleryListSelector  = ".gallery__list";
