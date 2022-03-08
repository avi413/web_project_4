export default class UserInfo {
    /**
     * The UserInfo class is responsible for rendering 
     * information about the user on the page. This class should:
     * -Take an object with the selectors of two elements into the constructor: 
     * one containing the user's name, and another containing the user's job.
     */
    constructor ( nameSelector, jobSelector, avatarSelector = null) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);

    }

    getUserInfo() {
        /**
         * returns an object with information about the user. 
         * This method will be handy for 
         * cases when it's necessary to display the user data in the open form.
         */
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }
    }

    setUserInfo(data){
        /**
         * takes new user data and adds it on the page.
         */
        this._nameElement.textContent   = data.name;
        this._nameElement.id            = data._id;
        this._jobElement.textContent    = data.about;

    }
    setUserAvatar({avatar, name}) {
        this._avatar.src = avatar;
        this._avatar.alt = name;
    }
}