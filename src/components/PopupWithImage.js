import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor ( {src ,title } ,popupSelector ) {
        super(popupSelector);
        this._src   = src;
        this._title = title;
    }

    open() {
        super.open();
        this._popupImg = this._popup.querySelector(".popup__img");
        this._popupTitle = this._popup.querySelector(".popup__img-title");

        this._popupImg.src =  this._src;
        this._popupImg.alt =  this._title;
        this._popupTitle.textContent = `Photo of ${this._title}`;
    }
}