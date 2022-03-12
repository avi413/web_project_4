import Popup from "./Popup.js";

export default class PopupWithConfirmation  extends Popup {
        constructor ( popupSelector, handleConfirm ) {
            super(popupSelector);
            this._handleConfirm     =   handleConfirm;
            this._formElemet        =   this._popup.querySelector(".popup__form");
        }


        setEventListeners() {
            /**
             * It modifies the setEventListeners() parent method. 
             *  has to add the submit event handler to the form and the click 
             * event listener to the close icon.
             */
            super.setEventListeners();
            this._formElemet.addEventListener("submit",  this._handleSubmit); 
        }

        removeEventListeners() {
            super.removeEventListeners()
            this._formElemet.removeEventListener("submit", this._handleSubmit); 
        }
        
        _handleSubmit =(evt) =>{
            evt.preventDefault(); 
            this._handleConfirm(this._cardEl);
        }

        open(cardEl) {
            super.open();
            this._cardEl = cardEl;
        }
}