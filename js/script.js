let editBtn = document.querySelector("button.profile__edit-btn");
let popupClose = document.querySelector("button.popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about-me");
let inputName = document.querySelector(".popup__input-text_type_name");
let inputAboutMe = document.querySelector(".popup__input-text_type_about-me");


editBtn.addEventListener("click", popupCloseBtn );

popupClose.addEventListener("click", function (evt) {
    popup.classList.add("popup_state_closed");
})

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    
    profileName.textContent  = inputName.value;
    profileAboutMe.textContent  =  inputAboutMe.value;
    popup.classList.add("popup_state_closed");
}

function popupCloseBtn() {
    inputName.value  = profileName.textContent;
    inputAboutMe.value  =  profileAboutMe.textContent;
    popup.classList.remove("popup_state_closed");
}
formElement.addEventListener('submit', handleProfileFormSubmit); 
