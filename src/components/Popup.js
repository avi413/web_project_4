export default class Popup {
    constructor ( popupSelector ) {
        this._popup = document.querySelector(popupSelector);
    }
    close() {
        this._popup.classList.remove("popup_opened");
        /** popups close click remove events */
        this.removeEventListeners();
    }

    open() {
        this._popup.classList.add("popup_opened");
        /** popups open events */
        this.setEventListeners();
    }

    _handleEscClose = (evt) =>{
        if (evt.key === "Escape") {
            const popup = document.querySelector(".popup_opened");
            if(popup) {
                this.close();
            }   
        }
    }

    setEventListeners() {
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("mousedown", this._handleClickClosePopup);
    }

    removeEventListeners() {
        document.removeEventListener("keydown",  this._handleEscClose);
        document.removeEventListener("mousedown",  this._handleClickClosePopup);
    }

    _handleClickClosePopup = (evt) => {
            if (evt.target.classList.contains("popup_opened") ||
            evt.target.classList.contains("popup__close") ) {
                    this.close();
            }
        }
        

}