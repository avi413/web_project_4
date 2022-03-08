export default class Card {
    constructor( data, cardSelector, handleCardClick, api) {
      this._text            = data.name;
      this._img             = data.link;
      this._id              = data._id;
      this._likes           = data.likes;
      this._cardSelector    = cardSelector;
      this._handleCardClick = handleCardClick;
      this._addLike         = api.addLike;
      this._deleteLike      = api.deleteLike;
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
      const galleryItemImg = this._element.querySelector(".gallery__item-img");
      const galleryItemName = this._element.querySelector(".gallery__item-name");
      const myId = document.querySelector(".profile__name").id;

      galleryItemImg.src = this._img;
      galleryItemImg.alt = this._text;
      galleryItemName.textContent = this._text;
 
      this._element.id = this._id;
      this._initLike(myId);

      this._setEventListeners();
      return this._element;
    }
  
    _initLike(userId){
      if(this._userExists(userId)) {
        this._element.querySelector(".gallery__like-btn").classList.add('gallery__like-btn_active');
      }
      const gallerylikeCount = this._element.querySelector(".gllery__like-count");
      gallerylikeCount.textContent = this._likes.length;
    }

    _userExists(id) {
      return this._likes.some(function(user) {
        return user._id === id;
      }); 
    }

    _setEventListeners() {
      this._element.querySelector(".gallery__like-btn").addEventListener("click",  this._handleLikeBtn);
      this._element.querySelector(".gallery__item-trash-btn").addEventListener("click",this._handleDeleteGalleryCardItem);
      this._element.querySelector(".gallery__item-img").addEventListener("click", this._handleCardClick);
    }
  
    _handleLikeBtn = () => {
      const likeBtn = this._element.querySelector(".gallery__like-btn");
      const gallerylikeCount = this._element.querySelector(".gllery__like-count");
      if(likeBtn.classList.contains('gallery__like-btn_active')){
        this._deleteLike(this._element.id);
        gallerylikeCount.textContent --;
      }
      else {
        this._addLike(this._element.id);
        gallerylikeCount.textContent ++;
      }
      this._element.querySelector(".gallery__like-btn").classList.toggle('gallery__like-btn_active');

      
      
    }
  
    _handleDeleteGalleryCardItem = () => {
      this._element.remove();
      this._element = null;
      
    }
  }