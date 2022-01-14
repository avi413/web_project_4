
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
const popupCloseProfile     = popupProfile.querySelector("button.popup__close_place_profile");
const inputName             = profileForm.elements.profileName;
const inputAboutMe          = profileForm.elements.profileAboutMe;

/** new gallery cars popup elements */
const placeForm             = document.forms.placeform;
const newCardFormEl         = document.querySelector(".popup__form_type_new-card");
const popupNewCard          = document.querySelector(".popup_type_new-card");
const popupCloseNewCard     = popupNewCard.querySelector("button.popup__close_place_new-card");
const newCardBtn            = popupNewCard.querySelector(".popup__submit-btn_place_new-card");
const inputTitle            = placeForm.elements.placeName;
const inputImageLink        = placeForm.elements.placeImageLink;

/** image gallery popup elements */
const popupImg              = document.querySelector(".popup_type_img");
const popupImgEl            = popupImg.querySelector(".popup__img");
const popupImgTitleEl       = popupImg.querySelector(".popup__img-title");
const popupCloseImg         = popupImg.querySelector("button.popup__close_place_img");

const closePopup = (popuop) => {
  popuop.classList.remove("popup_opened");

  /** popups close click remove events */
  document.removeEventListener("keydown", handleKeydownPopup);
  document.removeEventListener("click", handleClickClosePopup);
}

function openPopup(popuop) {
  popuop.classList.add("popup_opened");

  /** popups open events */
  document.addEventListener("keydown", handleKeydownPopup);
  document.addEventListener("click", handleClickClosePopup);
}

const openPopupWithValidation = (popup) => {
  openPopup(popup);
  const inputList = Array.from(popup.querySelectorAll(".popup__input"));
  const buttonElement = popup.querySelector(".popup__submit-btn");
  toggleButtonState(inputList, buttonElement);
}

profileEditBtn.addEventListener("click", () => {
  inputName.value  = profileName.textContent;
  inputAboutMe.value  =  profileAboutMe.textContent;
  openPopupWithValidation(popupProfile);
});

opeNewCardPopupBtn.addEventListener("click", () => openPopupWithValidation(popupNewCard));

profileFormEl.addEventListener('submit', handleProfileFormSubmit); 
newCardFormEl.addEventListener("submit", handleCreateNewCard);

/** popups close keydown Escape */
function handleKeydownPopup(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    if(popup)
      closePopup(popup); 
  }
}

function handleClickClosePopup(evt) {
  if (evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close") ) {
        const popup = document.querySelector(".popup_opened");
        closePopup(popup); 
  }
}

function handleCreateNewCard(evt) {
    evt.preventDefault(); 
    const item = {link: inputImageLink.value, name: inputTitle.value}
    addGalleryCardItem(item);
    placeForm.reset();
    closePopup(popupNewCard);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    closePopup(popupProfile);
}

function handleDeleteGalleryCardItem(evt){
  evt.target.closest('.gallery__item').remove();
}
function handleLikeBtn(evt){
  evt.target.classList.toggle('gallery__item-like-btn_active');
}

function handleOpenImgPopup(evt){ 
  popupImgTitleEl.textContent = evt.target.alt;
  popupImgEl.src = evt.target.src;
  popupImgEl.alt = evt.target.alt;
  openPopup(popupImg);
}

function addGalleryCardItem(item) {
  const galleryItemEl = createCard(item)
  galleryListContainer.prepend(galleryItemEl); 
}

function createCard(item) {
  const itemTemplate      = document.querySelector("#gallery-item-template").content;
  const galleryItemEl     = itemTemplate.querySelector(".gallery__item").cloneNode(true);
  const likeBtn           = galleryItemEl.querySelector(".gallery__item-like-btn");
  const trashBtn          = galleryItemEl.querySelector(".gallery__item-trash-btn");
  const galleryImg        = galleryItemEl.querySelector(".gallery__item-img");
  const galleryItemName   = galleryItemEl.querySelector(".gallery__item-name");

  galleryItemName.textContent = item.name;
  galleryImg.src = item.link;
  galleryImg.alt = item.name;

  likeBtn.addEventListener("click",handleLikeBtn)
  trashBtn.addEventListener("click",handleDeleteGalleryCardItem)
  galleryImg.addEventListener("click", handleOpenImgPopup);


  return galleryItemEl;
}

renderCards();
