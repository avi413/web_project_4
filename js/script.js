let editBtn = document.querySelector("button.profile__edit-btn");
let popupClose = document.querySelector("button.popup__close");
let popup = document.querySelector(".popup");


editBtn.addEventListener("click", function () {  

    document.querySelector(".name").value  = document.querySelector(".profile__name").textContent;
    document.querySelector(".aboutMe").value  =  document.querySelector(".profile__about-me").textContent;
    popup.classList.remove("popup_closed");
})

popupClose.addEventListener("click", function (evt) {
    popup.classList.add("popup_closed");
})

let formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector(".name").value;
    let jobInput = document.querySelector(".aboutMe").value;
    
    document.querySelector(".profile__name").textContent  = nameInput;
    document.querySelector(".profile__about-me").textContent  =  jobInput;
    popup.classList.add("popup_closed");
}

formElement.addEventListener('submit', handleProfileFormSubmit); 
