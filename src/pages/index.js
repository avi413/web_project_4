import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from  "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import * as constants from "../utils/constants.js";
import Api from "../components/Api.js"
/** main buttons */
const profileEditBtn        = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn    = document.querySelector("button.profile__add-btn");

/** profile data elements */
const profileName           = document.querySelector(".profile__name");
const profileAboutMe        = document.querySelector(".profile__about-me");
const profileAvatar         = document.querySelector(".profile__avatar");
/** gallery container */
const container             = document.querySelector(".gallery");


const initCards = new Array();

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "9b621f0f-5dfe-43f1-95fd-e9cc188bcc35",
    "Content-Type": "application/json"
  }
});

/**
 * initiaal user info and gallery Cards from
 */
api.init()
.then(([user,cards]) => {
  userInfo.setUserInfo(user);
  userInfo.setUserAvatar({avatar: user.avatar,name: user.name});
  cards.forEach((card) => {initCards.push(card);})
  cardList.renderer();
})
.catch ((err) => {
  handleError(err);
})

/**
 * set Error description on top of the page
 */
function handleError(err) {
  const errorEl = document.querySelector(".profile__error");
  errorEl.textContent = err;
  errorEl.style.display  = "block";
}

const cardList  = new Section({data: initCards, renderer: addGalleryCardItem}, constants.galleryListSelector);
const userInfo  = new UserInfo(".profile__name", ".profile__about-me", ".profile__avatar", () => {
  const EditAvatarPopup = new PopupWithForm(".popup_type_avatar", handleEditAvatar);
  EditAvatarPopup.open();
});

/**
 * handle edit pofile avatar image
 */
function handleEditAvatar (inputs) {
  renderLoading(false, ".popup__submit-btn_place_avatar");
  api.editProfileAvatar(inputs.avatarImageLink)
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    renderLoading(false, ".popup__submit-btn_place_avatar");
  })
  userInfo.setUserAvatar({avatar: inputs.avatarImageLink})
}

/**
 * add new card item to gallery
 */
function  addGalleryCardItem (item) {
  const card = new Card(item, 
    "#gallery-item-template",
    () => {
      const popup = new PopupWithImage({src : item.link , title: item.name}, ".popup_type_img");
      popup.open();
    },
    () => {
      const popupConfirm = new PopupWithConfirmation(".popup_type_delete", handleDelete);
      popupConfirm.open(item._id, cardElement);
    },api);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

/**
 * add popup with form to add new card item to gallery
 */
const newCardPopup = new PopupWithForm (
  ".popup_type_new-card",
  handleCreateNewCard
);

/**
 * delete card item from gallery
 */
function handleDelete(itemId, card) {
  api.deleteCard(itemId)
  .then(() =>{
    card.remove();
    card = null;
  })
  .catch(err => {
    console.log(err);
  })
}

/**
 * add new card item to gallery
 */
function handleCreateNewCard (inputs) {
  renderLoading(true, ".popup__submit-btn_place_new-card");
  addGalleryCardItem({link: inputs.placeImageLink, name: inputs.placeName, owner: {_id: profileName.id}});
  api.createNewCard(inputs.placeImageLink,inputs.placeName)
  .then(data => {
    console.log(data)
  })
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    renderLoading(false, ".popup__submit-btn_place_new-card");
  })
  constants.placeForm.reset();
  newCardPopup.close();
  newCardValidator.toggleButtonState();
}

opeNewCardPopupBtn.addEventListener("click", () => newCardPopup.open());

/**
 * add popup with form to edit main user info
 */
const profilePopup = new PopupWithForm (
  ".popup_type_profile",
   handleProfileFormSubmit
);

/**
 * edit user profile data
 */
function handleProfileFormSubmit (inputs) {
  renderLoading(true, ".popup__submit-btn_place_profile");
  userInfo.setUserInfo({name: inputs.profileName, about: inputs.profileAboutMe})
  api.editProfile({name: inputs.profileName, about: inputs.profileAboutMe})
  .catch ((err) => {
    console.log(err);
  })
  .finally(() =>{
    renderLoading(false, ".popup__submit-btn_place_profile");
  })
  profileValidator.toggleButtonState();
}

/**
 * add event listener to edit user profile info
 */
profileEditBtn.addEventListener("click", () => {
  const {name, about } = userInfo.getUserInfo();
  constants.inputName.value  = name;
  constants.inputAboutMe.value  = about;
  profilePopup.open();
});

/**
 * change button text to ..saving until process ends
 */
function renderLoading(isLoading, btnSelector) {
  const btnEl = document.querySelector(btnSelector);
  if(isLoading) {
    btnEl.textContent = "...Saving"; 
  }
  else {
    btnEl.textContent = "Save"; 
  }
}

/**
 * add form validation for all forms
 */
const newCardValidator = new FormValidator(constants.config,".popup__form_type_new-card");
newCardValidator.enableValidation();

const editAvatarValidator = new FormValidator(constants.config,".popup__form_type_avatar");
editAvatarValidator.enableValidation();

const profileValidator = new FormValidator(constants.config,".popup__form_type_profile");
profileValidator.enableValidation();







