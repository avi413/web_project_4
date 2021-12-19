let editBtn = document.querySelector("button.profile__edit-btn");
let popupClose = document.querySelector("button.popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about-me");
let inputName = document.querySelector(".popup__input-text_type_name");
let inputAboutMe = document.querySelector(".popup__input-text_type_about-me");
let formElement = document.querySelector(".popup__form");

editBtn.addEventListener("click", handleOpenEditProfile );
popupClose.addEventListener("click", handleClodeEditProfile);
formElement.addEventListener('submit', handleProfileFormSubmit); 


function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent  = inputName.value;
    profileAboutMe.textContent  =  inputAboutMe.value;
    popup.classList.add("popup_state_closed");
}

function handleClodeEditProfile(evt) {
    popup.classList.add("popup_state_closed");
}

function handleOpenEditProfile() {
    inputName.value  = profileName.textContent;
    inputAboutMe.value  =  profileAboutMe.textContent;
    popup.classList.remove("popup_state_closed");
}

