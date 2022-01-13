
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
      addgalleryCardItem(element);
  });
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
}

const openPopup = (popuop) => {
  popuop.classList.add("popup_opened");
}

const openPopupWithValidation = (popup) => {
  openPopup(popup);
  const inputList = Array.from(popuop.querySelectorAll(".popup__input"));
  const buttonElement = popuop.querySelector(".popup__submit-btn");
  toggleButtonState(inputList, buttonElement);
}
/** popups open events */
profileEditBtn.addEventListener("click", () => {
  inputName.value  = profileName.textContent;
  inputAboutMe.value  =  profileAboutMe.textContent;
  openPopupWithValidation(popupProfile);
});

opeNewCardPopupBtn.addEventListener("click", () => openPopupWithValidation(popupNewCard) );

/** popups close click events */
  document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__close") ) {
      const popup = document.querySelector(".popup_opened");
      closePopup(popup); 
    }
  });
/** popups close Escape events */
  document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        const popup = document.querySelector(".popup_opened");
        if(popup)
          closePopup(popup); 
      };
  }); 


profileFormEl.addEventListener('submit', handleProfileFormSubmit); 
newCardFormEl.addEventListener("submit", handleCreateNewCard);

/** galert Items Event listener */
galleryListContainer.addEventListener("click", function (evt) {
  /** if the user has pressed on the like button, add a like */
  if (evt.target.classList.contains("gallery__item-like-btn")) {
    handleLikeBtn(evt);
  }
  if (evt.target.classList.contains("gallery__item-trash-btn")) {
    handleDeletegalleryCarditem(evt);
  }
  if (evt.target.classList.contains("gallery__item-img")) {
    handleOpenImgPopup(evt);
  }
}); 


function handleCreateNewCard(evt) {
    evt.preventDefault(); 
    const item = {link: inputImageLink.value, name: inputTitle.value}
    addgalleryCardItem(item);
    placeForm.reset();
    closePopup(popupNewCard);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    closePopup(popupProfile);
}

function handleDeletegalleryCarditem(evt){
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

function addgalleryCardItem(item) {
  const galleryitemEl = createCard(item)
  galleryListContainer.prepend(galleryitemEl); 
}

function createCard(item) {
  const itemTemplate    = document.querySelector("#gallery-item-template").content;
  const galleryitemEl    = itemTemplate.querySelector('.gallery__item').cloneNode(true);
  const galleryImg       = galleryitemEl.querySelector(".gallery__item-img");
  const galleryItemName  = galleryitemEl.querySelector(".gallery__item-name");

  galleryItemName.textContent = item.name;
  galleryImg.src = item.link;
  galleryImg.alt = item.name;

  return galleryitemEl;
}

renderCards();
