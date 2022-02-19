import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor ({src ,title } ,popupSelector ) {
        super(popupSelector);
        this._src = src;
        this._title = title;
    }

    open() {
        super.open();
        this._popup.querySelector(".popup__img").src =  this._src;
        this._popup.querySelector(".popup__img").alt =  this._title;
        this._popup.querySelector(".popup__img-title").textContent = `Photo of ${this._title}`;
    }
}