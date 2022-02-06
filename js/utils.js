const profileName           = document.querySelector(".profile__name");
const profileForm           = document.forms.profileform;
const profileAboutMe        = document.querySelector(".profile__about-me");
const inputAboutMe          = profileForm.elements.profileAboutMe;
const inputName             = profileForm.elements.profileName;
const popupProfile          = document.querySelector(".popup_type_profile");

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

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    closePopup(popupProfile);
}


export {closePopup, openPopup, handleKeydownPopup, handleClickClosePopup, handleProfileFormSubmit}