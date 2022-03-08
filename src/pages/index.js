import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from  "../components/PopupWithImage.js";
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
function handleError(err) {
  const errorEl = document.querySelector(".profile__error");
  errorEl.textContent = err;
  errorEl.style.display  = "block";
}
const cardList  = new Section({data: initCards, renderer: addGalleryCardItem}, constants.galleryListSelector);
const userInfo  = new UserInfo(".profile__name", ".profile__about-me", ".profile__avatar");

function  addGalleryCardItem (item) {
  const card = new Card(item, 
    "#gallery-item-template",
    () => {
      const popup = new PopupWithImage({src : item.link , title: item.name}, ".popup_type_img");
      popup.open();
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

function handleCreateNewCard (inputs) {
  addGalleryCardItem({link: inputs.placeImageLink, name: inputs.placeName});
  api.createNewCard(inputs.placeImageLink,inputs.placeName)
  .then(data => {
    console.log(data)
  })
  .catch ((err) => {
    handleError(err);
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

function handleProfileFormSubmit (inputs) {
  userInfo.setUserInfo({name: inputs.profileName, job: inputs.profileAboutMe})
  api.editProfile({name: inputs.profileName, job: inputs.profileAboutMe})
  .catch ((err) => {
    console.log(err);
  })

  profileValidator.toggleButtonState();
}

profileEditBtn.addEventListener("click", () => {
  const {name, job } = userInfo.getUserInfo();
  constants.inputName.value  = name;
  constants.inputAboutMe.value  = job;
  profilePopup.open();
});


/**
 * add form validation for all forms
 */
const newCardValidator = new FormValidator(constants.config,".popup__form_type_new-card");
newCardValidator.enableValidation();

const profileValidator = new FormValidator(constants.config,".popup__form_type_profile");
profileValidator.enableValidation();







