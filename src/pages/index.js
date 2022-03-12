import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from  "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {config, inputName, inputAboutMe, galleryListSelector}  from "../utils/constants.js";
import Api from "../components/Api.js";

/** main buttons */
const profileEditBtn      = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn  = document.querySelector("button.profile__add-btn");
const avatarEditBtn       = document.querySelector(".profile__edit-avatar")

const errorEl             = document.querySelector(".profile__error");

const popupCardItem       = new PopupWithImage(".popup__img", ".popup__img-title", ".popup_type_img");
const popupConfirm        = new PopupWithConfirmation(".popup_type_delete", handleDelete);
const editAvatarPopup     = new PopupWithForm(".popup_type_avatar", handleEditAvatar);
const newCardPopup        = new PopupWithForm (".popup_type_new-card", handleCreateNewCard);
const profilePopup        = new PopupWithForm (".popup_type_profile",  handleProfileFormSubmit);
const cardList            = new Section(addGalleryCardItem, galleryListSelector);
const userInfo            = new UserInfo(".profile__name", ".profile__about-me", ".profile__avatar");

const formValidators = {};

avatarEditBtn.addEventListener("click",  () => {editAvatarPopup.open()});

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
  cardList.rendererItems(cards);
})
.catch ((err) => {
  handleError(err);
})




/**
 * handle edit pofile avatar image
 */
function handleEditAvatar (inputs) {
  editAvatarPopup.renderLoading(true, ".popup__submit-btn_place_avatar");
  api.editProfileAvatar(inputs.avatarImageLink)
  .then (() => {
    userInfo.setUserAvatar({avatar: inputs.avatarImageLink})
    editAvatarPopup.close();
    formValidators["avatarform"].toggleButtonState();
  })
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    editAvatarPopup.renderLoading(false, ".popup__submit-btn_place_avatar");
  })
}

/**
 * edit user profile data
 */
 function handleProfileFormSubmit (inputs) {
  profilePopup.renderLoading(true, ".popup__submit-btn_place_profile");

  api.editProfile({name: inputs.profileName, about: inputs.profileAboutMe})
  .then (() => {
    userInfo.setUserInfo({name: inputs.profileName, about: inputs.profileAboutMe})
    profilePopup.close();
    () => formValidators["profileform"].toggleButtonState();
  })
  .catch ((err) => {
    console.log(err);
  })
  .finally(() =>{
    profilePopup.renderLoading(false, ".popup__submit-btn_place_profile");
  })
}

/**
 * add new card item to gallery
 */
 opeNewCardPopupBtn.addEventListener("click", () => newCardPopup.open());

 function createCard (item) {
  const card = new Card(
    item, 
    "#gallery-item-template",
    () => { popupCardItem.open(item.link, item.name); },
    () => { popupConfirm.open(card); },
    handleLike,
    api);
    return card.generateCard();
}

function  addGalleryCardItem (item) {
  cardList.addItem(createCard(item));
}

function handleCreateNewCard (inputs) {
  newCardPopup.renderLoading(true, ".popup__submit-btn_place_new-card");

  api.createNewCard(inputs.placeImageLink,inputs.placeName)
  .then(data => {
    addGalleryCardItem (data)
    newCardPopup.close();
    formValidators["placeform"].toggleButtonState();
  })
  .catch ((err) => {
    handleError(err);
  })
  .finally(() =>{
    newCardPopup.renderLoading(false, ".popup__submit-btn_place_new-card");
  })
}

/**
 * delete card item from gallery
 */
 function handleDelete(card) {
  api.deleteCard(card._id)
  .then(() =>{
    card._element.remove();
    card._element = null;
    popupConfirm.close();
  })
  .catch(err => {
    console.log(err);
  })
}

/**
 * handle card likes update
 */
function handleLike(card) {
  card.updateLikes()
    .then((data) => {
      card.setLikes(data);
    })
    .catch((err) => {
      console.log(err);
    })     
   
}

/**
 * add event listener to edit user profile info
 */
profileEditBtn.addEventListener("click", () => {
  const {name, about } = userInfo.getUserInfo();
  inputName.value  = name;
  inputAboutMe.value  = about;
  profilePopup.open();
});

/**
 * set Error description on top of the page
 */
 function handleError(err) {
  errorEl.textContent = err;
  errorEl.style.display  = "block";
}


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config,formElement)
    //get the name of the form
    const formName = formElement.getAttribute('name')

   //store a validator by the `name` of the form
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);







