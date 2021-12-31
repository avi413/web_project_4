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

const profileEditBtn      = document.querySelector("button.profile__edit-btn");
const opeNewCardPopupBtn  = document.querySelector("button.profile__add-btn");
const popupProfile        = document.querySelector(".popup_type_profile");
const popupNewCard        = document.querySelector(".popup_type_new-card");
const profileName         = document.querySelector(".profile__name");
const profileAboutMe      = document.querySelector(".profile__about-me");
const profileFormElement  = document.querySelector(".popup__form_type_profile");
const newCardFormElement  = document.querySelector(".popup__form_type_new-card");
const container           = document.querySelector(".galery");

const galeryListContainer = container.querySelector(".galery__list");

const popupCloseProfile   = popupProfile.querySelector("button.popup__close_place_profile");
const inputName           = popupProfile.querySelector(".popup__input-text_type_name");
const inputAboutMe        = popupProfile.querySelector(".popup__input-text_type_about-me");

const popupCloseNewCard   = popupNewCard.querySelector("button.popup__close_place_new-card");
const newCardBtn          = popupNewCard.querySelector(".popup__input-btn_place_new-card");
const inputTitle          = popupNewCard.querySelector(".popup__input-text_type_title");
const inputImageLink      = popupNewCard.querySelector(".popup__input-text_type_Image-link");


//const addButton = document.querySelector(".profile__add-btn");


initialCards.forEach(element => {
    addGaleryCardItem(element.link,element.name);
});



profileEditBtn.addEventListener("click", handleOpenEditProfile);
opeNewCardPopupBtn.addEventListener("click", handleOpenAddCard );
popupCloseProfile.addEventListener("click", handleClodeEditProfile);
popupCloseNewCard.addEventListener("click", handleClodeEditProfile);

profileFormElement.addEventListener('submit', handleProfileFormSubmit); 
newCardFormElement.addEventListener("submit", handleCreateNewCard);

function handleCreateNewCard(evt) {
    evt.preventDefault(); 
    addGaleryCardItem(inputImageLink.value, inputTitle.value);
    inputImageLink.value = "";
    inputTitle.value = "";
    popupNewCard.classList.add("popup_closed");
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    popupProfile.classList.add("popup_closed");
}

function handleClodeEditProfile(evt) {
  const parent = evt.target.parentNode;
  parent.classList.add("popup_closed");
}

function handleOpenEditProfile() {
    inputName.value  = profileName.textContent;
    inputAboutMe.value  =  profileAboutMe.textContent;
    popupProfile.classList.remove("popup_closed");
}

function handleOpenAddCard() {
  popupNewCard.classList.remove("popup_closed");
}

function addGaleryCardItem(imgSrctValue, titleValue) {
    const itemTemplate = document.querySelector("#galery-item-template").content;
    const galeryitemEl = itemTemplate.querySelector('.galery__item').cloneNode(true);
  
    galeryitemEl.querySelector(".galery__item-name").textContent = titleValue;
    galeryitemEl.querySelector(".galery__item-img").src = imgSrctValue;
    
    galeryListContainer.prepend(galeryitemEl); 
  }




