import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import * as utils from "./utils.js"

const renderCards = () => {
  const initialCards = [
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
  initialCards.forEach(addGalleryCardItem);
};

const config = {
  formSelector: ".popup__form",
  formInputsFieldSet: ".popup__form-set",
  inputSelector: ".popup__input",
  submitBtnSelector: ".popup__submit-btn",
  inactiveBtnClass: "button_inactive",
  inputErrClass: "popup__input-text_type_error",
  inputErrActiveClass: "popup__input-text-error_active"
}

/** main buttons */
const profileEditBtn        = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn    = document.querySelector("button.profile__add-btn");

/** profile data elements */
const profileName           = document.querySelector(".profile__name");
const profileAboutMe        = document.querySelector(".profile__about-me");

/** gallery container */
const container             = document.querySelector(".gallery");
const galleryListContainer   = container.querySelector(".gallery__list");

/** profile popup elements */
const profileForm           = document.forms.profileform;
const profileFormEl         = document.querySelector(".popup__form_type_profile");
const popupProfile          = document.querySelector(".popup_type_profile");
const inputName             = profileForm.elements.profileName;
const inputAboutMe          = profileForm.elements.profileAboutMe;

const newCardFormEl         = document.querySelector(".popup__form_type_new-card");
const popupNewCard          = document.querySelector(".popup_type_new-card");
const popupCloseNewCard     = popupNewCard.querySelector("button.popup__close_place_new-card");

const submitBtn            = document.querySelector(".popup__submit-btn");

const placeForm             = document.forms.placeform;
const inputTitle            = placeForm.elements.placeName;
const inputImageLink        = placeForm.elements.placeImageLink;

profileEditBtn.addEventListener("click", () => {
  inputName.value  = profileName.textContent;
  inputAboutMe.value  =  profileAboutMe.textContent;
  utils.openPopup(popupProfile);
});

opeNewCardPopupBtn.addEventListener("click", () => utils.openPopup(popupNewCard));

profileFormEl.addEventListener("submit", handleProfileFormSubmit); 
newCardFormEl.addEventListener("submit", handleCreateNewCard);


function addGalleryCardItem(item) {
  const card = new Card(item, "#gallery-item-template");
  const cardElement = card.generateCard();

  galleryListContainer.prepend(cardElement); 
}

function handleCreateNewCard(evt) {
  evt.preventDefault(); 
  const item = {link: inputImageLink.value, name: inputTitle.value}
  addGalleryCardItem(item);
  placeForm.reset();
  utils.closePopup(popupNewCard);
  newCardValidator.enableValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
  utils.closePopup(popupProfile);
  profileValidator.enableValidation();
}

const newCardValidator = new FormValidator(config,".popup__form_type_new-card");
newCardValidator.enableValidation();

const profileValidator = new FormValidator(config,".popup__form_type_profile");
profileValidator.enableValidation();

renderCards();


