import Popup from "./Popup.js";
export default class PopupWithForm  extends Popup {
        constructor ( popupSelector, handleFormSubmit ) {
            super(popupSelector);
            this._handleFormSubmit  = handleFormSubmit;
            this._formElemet        = this._popup.querySelector(".popup__form");
            this._inputsArr         = this._formElemet.querySelectorAll(".popup__input");
            this._inputValues       = {};
        }

        _getInputValues() {
            this._inputsArr.forEach(input => {
                this._inputValues [input.name] = [input.value];
            })
            return this._inputValues ;
        }

        setEventListeners() {
            /**
             * It modifies the setEventListeners() parent method. 
             * The setEventListeners() method of the PopupWithForm class
             *  has to add the submit event handler to the form and the click 
             * event listener to the close icon.
             */
            super.setEventListeners();
            this._formElemet.addEventListener("submit", this._handleSubmit); 
        }

        removeEventListeners() {
            super.removeEventListeners()
            this._formElemet.removeEventListener("submit", this._handleSubmit); 
        }
        
        _handleSubmit =(evt) =>{
            evt.preventDefault(); 
            this._handleFormSubmit(this._getInputValues());
        }

        /**
         * change button text to ..saving until process ends
         */
        renderLoading(isLoading, btnSelector) {
            const btnEl = document.querySelector(btnSelector);
            if(isLoading) {
            btnEl.textContent = "...Saving"; 
            }
            else {
            btnEl.textContent = "Save"; 
            }
        }

        close() {
            /**
             * It modifies the close() parent method 
             * in order to reset the form once the popup is closed.
             */
            super.close();
            this._formElemet.reset();
        }

}