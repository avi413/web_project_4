const closePopup = (popup) => {
    popup.classList.remove("popup_opened");
    /** popups close click remove events */
    document.removeEventListener("mousedown", handleMousdownPopup);
    document.removeEventListener("click", handleClickClosePopup);
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    /** popups open events */
    document.addEventListener("mousedown", handleMousdownPopup);
    document.addEventListener("click", handleClickClosePopup);
}


/** popups close keydown Escape */
function handleMousdownPopup(evt) {
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



export {closePopup, openPopup, handleMousdownPopup, handleClickClosePopup}