
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
  initialCards.forEach(element => {
      addGaleryCardItem(element);
  });
};

const closePopup = (popuop) => {
  popuop.classList.remove("popup_opened");
}

const openPopup = (popuop) => {
  popuop.classList.add("popup_opened");
}

//main buttons
const profileEditBtn        = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn    = document.querySelector("button.profile__add-btn");

//profile data elements
const profileName           = document.querySelector(".profile__name");
const profileAboutMe        = document.querySelector(".profile__about-me");

//galery container
const container             = document.querySelector(".galery");
const galeryListContainer   = container.querySelector(".galery__list");

//profile popup elements
const profileFormElement    = document.querySelector(".popup__form_type_profile");
const popupProfile          = document.querySelector(".popup_type_profile");
const popupCloseProfile     = popupProfile.querySelector("button.popup__close_place_profile");
const inputName             = popupProfile.querySelector(".popup__input-text_type_name");
const inputAboutMe          = popupProfile.querySelector(".popup__input-text_type_about-me");

//new galery cars popup elements
const newCardFormElement    = document.querySelector(".popup__form_type_new-card");
const popupNewCard          = document.querySelector(".popup_type_new-card");
const popupCloseNewCard     = popupNewCard.querySelector("button.popup__close_place_new-card");
const newCardBtn            = popupNewCard.querySelector(".popup__submit-btn_place_new-card");
const inputTitle            = popupNewCard.querySelector(".popup__input-text_type_title");
const inputImageLink        = popupNewCard.querySelector(".popup__input-text_type_Image-link");

//image galery popup elements
const popupImg              = document.querySelector(".popup_type_img");
const popupImgElement       = popupImg.querySelector(".popup__img");
const popupImgtitleElement  = popupImg.querySelector(".popup__img-title");
const popupCloseImg         = popupImg.querySelector("button.popup__close_place_img");

//popups open events
profileEditBtn.addEventListener("click", () => {
  inputName.value  = profileName.textContent;
  inputAboutMe.value  =  profileAboutMe.textContent;
  openPopup(popupProfile);
});

opeNewCardPopupBtn.addEventListener("click", () => openPopup(popupNewCard) );

//popups close events
popupCloseProfile.addEventListener("click", () => closePopup(popupProfile));
popupCloseNewCard.addEventListener("click", () => closePopup(popupNewCard));
popupCloseImg.addEventListener("click", () => closePopup(popupImg));

profileFormElement.addEventListener('submit', handleProfileFormSubmit); 
newCardFormElement.addEventListener("submit", handleCreateNewCard);

//--------------------
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("button_inactive");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit-btn");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {   
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(".popup__form-set"));

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();
//-------------------
function handleCreateNewCard(evt) {
    evt.preventDefault(); 
    const item = {link: inputImageLink.value, name: inputTitle.value}
    addGaleryCardItem(item);
    inputImageLink.value = "";
    inputTitle.value = "";
    closePopup(popupNewCard);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    closePopup(popupProfile);
}

function handleDeletegaleryCarditem(evt){
  evt.target.closest('.galery__item').remove();
}
function handleLikeBtn(evt){
  evt.target.classList.toggle('galery__item-like-btn_active');
}

function handleOpenImgPopup(evt){ 
  popupImgtitleElement.textContent = evt.target.alt;
  popupImgElement.src = evt.target.src;
  popupImgElement.alt = evt.target.alt;
  openPopup(popupImg);
}

function addGaleryCardItem(item) {
  const galeryitemEl = createCard(item)
  galeryListContainer.prepend(galeryitemEl); 
}

function createCard(item) {
  const itemTemplate    = document.querySelector("#galery-item-template").content;
  const galeryitemEl    = itemTemplate.querySelector('.galery__item').cloneNode(true);
  const likeBtn         = galeryitemEl.querySelector(".galery__item-like-btn");
  const trashBtn        = galeryitemEl.querySelector(".galery__item-trash-btn");
  const galeryImg       = galeryitemEl.querySelector(".galery__item-img");
  const galeryItemName  = galeryitemEl.querySelector(".galery__item-name");

  galeryItemName.textContent = item.name;
  galeryImg.src = item.link;
  galeryImg.alt = item.name;

  likeBtn.addEventListener("click",handleLikeBtn)
  trashBtn.addEventListener("click",handleDeletegaleryCarditem)
  galeryImg.addEventListener("click", handleOpenImgPopup);

  return galeryitemEl;
}

renderCards();