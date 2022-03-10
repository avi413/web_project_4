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
            this._formElemet.removeEventListener("submit", this._handleSubmit); 
        }
        
        _handleSubmit =(evt) =>{
            evt.preventDefault(); 
            this._handleConfirm(this._popup.id, this._cardEl);
            this.close();
        }

        open(id, cardEl) {
            super.open();
            this._popup.id =id;
            this._cardEl = cardEl
        }

        close() {
            /**
             * It modifies the close() parent method 
             * in order to reset the form once the popup is closed.
             */
            super.close();
            this._formElemet.reset();
            this.removeEventListeners();
        }

}