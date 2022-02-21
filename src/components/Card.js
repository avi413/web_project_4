export default class Card {
    constructor( data, cardSelector, handleCardClick ) {
      this._text            = data.name;
      this._img             = data.link;
      this._cardSelector    = cardSelector;
      this._handleCardClick = handleCardClick;
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
      this._galleryItemImg = this._element.querySelector(".gallery__item-img");
      this._galleryItemName = this._element.querySelector(".gallery__item-name");

      this._galleryItemImg.src = this._img;
      this._galleryItemImg.alt = this._text;
      this._galleryItemName.textContent = this._text;

      this._setEventListeners();
      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector(".gallery__item-like-btn").addEventListener("click",  this._handleLikeBtn);
      this._element.querySelector(".gallery__item-trash-btn").addEventListener("click",this._handleDeleteGalleryCardItem);
      this._element.querySelector(".gallery__item-img").addEventListener("click", this._handleCardClick);
    }
  
    _handleLikeBtn = () => {
      this._element.querySelector(".gallery__item-like-btn").classList.toggle('gallery__item-like-btn_active');
    }
  
    _handleDeleteGalleryCardItem = () => {
      this._element.remove();
      this._element = null;
      
    }
  }