import * as utils from "./utils.js";

export default class Card {
    constructor(data, cardSelector) {
      this._text          = data.name;
      this._img            = data.link;
      this._cardSelector  = cardSelector;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector(".gallery__item")
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
  
      this._element.querySelector(".gallery__item-img").src = this._img;
      this._element.querySelector(".gallery__item-name").textContent = this._text;
      this._setEventListeners();
      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector(".gallery__item-like-btn").addEventListener("click", () => {
        this._handleLikeBtn();
      });
      this._element.querySelector(".gallery__item-trash-btn").addEventListener("click", () => {
        this._handleDeleteGalleryCardItem();
      });
      this._element.querySelector(".gallery__item-img").addEventListener("click",  () => {
        this._handleOpenImgPopup();
      });
    }
  
    _handleLikeBtn() {
      this._element.querySelector(".gallery__item-like-btn").classList.toggle('gallery__item-like-btn_active');
    }
  
    _handleDeleteGalleryCardItem() {
      this._element.querySelector(".gallery__item-trash-btn").closest('.gallery__item').remove();
    }
  
    _handleOpenImgPopup(){
      const itemImg           = this._element.querySelector(".gallery__item-img");
      const popupImg          = document.querySelector(".popup_type_img");
      const popupImgEl        = popupImg.querySelector(".popup__img");
      const popupImgTitleEl   = popupImg.querySelector(".popup__img-title");

      popupImgTitleEl.textContent = itemImg.alt;
      popupImgEl.src = itemImg.src;
      popupImgEl.alt = itemImg.alt;
      utils.openPopup(popupImg);
    }
  }