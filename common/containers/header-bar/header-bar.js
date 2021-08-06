class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.userInfo = null;
        this.domStyling();
        this.domRender();
        // this.domEventInit();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .header-bar {
            background: #ffffff;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-content: center;
            outline: 1px solid #d9d9d9;
        }
        
        .logo-area {
            width: 250px;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        
        .logo-text {
            align-self: center;
            font-weight: 700;
            font-size: 30px;
            color: rgba(0, 0, 0, 0.65);
        }
        
        .user-info-area {
            width: 16%;
            min-width: 250px;
            padding: 0 10px;
            display: flex;
            justify-content: flex-end;
            align-content: center;
        }
        
        .user-info-area>.user-name,
        .user-info-area>.user-image {
            align-self: center;
        }
        
        .user-image {
            width: 40px;
            height: 40px;
        }
        
        .user-name {
            width: 50%;
            margin-left: 10px;
            overflow : hidden;
            text-overflow : ellipsis;
            white-space : nowrap;
        }
    `
        this.shadow.appendChild(style);
    }

    domRender() {
        this.headerBarBody = document.createElement('div');
        this.logoArea = document.createElement('div');
        this.logoText = document.createElement('div');

        this.userInfoArea = document.createElement('div');
        this.userImage = document.createElement('img');
        this.userName = document.createElement('div');

        this.headerBarBody.className = 'header-bar';
        this.logoArea.className = 'logo-area';
        this.logoText.className = 'logo-text';
        this.userInfoArea.className = 'user-info-area';
        this.userImage.className = 'user-image';
        this.userName.className = 'user-name';

        this.logoText.textContent = 'LOGO';
        this.userName.textContent = 'Default User';

        this.userImage.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/user.svg');

        this.shadow.appendChild(this.headerBarBody);
        this.headerBarBody.appendChild(this.logoArea);
        this.headerBarBody.appendChild(this.userInfoArea);
        this.logoArea.appendChild(this.logoText);
        this.userInfoArea.appendChild(this.userImage);
        this.userInfoArea.appendChild(this.userName);
    }

    // getUserInfo() {
    //     this.userInfo = JSON.parse(sessionStorage.getItem('user-info'));
    //     this.userName.textContent = this.userInfo.userName;
    // }
    //
    // domEventInit() {
    // }
    //
    // itemClick(event) {
    //
    // }
}

customElements.define('header-bar-container', HeaderBar);

export {
    HeaderBar
}
