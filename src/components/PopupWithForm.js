import Popup from "./Popup.js";

export default class PopupWithForm  extends Popup {
        constructor (popupSelector, formSubmit) {
            super(popupSelector);
            this._formSubmit    =   formSubmit;
            this._formElemet    =   this._popup.querySelector(".popup__form");
        }

        _getInputValues() {
            const inputValues = {};
            const inputsArr = this._formElemet.querySelectorAll(".popup__input");
            inputsArr.forEach(input => {
                inputValues[input.name] = [input.value];
            })

            return inputValues;
        }

        setEventListeners() {
            /**
             * It modifies the setEventListeners() parent method. 
             * The setEventListeners() method of the PopupWithForm class
             *  has to add the submit event handler to the form and the click 
             * event listener to the close icon.
             */
            super.setEventListeners();
            this._formElemet.addEventListener("submit", this._handleProfileFormSubmit); 
        }

        _handleProfileFormSubmit =(evt) =>{
            evt.preventDefault(); 
            const inputs =  this._getInputValues();
            this._formSubmit(inputs);
            this.close();
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