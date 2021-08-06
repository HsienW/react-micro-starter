class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.userInfo = null;
        this.domStyling();
        this.domRender();
        this.domEventInit();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .hidden {
            display: none;
        }
        
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
            color: #595959;
        }
        
        .user-info-area {
            width: 16%;
            min-width: 250px;
            padding: 0 10px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
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
            max-width: 60%;
            margin-left: 10px;
            overflow : hidden;
            text-overflow : ellipsis;
            white-space : nowrap;
            color: #595959;
        }
        
        .user-setting-icon {
            width: 16px;
            height: 16px;
            cursor: pointer;
            padding: 4px 10px 0;
            filter: invert(33%) sepia(3%) saturate(0%) hue-rotate(339deg) brightness(93%) contrast(79%);
        }
        
        .user-setting-dropdown {
            display: inline-block;
            position: relative;
            font-size: 14px;
            color: #8c8c8c
        }
        
        .user-setting-dropdown>.button {
            display: inline-block;
            white-space: nowrap;
        }
        
        .user-setting-dropdown>.button:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 0; 
            height: 0; 
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid black;
        }
        
        .user-setting-dropdown>.menu {
            position: absolute;
            top: 100%;
            border: 1px solid #d9d9d9;
            padding: 0;
            margin: 2px 0 0 0;
            box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12);
            background-color: #ffffff;
            border-radius: 2px;
            list-style-type: none;
            right: 0%;
        }
        
        .user-setting-dropdown>.menu li {
            padding: 10px 20px;
            cursor: pointer;
            white-space: nowrap;
        }
        
        .user-setting-dropdown>.menu li:hover {
            background-color: #e6f7ff
        }
        
        .user-setting-dropdown>.menu li a {
            display: block;
            margin: -10px -20px;
            padding: 10px 20px;
        }
        
        .user-setting-dropdown>.menu li.divider{
            padding: 0;
            border-bottom: 1px solid #d9d9d9;
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

        this.userDropdown = document.createElement('label');
        this.userDropdownButton = document.createElement('img');
        this.userDropdownUl = document.createElement('ul');
        this.userDropdownSettingLi = document.createElement('li');
        this.userDropdownLogoutLi = document.createElement('li');
        this.userDropdownSettingLink = document.createElement('a');
        this.userDropdownLogoutLink = document.createElement('a');

        this.headerBarBody.className = 'header-bar';
        this.logoArea.className = 'logo-area';
        this.logoText.className = 'logo-text';
        this.userInfoArea.className = 'user-info-area';
        this.userImage.className = 'user-image';
        this.userName.className = 'user-name';

        this.userDropdown.className = 'user-setting-dropdown';
        this.userDropdownButton.className = 'user-setting-icon button';
        this.userDropdownUl.className = 'menu hidden';

        this.logoText.textContent = 'LOGO';
        this.userName.textContent = 'Default User';

        this.userDropdownSettingLink.textContent = 'Setting';
        this.userDropdownLogoutLink.textContent = 'Logout';

        this.userImage.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/user.svg');
        this.userDropdownButton.setAttribute('src', 'https://music-player-demo-assets.s3.amazonaws.com/icon/down-arrow.svg');

        this.shadow.appendChild(this.headerBarBody);
        this.headerBarBody.appendChild(this.logoArea);
        this.headerBarBody.appendChild(this.userInfoArea);
        this.logoArea.appendChild(this.logoText);
        this.userInfoArea.appendChild(this.userImage);
        this.userInfoArea.appendChild(this.userName);
        this.userInfoArea.appendChild(this.userDropdown);
        this.userDropdown.appendChild(this.userDropdownButton);
        this.userDropdown.appendChild(this.userDropdownUl);
        this.userDropdownUl.appendChild(this.userDropdownSettingLi);
        this.userDropdownUl.appendChild(this.userDropdownLogoutLi);
        this.userDropdownSettingLi.appendChild(this.userDropdownSettingLink);
        this.userDropdownLogoutLi.appendChild(this.userDropdownLogoutLink);
    }

    updateDomActiveStyle(target, condition, styleName) {
        if (!target.classList.contains(condition)) {
            target.classList.add(styleName);
        } else {
            target.classList.remove(styleName);
        }
    }

    // getUserInfo() {
    //     this.userInfo = JSON.parse(sessionStorage.getItem('user-info'));
    //     this.userName.textContent = this.userInfo.userName;
    // }
    //
    domEventInit() {
        this.userDropdownButton.addEventListener('mouseover', () => {
            this.updateDomActiveStyle(this.userDropdownUl, 'hidden', 'hidden');
        }, false);

        this.userDropdownUl.addEventListener('mouseleave', () => {
            this.updateDomActiveStyle(this.userDropdownUl, 'hidden', 'hidden');
        }, false);
    }
    //
    // itemClick(event) {
    //
    // }
}

customElements.define('header-bar-container', HeaderBar);

export {
    HeaderBar
}
