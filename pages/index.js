import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from  "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import * as constants from "../utils/constants.js"


/**
 * generate a gallery Cards from initialCards initial const
 */
const cardList = new Section({
  data: constants.initialCards,
  renderer: addGalleryCardItem
}, constants.galleryListContainer);

function  addGalleryCardItem (item) {
  const card = new Card(item, 
    "#gallery-item-template",
    () => {
      const popup = new PopupWithImage({src : item.link , title: item.name}, ".popup_type_img");
      popup.open();
    });
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
  constants.placeForm.reset();
  newCardPopup.close();
  newCardValidator.toggleButtonState();
}

constants.opeNewCardPopupBtn.addEventListener("click", () => newCardPopup.open());

/**
 * add popup with form to edit main user info
 */
const userInfo  = new UserInfo(".profile__name",".profile__about-me");

const profilePopup = new PopupWithForm (
  ".popup_type_profile",
   handleProfileFormSubmit
);

function handleProfileFormSubmit (inputs) {
  userInfo.setUserInfo({name: inputs.profileName, job: inputs.profileAboutMe})
  profileValidator.toggleButtonState();
}

constants.profileEditBtn.addEventListener("click", () => {
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

/**
 * render the generated gallery Cards 
 */
cardList.renderer();


