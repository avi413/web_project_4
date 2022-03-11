import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from  "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import * as constants from "../utils/constants.js";
import Api from "../components/Api.js";

/** main buttons */
const profileEditBtn        = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn    = document.querySelector("button.profile__add-btn");
const avatarEditBtn         = document.querySelector(".profile__edit-avatar")
/** profile data elements */
const profileName           = document.querySelector(".profile__name");


const initCards = new Array();

const popupCardItem       = new PopupWithImage(".popup__img", ".popup__img-title", ".popup_type_img");
const popupConfirm        = new PopupWithConfirmation(".popup_type_delete", handleDelete);
const EditAvatarPopup     = new PopupWithForm(".popup_type_avatar", handleEditAvatar);
const newCardPopup        = new PopupWithForm (".popup_type_new-card", handleCreateNewCard);
const profilePopup        = new PopupWithForm (".popup_type_profile",  handleProfileFormSubmit);
const cardList            = new Section({data: initCards, renderer: addGalleryCardItem}, constants.galleryListSelector);
const userInfo            = new UserInfo(".profile__name", ".profile__about-me", ".profile__avatar");


avatarEditBtn.addEventListener("click",  () => {EditAvatarPopup.open()});

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

/**
 * handle edit pofile avatar image
 */
function handleEditAvatar (inputs) {
  renderLoading(true, ".popup__submit-btn_place_avatar");
  api.editProfileAvatar(inputs.avatarImageLink)
  .then (() => {
    userInfo.setUserAvatar({avatar: inputs.avatarImageLink})
    EditAvatarPopup.close();
  })
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    renderLoading(false, ".popup__submit-btn_place_avatar");
  })
  
}

/**
 * add new card item to gallery
 */
function  addGalleryCardItem (item) {
  const card = new Card(
    item, 
    "#gallery-item-template",
    () => { popupCardItem.open(item.link, item.name); },
    () => { popupConfirm.open(item._id, cardElement); },
    api);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  return cardElement;
}

/**
 * delete card item from gallery
 */
function handleDelete(card) {
  api.deleteCard(card.id)
  .then(() =>{
    card.remove();
    card = null;
    popupConfirm.close();
  })
  .catch(err => {
    console.log(err);
  })
}

/**
 * add new card item to gallery
 */
 opeNewCardPopupBtn.addEventListener("click", () => newCardPopup.open());

function handleCreateNewCard (inputs) {
  const newCard = addGalleryCardItem({link: inputs.placeImageLink, name: inputs.placeName, owner: {_id: profileName.id}});

  renderLoading(true, ".popup__submit-btn_place_new-card");
  api.createNewCard(inputs.placeImageLink,inputs.placeName)
  .then(data => {
    newCard.id = data._id;
    newCardPopup.close();
    constants.placeForm.reset();
    newCardValidator.toggleButtonState();
  })
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    renderLoading(false, ".popup__submit-btn_place_new-card");
  })
}

/**
 * edit user profile data
 */
function handleProfileFormSubmit (inputs) {
  userInfo.setUserInfo({name: inputs.profileName, about: inputs.profileAboutMe})
  renderLoading(true, ".popup__submit-btn_place_profile");
  api.editProfile({name: inputs.profileName, about: inputs.profileAboutMe})
  .then (() => {
    profilePopup.close();
  })
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







