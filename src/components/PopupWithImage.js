import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor ( imgSelector, titleSelector ,popupSelector ) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector(imgSelector);
        this._popupTitle = this._popup.querySelector(titleSelector);

    }

    open(src, title ) {
        this._src   = src;
        this._title = title;
        this._popupImg.src =  this._src;
        this._popupImg.alt =  this._title;
        this._popupTitle.textContent = `Photo of ${this._title}`;
        super.open();
    }
}