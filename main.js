!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class t{constructor(t,n,s){e(this,"_handleLikeBtn",(()=>{this._element.querySelector(".gallery__item-like-btn").classList.toggle("gallery__item-like-btn_active")})),e(this,"_handleDeleteGalleryCardItem",(()=>{this._element.remove(),this._element=null})),this._text=t.name,this._img=t.link,this._cardSelector=n,this._handleCardClick=s}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__item").cloneNode(!0)}generateCard(){this._element=this._getTemplate();const e=this._element.querySelector(".gallery__item-img"),t=this._element.querySelector(".gallery__item-name");return e.src=this._img,e.alt=this._text,t.textContent=this._text,this._setEventListeners(),this._element}_setEventListeners(){this._element.querySelector(".gallery__item-like-btn").addEventListener("click",this._handleLikeBtn),this._element.querySelector(".gallery__item-trash-btn").addEventListener("click",this._handleDeleteGalleryCardItem),this._element.querySelector(".gallery__item-img").addEventListener("click",this._handleCardClick)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s{constructor(e){n(this,"_handleEscClose",(e=>{"Escape"===e.key&&document.querySelector(".popup_opened")&&this.close()})),n(this,"_handleClickClosePopup",(e=>{(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()})),this._popup=document.querySelector(e)}close(){this._popup.classList.remove("popup_opened"),this.removeEventListeners()}open(){this._popup.classList.add("popup_opened"),this.setEventListeners()}setEventListeners(){document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleClickClosePopup)}removeEventListeners(){document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleClickClosePopup)}}class i extends s{constructor(e,t){var n,s;super(e),s=e=>{e.preventDefault();const t=this._getInputValues();this._handleFormSubmit(t),this.close()},(n="_handleSubmit")in this?Object.defineProperty(this,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):this[n]=s,this._handleFormSubmit=t,this._formElemet=this._popup.querySelector(".popup__form")}_getInputValues(){const e={};return this._formElemet.querySelectorAll(".popup__input").forEach((t=>{e[t.name]=[t.value]})),e}setEventListeners(){super.setEventListeners(),this._formElemet.addEventListener("submit",this._handleSubmit)}removeEventListeners(){this._formElemet.removeEventListener("submit",this._handleSubmit)}close(){super.close(),this._formElemet.reset(),this.removeEventListeners()}}class r extends s{constructor(e,t){let{src:n,title:s}=e;super(t),this._src=n,this._title=s}open(){super.open(),this._popupImg=this._popup.querySelector(".popup__img"),this._popupTitle=this._popup.querySelector(".popup__img-title"),this._popupImg.src=this._src,this._popupImg.alt=this._title,this._popupTitle.textContent="Photo of ".concat(this._title)}}class o{constructor(e,t){this._formSelector=e.formSelector,this._formInputsFieldSet=e.formInputsFieldSet,this._inputSelector=e.inputSelector,this._submitBtnSelector=e.submitBtnSelector,this._inactiveBtnClass=e.inactiveBtnClass,this._inputErrClass=e.inputErrClass,this._inputErrActiveClass=e.inputErrActiveClass,this._formEl=document.querySelector(t)}_showInputErr(e){const t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrClass),t.textContent=e.validationMessage,t.classList.add(this._inputErrActiveClass)}_hideInputError(e){const t=this._formEl.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrClass),t.classList.remove(this._inputErrActiveClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputErr(e)}_hasInvalidInput(e){return e.some((e=>!e.validity.valid))}toggleButtonState(){const e=Array.from(this._formEl.querySelectorAll(this._inputSelector)),t=this._formEl.querySelector(this._submitBtnSelector);this._hasInvalidInput(e)?(t.classList.add(this._inactiveBtnClass),t.disabled=!0):(t.classList.remove(this._inactiveBtnClass),t.disabled=!1)}_setEventListeners(){const e=Array.from(this._formEl.querySelectorAll(this._inputSelector)),t=this._formEl.querySelector(this._submitBtnSelector);this.toggleButtonState(e,t),e.forEach((n=>{n.addEventListener("input",(()=>{this._checkInputValidity(n),this.toggleButtonState(e,t)}))}))}enableValidation(){this._setEventListeners(),this._formEl.addEventListener("submit",(e=>e.preventDefault()))}}const l={formSelector:".popup__form",formInputsFieldSet:".popup__form-set",inputSelector:".popup__input",submitBtnSelector:".popup__submit-btn",inactiveBtnClass:"button_inactive",inputErrClass:"popup__input-text_type_error",inputErrActiveClass:"popup__input-text-error_active"},a=document.forms.profileform,c=a.elements.profileName,p=a.elements.profileAboutMe,u=document.forms.placeform,_=document.querySelector("button.profile__edit-btn"),m=document.querySelector("button.profile__add-btn"),d=(document.querySelector(".profile__name"),document.querySelector(".profile__about-me"),document.querySelector(".gallery"),new class{constructor(e,t){let{data:n,renderer:s}=e;this._items=n,this._renderer=s,this._container=document.querySelector(t)}addItem(e){this._container.append(e)}renderer(){this._items.forEach((e=>{this._renderer(e)}))}}({data:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:h},".gallery__list"));function h(e){const n=new t(e,"#gallery-item-template",(()=>{new r({src:e.link,title:e.name},".popup_type_img").open()})).generateCard();d.addItem(n)}const y=new i(".popup_type_new-card",(function(e){h({link:e.placeImageLink,name:e.placeName}),u.reset(),y.close(),E.toggleButtonState()}));m.addEventListener("click",(()=>y.open()));const v=new class{constructor(e,t){this._nameElement=document.querySelector(e),this._jobElement=document.querySelector(t)}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e){let{name:t,job:n}=e;this._nameElement.textContent=t,this._jobElement.textContent=n}}(".profile__name",".profile__about-me"),f=new i(".popup_type_profile",(function(e){v.setUserInfo({name:e.profileName,job:e.profileAboutMe}),b.toggleButtonState()}));_.addEventListener("click",(()=>{const{name:e,job:t}=v.getUserInfo();c.value=e,p.value=t,f.open()}));const E=new o(l,".popup__form_type_new-card");E.enableValidation();const b=new o(l,".popup__form_type_profile");b.enableValidation(),d.renderer()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFHbkJpQixFQUFtQnRGLGlCQUFpQixTQUFTLElBQU1tRyxFQUFhdkYsU0FLaEUsTUFBTTRGLEVBQVksSUU3REgsTUFPWG5JLFlBQWNvSSxFQUFjQyxHQUN4QmpJLEtBQUtrSSxhQUFlckgsU0FBU1gsY0FBYzhILEdBQzNDaEksS0FBS21JLFlBQWN0SCxTQUFTWCxjQUFjK0gsR0FJOUNHLGNBTUksTUFBTyxDQUNIN0gsS0FBTVAsS0FBS2tJLGFBQWE3RyxZQUN4QmdILElBQUtySSxLQUFLbUksWUFBWTlHLGFBSTlCaUgsWUFBWSxHQUFZLElBQVosS0FBQy9ILEVBQUQsSUFBTzhILEdBQUssRUFJcEJySSxLQUFLa0ksYUFBYTdHLFlBQWNkLEVBQ2hDUCxLQUFLbUksWUFBWTlHLFlBQWNnSCxJRitCUixpQkFBaUIsc0JBRTFDRSxFQUFlLElBQUk5RixFQUN2Qix1QkFJRixTQUFrQ0ksR0FDaENrRixFQUFTTyxZQUFZLENBQUMvSCxLQUFNc0MsRUFBTzBELFlBQWE4QixJQUFLeEYsRUFBTzRELGlCQUM1RCtCLEVBQWlCNUMsdUJBR25CZ0IsRUFBZXJGLGlCQUFpQixTQUFTLEtBQ3ZDLE1BQU0sS0FBQ2hCLEVBQUQsSUFBTzhILEdBQVFOLEVBQVNLLGNBQzlCUCxFQUFBQSxNQUE2QnRILEVBQzdCc0gsRUFBQUEsTUFBZ0NRLEVBQ2hDRSxFQUFhcEcsVUFPZixNQUFNMkYsRUFBbUIsSUFBSWhFLEVBQWMrRCxFQUFpQiw4QkFDNURDLEVBQWlCN0IsbUJBRWpCLE1BQU11QyxFQUFtQixJQUFJMUUsRUFBYytELEVBQWlCLDZCQUM1RFcsRUFBaUJ2QyxtQkFLakJhLEVBQVNFLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoIGRhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrICkge1xyXG4gICAgICB0aGlzLl90ZXh0ICAgICAgICAgICAgPSBkYXRhLm5hbWU7XHJcbiAgICAgIHRoaXMuX2ltZyAgICAgICAgICAgICA9IGRhdGEubGluaztcclxuICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yICAgID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgICAgLmNvbnRlbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pdGVtXCIpXHJcbiAgICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICBcclxuICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgY29uc3QgZ2FsbGVyeUl0ZW1JbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9faXRlbS1pbWdcIik7XHJcbiAgICAgIGNvbnN0IGdhbGxlcnlJdGVtTmFtZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pdGVtLW5hbWVcIik7XHJcblxyXG4gICAgICBnYWxsZXJ5SXRlbUltZy5zcmMgPSB0aGlzLl9pbWc7XHJcbiAgICAgIGdhbGxlcnlJdGVtSW1nLmFsdCA9IHRoaXMuX3RleHQ7XHJcbiAgICAgIGdhbGxlcnlJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMuX3RleHQ7XHJcblxyXG4gICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuICBcclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2l0ZW0tbGlrZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICB0aGlzLl9oYW5kbGVMaWtlQnRuKTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2l0ZW0tdHJhc2gtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX2hhbmRsZURlbGV0ZUdhbGxlcnlDYXJkSXRlbSk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pdGVtLWltZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2FyZENsaWNrKTtcclxuICAgIH1cclxuICBcclxuICAgIF9oYW5kbGVMaWtlQnRuID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9faXRlbS1saWtlLWJ0blwiKS5jbGFzc0xpc3QudG9nZ2xlKCdnYWxsZXJ5X19pdGVtLWxpa2UtYnRuX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX2hhbmRsZURlbGV0ZUdhbGxlcnlDYXJkSXRlbSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoIHBvcHVwU2VsZWN0b3IgKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcclxuICAgICAgICAvKiogcG9wdXBzIGNsb3NlIGNsaWNrIHJlbW92ZSBldmVudHMgKi9cclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gICAgICAgIC8qKiBwb3B1cHMgb3BlbiBldmVudHMgKi9cclxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT57XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX29wZW5lZFwiKTtcclxuICAgICAgICAgICAgaWYocG9wdXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVDbGlja0Nsb3NlUG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAgdGhpcy5faGFuZGxlQ2xpY2tDbG9zZVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ2xpY2tDbG9zZVBvcHVwID0gKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9vcGVuZWRcIikgfHxcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSAgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKCBwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0ICkge1xyXG4gICAgICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCAgPSAgIGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZXQgICAgICAgID0gICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dHNBcnIgPSB0aGlzLl9mb3JtRWxlbWV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xyXG4gICAgICAgICAgICBpbnB1dHNBcnIuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IFtpbnB1dC52YWx1ZV07XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEl0IG1vZGlmaWVzIHRoZSBzZXRFdmVudExpc3RlbmVycygpIHBhcmVudCBtZXRob2QuIFxyXG4gICAgICAgICAgICAgKiBUaGUgc2V0RXZlbnRMaXN0ZW5lcnMoKSBtZXRob2Qgb2YgdGhlIFBvcHVwV2l0aEZvcm0gY2xhc3NcclxuICAgICAgICAgICAgICogIGhhcyB0byBhZGQgdGhlIHN1Ym1pdCBldmVudCBoYW5kbGVyIHRvIHRoZSBmb3JtIGFuZCB0aGUgY2xpY2sgXHJcbiAgICAgICAgICAgICAqIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBpY29uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybUVsZW1ldC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZVN1Ym1pdCk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgX2hhbmRsZVN1Ym1pdCA9KGV2dCkgPT57XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gIHRoaXMuX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQoaW5wdXRzKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEl0IG1vZGlmaWVzIHRoZSBjbG9zZSgpIHBhcmVudCBtZXRob2QgXHJcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc2V0IHRoZSBmb3JtIG9uY2UgdGhlIHBvcHVwIGlzIGNsb3NlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1FbGVtZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3RvciAoIHtzcmMgLHRpdGxlIH0gLHBvcHVwU2VsZWN0b3IgKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fc3JjICAgPSBzcmM7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEltZyA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltZ1wiKTtcclxuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1nLXRpdGxlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cEltZy5zcmMgPSAgdGhpcy5fc3JjO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwSW1nLmFsdCA9ICB0aGlzLl90aXRsZTtcclxuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlLnRleHRDb250ZW50ID0gYFBob3RvIG9mICR7dGhpcy5fdGl0bGV9YDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoIGNvbmZpZywgZm9ybUVsICl7XHJcbiAgICAgIHRoaXMuX2Zvcm1TZWxlY3RvciAgICAgICAgID0gY29uZmlnLmZvcm1TZWxlY3RvcjtcclxuICAgICAgdGhpcy5fZm9ybUlucHV0c0ZpZWxkU2V0ICAgPSBjb25maWcuZm9ybUlucHV0c0ZpZWxkU2V0O1xyXG4gICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yICAgICAgICA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdG5TZWxlY3RvciAgICA9IGNvbmZpZy5zdWJtaXRCdG5TZWxlY3RvcjtcclxuICAgICAgdGhpcy5faW5hY3RpdmVCdG5DbGFzcyAgICAgPSBjb25maWcuaW5hY3RpdmVCdG5DbGFzcztcclxuICAgICAgdGhpcy5faW5wdXRFcnJDbGFzcyAgICAgICAgPSBjb25maWcuaW5wdXRFcnJDbGFzcztcclxuICAgICAgdGhpcy5faW5wdXRFcnJBY3RpdmVDbGFzcyAgPSBjb25maWcuaW5wdXRFcnJBY3RpdmVDbGFzcztcclxuICAgICAgdGhpcy5fZm9ybUVsICAgICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1FbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dJbnB1dEVyciAoaW5wdXRFbCkge1xyXG4gICAgICBjb25zdCBlcnJFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgICBcclxuICAgICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyQ2xhc3MpO1xyXG4gICAgICBlcnJFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgIGVyckVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJBY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVJbnB1dEVycm9yIChpbnB1dEVsKSB7XHJcbiAgICAgIGNvbnN0IGVyckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWwuaWR9LWVycm9yYCk7XHJcblxyXG4gICAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJDbGFzcyk7XHJcbiAgICAgIGVyckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJBY3RpdmVDbGFzcyk7XHJcbiAgICAgIGVyckVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5IChpbnB1dEVsKSB7XHJcbiAgICAgIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycihpbnB1dEVsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYXNJbnZhbGlkSW5wdXQgKGlucHV0THN0KSB7XHJcbiAgICAgIHJldHVybiBpbnB1dExzdC5zb21lKChpbnB1dEVsKSA9PiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQnV0dG9uU3RhdGUgKCkge1xyXG4gICAgICBjb25zdCBpbnB1dExzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICBjb25zdCBidG5FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ0blNlbGVjdG9yKTtcclxuICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dExzdCkpIHtcclxuICAgICAgICBidG5FbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnRuQ2xhc3MpO1xyXG4gICAgICAgIGJ0bkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidG5FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnRuQ2xhc3MpO1xyXG4gICAgICAgIGJ0bkVsLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICBjb25zdCBpbnB1dExzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICBjb25zdCBidG5FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ0blNlbGVjdG9yKTtcclxuICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZShpbnB1dExzdCwgYnRuRWwpO1xyXG4gICAgICBpbnB1dExzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4geyAgIFxyXG4gICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZShpbnB1dExzdCwgYnRuRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVWYWxpZGF0aW9uICgpIHtcclxuICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4gZXZ0LnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgfVxyXG5cclxuICB9IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCJcclxuICAgIH1cclxuICBdOyBcclxuICBleHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gICAgZm9ybUlucHV0c0ZpZWxkU2V0OiBcIi5wb3B1cF9fZm9ybS1zZXRcIixcclxuICAgIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gICAgc3VibWl0QnRuU2VsZWN0b3I6IFwiLnBvcHVwX19zdWJtaXQtYnRuXCIsXHJcbiAgICBpbmFjdGl2ZUJ0bkNsYXNzOiBcImJ1dHRvbl9pbmFjdGl2ZVwiLFxyXG4gICAgaW5wdXRFcnJDbGFzczogXCJwb3B1cF9faW5wdXQtdGV4dF90eXBlX2Vycm9yXCIsXHJcbiAgICBpbnB1dEVyckFjdGl2ZUNsYXNzOiBcInBvcHVwX19pbnB1dC10ZXh0LWVycm9yX2FjdGl2ZVwiXHJcbiAgfVxyXG5cclxuXHJcbi8qKiBwcm9maWxlIHBvcHVwIGVsZW1lbnRzICovXHJcbmNvbnN0IHByb2ZpbGVGb3JtICAgICAgICAgICAgICAgICAgPSBkb2N1bWVudC5mb3Jtcy5wcm9maWxlZm9ybTtcclxuZXhwb3J0IGNvbnN0IGlucHV0TmFtZSAgICAgICAgICAgICA9IHByb2ZpbGVGb3JtLmVsZW1lbnRzLnByb2ZpbGVOYW1lO1xyXG5leHBvcnQgY29uc3QgaW5wdXRBYm91dE1lICAgICAgICAgID0gcHJvZmlsZUZvcm0uZWxlbWVudHMucHJvZmlsZUFib3V0TWU7XHJcbmV4cG9ydCBjb25zdCBwbGFjZUZvcm0gICAgICAgICAgICAgPSBkb2N1bWVudC5mb3Jtcy5wbGFjZWZvcm07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FsbGVyeUxpc3RTZWxlY3RvciAgPSBcIi5nYWxsZXJ5X19saXN0XCI7XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIlxyXG5cclxuLyoqIG1haW4gYnV0dG9ucyAqL1xyXG5jb25zdCBwcm9maWxlRWRpdEJ0biAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByb2ZpbGVfX2VkaXQtYnRuXCIpO1xyXG5jb25zdCBvcGVOZXdDYXJkUG9wdXBCdG4gICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByb2ZpbGVfX2FkZC1idG5cIik7XHJcblxyXG4vKiogcHJvZmlsZSBkYXRhIGVsZW1lbnRzICovXHJcbmNvbnN0IHByb2ZpbGVOYW1lICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcclxuY29uc3QgcHJvZmlsZUFib3V0TWUgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dC1tZVwiKTtcclxuXHJcbi8qKiBnYWxsZXJ5IGNvbnRhaW5lciAqL1xyXG5jb25zdCBjb250YWluZXIgICAgICAgICAgICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeVwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlIGEgZ2FsbGVyeSBDYXJkcyBmcm9tIGluaXRpYWxDYXJkcyBpbml0aWFsIGNvbnN0XHJcbiAqL1xyXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKHtcclxuICBkYXRhOiBjb25zdGFudHMuaW5pdGlhbENhcmRzLFxyXG4gIHJlbmRlcmVyOiBhZGRHYWxsZXJ5Q2FyZEl0ZW1cclxufSwgY29uc3RhbnRzLmdhbGxlcnlMaXN0U2VsZWN0b3IpO1xyXG5cclxuZnVuY3Rpb24gIGFkZEdhbGxlcnlDYXJkSXRlbSAoaXRlbSkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpdGVtLCBcclxuICAgIFwiI2dhbGxlcnktaXRlbS10ZW1wbGF0ZVwiLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7c3JjIDogaXRlbS5saW5rICwgdGl0bGU6IGl0ZW0ubmFtZX0sIFwiLnBvcHVwX3R5cGVfaW1nXCIpO1xyXG4gICAgICBwb3B1cC5vcGVuKCk7XHJcbiAgICB9KTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbn1cclxuIFxyXG4vKipcclxuICogYWRkIHBvcHVwIHdpdGggZm9ybSB0byBhZGQgbmV3IGNhcmQgaXRlbSB0byBnYWxsZXJ5XHJcbiAqL1xyXG5jb25zdCBuZXdDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSAoXHJcbiAgXCIucG9wdXBfdHlwZV9uZXctY2FyZFwiLFxyXG4gIGhhbmRsZUNyZWF0ZU5ld0NhcmRcclxuKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZU5ld0NhcmQgKGlucHV0cykge1xyXG4gIGFkZEdhbGxlcnlDYXJkSXRlbSh7bGluazogaW5wdXRzLnBsYWNlSW1hZ2VMaW5rLCBuYW1lOiBpbnB1dHMucGxhY2VOYW1lfSk7XHJcbiAgY29uc3RhbnRzLnBsYWNlRm9ybS5yZXNldCgpO1xyXG4gIG5ld0NhcmRQb3B1cC5jbG9zZSgpO1xyXG4gIG5ld0NhcmRWYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxufVxyXG5cclxub3BlTmV3Q2FyZFBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdDYXJkUG9wdXAub3BlbigpKTtcclxuXHJcbi8qKlxyXG4gKiBhZGQgcG9wdXAgd2l0aCBmb3JtIHRvIGVkaXQgbWFpbiB1c2VyIGluZm9cclxuICovXHJcbmNvbnN0IHVzZXJJbmZvICA9IG5ldyBVc2VySW5mbyhcIi5wcm9maWxlX19uYW1lXCIsXCIucHJvZmlsZV9fYWJvdXQtbWVcIik7XHJcblxyXG5jb25zdCBwcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSAoXHJcbiAgXCIucG9wdXBfdHlwZV9wcm9maWxlXCIsXHJcbiAgIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0XHJcbik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCAoaW5wdXRzKSB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oe25hbWU6IGlucHV0cy5wcm9maWxlTmFtZSwgam9iOiBpbnB1dHMucHJvZmlsZUFib3V0TWV9KVxyXG4gIHByb2ZpbGVWYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxufVxyXG5cclxucHJvZmlsZUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCB7bmFtZSwgam9iIH0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIGNvbnN0YW50cy5pbnB1dE5hbWUudmFsdWUgID0gbmFtZTtcclxuICBjb25zdGFudHMuaW5wdXRBYm91dE1lLnZhbHVlICA9IGpvYjtcclxuICBwcm9maWxlUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogYWRkIGZvcm0gdmFsaWRhdGlvbiBmb3IgYWxsIGZvcm1zXHJcbiAqL1xyXG5jb25zdCBuZXdDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uc3RhbnRzLmNvbmZpZyxcIi5wb3B1cF9fZm9ybV90eXBlX25ldy1jYXJkXCIpO1xyXG5uZXdDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25zdGFudHMuY29uZmlnLFwiLnBvcHVwX19mb3JtX3R5cGVfcHJvZmlsZVwiKTtcclxucHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG4vKipcclxuICogcmVuZGVyIHRoZSBnZW5lcmF0ZWQgZ2FsbGVyeSBDYXJkcyBcclxuICovXHJcbmNhcmRMaXN0LnJlbmRlcmVyKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlckRhdGEoKSB7XHJcbiAgZmV0Y2goXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLTEyL3VzZXJzL21lXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogXCI5YjYyMWYwZi01ZGZlLTQzZjEtOTVmZC1lOWNjMTg4YmNjMzVcIlxyXG4gICAgfVxyXG4gIH0pXHJcbi50aGVuICgoZGF0YSkgPT4ge1xyXG5jb25zb2xlLmxvZyhkYXRhKTtcclxufSlcclxuLmNhdGNoICgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG59KVxyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvciggeyBkYXRhLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3RvciApIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyAgICAgICA9IGRhdGEsXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgICAgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZW5kZXJlcigpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBVc2VySW5mbyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIFxyXG4gICAgICogaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgb24gdGhlIHBhZ2UuIFRoaXMgY2xhc3Mgc2hvdWxkOlxyXG4gICAgICogLVRha2UgYW4gb2JqZWN0IHdpdGggdGhlIHNlbGVjdG9ycyBvZiB0d28gZWxlbWVudHMgaW50byB0aGUgY29uc3RydWN0b3I6IFxyXG4gICAgICogb25lIGNvbnRhaW5pbmcgdGhlIHVzZXIncyBuYW1lLCBhbmQgYW5vdGhlciBjb250YWluaW5nIHRoZSB1c2VyJ3Mgam9iLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoIG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fam9iRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyLiBcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGhhbmR5IGZvciBcclxuICAgICAgICAgKiBjYXNlcyB3aGVuIGl0J3MgbmVjZXNzYXJ5IHRvIGRpc3BsYXkgdGhlIHVzZXIgZGF0YSBpbiB0aGUgb3BlbiBmb3JtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBqb2I6IHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oe25hbWUsIGpvYn0pe1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRha2VzIG5ldyB1c2VyIGRhdGEgYW5kIGFkZHMgaXQgb24gdGhlIHBhZ2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsInRoaXMiLCJfZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJfdGV4dCIsIm5hbWUiLCJfaW1nIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2dldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2VuZXJhdGVDYXJkIiwiZ2FsbGVyeUl0ZW1JbWciLCJnYWxsZXJ5SXRlbU5hbWUiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZUJ0biIsIl9oYW5kbGVEZWxldGVHYWxsZXJ5Q2FyZEl0ZW0iLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJldnQiLCJrZXkiLCJjbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwiX3BvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwiYWRkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJfaGFuZGxlRXNjQ2xvc2UiLCJfaGFuZGxlQ2xpY2tDbG9zZVBvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0cyIsIl9nZXRJbnB1dFZhbHVlcyIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2Zvcm1FbGVtZXQiLCJpbnB1dFZhbHVlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXQiLCJ2YWx1ZSIsIl9oYW5kbGVTdWJtaXQiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwidGl0bGUiLCJfc3JjIiwiX3RpdGxlIiwiX3BvcHVwSW1nIiwiX3BvcHVwVGl0bGUiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9mb3JtSW5wdXRzRmllbGRTZXQiLCJmb3JtSW5wdXRzRmllbGRTZXQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnRuU2VsZWN0b3IiLCJzdWJtaXRCdG5TZWxlY3RvciIsIl9pbmFjdGl2ZUJ0bkNsYXNzIiwiaW5hY3RpdmVCdG5DbGFzcyIsIl9pbnB1dEVyckNsYXNzIiwiaW5wdXRFcnJDbGFzcyIsIl9pbnB1dEVyckFjdGl2ZUNsYXNzIiwiaW5wdXRFcnJBY3RpdmVDbGFzcyIsIl9mb3JtRWwiLCJfc2hvd0lucHV0RXJyIiwiaW5wdXRFbCIsImVyckVsIiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hhc0ludmFsaWRJbnB1dCIsImlucHV0THN0Iiwic29tZSIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiQXJyYXkiLCJmcm9tIiwiYnRuRWwiLCJkaXNhYmxlZCIsImVuYWJsZVZhbGlkYXRpb24iLCJwcm9maWxlRm9ybSIsImZvcm1zIiwicHJvZmlsZWZvcm0iLCJpbnB1dE5hbWUiLCJlbGVtZW50cyIsInByb2ZpbGVOYW1lIiwiaW5wdXRBYm91dE1lIiwicHJvZmlsZUFib3V0TWUiLCJwbGFjZUZvcm0iLCJwbGFjZWZvcm0iLCJwcm9maWxlRWRpdEJ0biIsIm9wZU5ld0NhcmRQb3B1cEJ0biIsImNhcmRMaXN0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJhZGRJdGVtIiwiZWxlbWVudCIsImFwcGVuZCIsIml0ZW0iLCJhZGRHYWxsZXJ5Q2FyZEl0ZW0iLCJjYXJkRWxlbWVudCIsIm5ld0NhcmRQb3B1cCIsInBsYWNlSW1hZ2VMaW5rIiwicGxhY2VOYW1lIiwiY29uc3RhbnRzIiwibmV3Q2FyZFZhbGlkYXRvciIsInVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiam9iU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfam9iRWxlbWVudCIsImdldFVzZXJJbmZvIiwiam9iIiwic2V0VXNlckluZm8iLCJwcm9maWxlUG9wdXAiLCJwcm9maWxlVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==