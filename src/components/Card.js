export default class Card {
    constructor( data, cardSelector, handleCardClick, handleTrashClick, handleLike, api) {
      this._text              = data.name;
      this._img              = data.link;
      this._id                = data._id;
      this._likes             = data.likes;
      this._Cardowner         = data.owner;
      this._cardSelector      = cardSelector;
      this._handleCardClick   = handleCardClick;
      this._handleTrashClick  = handleTrashClick;
      this._addLike           = api.addLike;
      this._deleteLike        = api.deleteLike;
      this._deleteCard        = api.deleteCard;
      this._handleLike        = handleLike;
      this._element           = document.querySelector(this._cardSelector).content.querySelector(".gallery__item").cloneNode(true);
      this._itemImgEl         = this._element.querySelector(".gallery__item-img");
      this._itemNameEl        = this._element.querySelector(".gallery__item-name");
      this.profileEl          = document.querySelector(".profile__name");
      this._itemTrashBtn      = this._element.querySelector(".gallery__item-trash-btn");
      this._itemLikeBtn       = this._element.querySelector(".gallery__like-btn");
      this._gallerylikeCount  = this._element.querySelector(".gllery__like-count");
    }

    getId() {
      return this._id;
    }
    deleteCard() {
      this._element.remove();
      this._element = null;
    }


    generateCard() {
      this._itemImgEl.src = this._img;
      this._itemNameEl.alt = this._text;
      this._itemNameEl.textContent = this._text;
 
      this._element.id = this._id;
      this._initLike(this.profileEl.id);
      this. _deleteIconVisibility(this.profileEl.id);
      this._setEventListeners();
      return this._element;
    }
  
    _deleteIconVisibility(userId){
      if(userId !=  this._Cardowner._id) {
        this._itemTrashBtn.style.visibility = "hidden";
      }
    }

    _initLike(userId){
      if(this._userExists(userId)) {
        this._itemLikeBtn.classList.add('gallery__like-btn_active'); 
      }
      if(typeof this._likes !== "undefined"){
        this._gallerylikeCount.textContent = this._likes.length;
      }
      else {
        this._gallerylikeCount.textContent  = 0;
      }
    }

    _userExists(id) {
      if(typeof this._likes !== "undefined"){
        return this._likes.some(function(user) {
          return user._id === id;
        });
      }
      return false;
    }

    _setEventListeners() {
      this._itemLikeBtn.addEventListener("click",() =>  {this._handleLike(this)});
      this._itemTrashBtn.addEventListener("click",() =>{this._handleTrashClick(this)});
      this._itemImgEl.addEventListener("click", this._handleCardClick);
    }
    /**
     * Decide whether to delete or add a Like depending on an existing situation
     */
    updateLikes() {
      if(this._itemLikeBtn.classList.contains('gallery__like-btn_active')){
        return this._deleteLike(this._element.id);
      }
      else {
        return this._addLike(this._element.id);
      }
    }

    /**
     * Dealing with the success of updating Like on the server (.then)
     */
    setLikes(data) {
      this._gallerylikeCount.textContent = data.likes.length;
      this._itemLikeBtn.classList.toggle('gallery__like-btn_active');
    }
  }