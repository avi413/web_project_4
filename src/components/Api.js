export default class Api {
    constructor(options) {
      this._options = options;

    }
  
    _call(action, method, data) {
      return fetch(this._options.baseUrl + action, {
        method: method,
        headers:  this._options.headers,
        body: JSON.stringify(data),
      })
      .then(res => {
        if(res.ok) {
          return  res.json();
        }
        return Promise.reject(res.status);
      });
    }
    getInitialCards = () => {
      return this._call("/cards",'GET');
    }
  
    getUserData = () => {
      return this._call("/users/me",'GET');
    }
    
    editProfile({name, about}) {
      return this._call("/users/me",'PATCH',{
        name: name,
        about: about
      });
    }

    createNewCard (link, name) {
      return this._call("/cards",'POST',{
        name: name,
        link: link
      });
    }
    
    addLike = (cardId) => {
      return this._call(`/cards/likes/${cardId}`,'PUT');
    }

    deleteLike = (cardId) => {
      return this._call(`/cards/likes/${cardId}`,'DELETE');
    }

    deleteCard = (cardId) => {
      return this._call(`/cards/${cardId}`,'DELETE');
    }

    editProfileAvatar(url){
      return this._call("/users/me/avatar ",'PATCH',{
        avatar : url
      });
    }

    init() {
      return Promise.all([this.getUserData(), this.getInitialCards()]);
    }

  }
  
