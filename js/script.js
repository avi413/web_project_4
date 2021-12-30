let editBtn = document.querySelector("button.profile__edit-btn");
let popupClose = document.querySelector("button.popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about-me");
let inputName = document.querySelector(".popup__input-text_type_name");
let inputAboutMe = document.querySelector(".popup__input-text_type_about-me");
let formElement = document.querySelector(".popup__form");

const container = document.querySelector(".galery");
const galeryListContainer = container.querySelector(".galery__list");
const addButton = document.querySelector(".profile__add-btn");

editBtn.addEventListener("click", handleOpenEditProfile );
popupClose.addEventListener("click", handleClodeEditProfile);
formElement.addEventListener('submit', handleProfileFormSubmit); 


function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    popup.classList.add("popup_closed");
}

function handleClodeEditProfile(evt) {
    popup.classList.add("popup_closed");
}

function handleOpenEditProfile() {
    inputName.value  = profileName.textContent;
    inputAboutMe.value  =  profileAboutMe.textContent;
    popup.classList.remove("popup_closed");
}


function addGaleryCardItem(imgSrctValue, titleValue) {
    const itemTemplate = document.querySelector("#galery-item-template").content;
    const galeryitemEl = itemTemplate.querySelector('.galery__item').cloneNode(true);
  
    galeryitemEl.querySelector(".galery__item-name").textContent = titleValue;
    galeryitemEl.querySelector(".galery__item-img").src = imgSrctValue;
    
    galeryListContainer.append(galeryitemEl); 
  }
  
  addButton.addEventListener("click", function () {
    const title = "title";
    const imgSrctValue = "./images/latemar.png";
  
    addGaleryCardItem(imgSrctValue.value, title.value);
  
    artist.value = "";
    title.value = "";
  });

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
    addGaleryCardItem(element.link,element.name);
});