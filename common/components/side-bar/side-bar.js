import {routeNavigation} from '../../util/route-navigation';
// import {subAppInfo} from '../../../main/src/config-sub-app-info';

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
        this.domEventInit();
        // this.changeActive = this.changeActive.bind(this);
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .side-bar {
            background: #fff;
            width: 250px;
            padding: 10px;
            float: left;
            height: 100vh;
            overflow-x: hidden;
        }
        .side-bar i {
            margin-right: 10px;
        }
        .side-bar li {
            list-style-type: none;
        }
        .side-bar ul li a {
            color: #9c9c9c;
            text-decoration: none;
            font-size: 15px;
            display: block;
            padding: 12px 15px;
            transition: all 0.15s;
            position: relative;
            border-radius: 3px;
        }
        .side-bar>ul.side-bar-dropdown>li.active>a,
        .side-bar>ul>li>ul.side-bar-dropdown>li.active>a,
        .side-bar>ul>li>ul>li>ul.side-bar-dropdown>li.active>a,
        .side-bar>ul>li>ul>li>ul>li>ul.side-bar-dropdown>li.active>a,
        .side-bar>ul>li>ul>li>ul>li>ul>li>ul.side-bar-dropdown>li.active>a {
            background-color: #a8d4fb;
            color: #0089ff;
            box-shadow: 0px 1px 2px rgba(0, 137, 255, 0.2);
        }
        .side-bar>ul>li>ul,
        .side-bar>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul>li>ul {
            display: none;
        }
        .side-bar>ul>li.active>ul.side-bar-dropdown,
        .side-bar>ul>li>ul>li.active>ul.side-bar-dropdown,
        .side-bar>ul>li>ul>li>ul>li.active>ul.side-bar-dropdown,
        .side-bar>ul>li>ul>li>ul>li>ul>li.active>ul.side-bar-dropdown {
            display: block;
        }
        
        .side-bar>ul>li>ul,
        .side-bar>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul>li>ul {
            padding-left: 20px;
        }
        .side-bar a:not(:only-child):after {
            content: "\\f105";
            position: absolute;
            right: 20px;
            top: 14px;
            font-size: 15px;
            font-family: "Roboto", sans-serif;
            display: inline-block;
            padding-right: 3px;
            vertical-align: middle;
            font-weight: 900;
            transition: 0.5s;
        }
        .side-bar .active>a:not(:only-child):after {
            transform: rotate(90deg);
        }
        .side-bar::-webkit-scrollbar {
            width: 5px;
            height: 8px;
        }
        .side-bar::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #e4e4e4;
        }
        .side-bar::-webkit-scrollbar-thumb {
            background: #0089ff;
            border-radius: 10px;
            transition: 0.5s;
        }
        .side-bar::-webkit-scrollbar-thumb:hover {
            background: #d5b14c;
            transition: 0.5s;
        }
    `
        this.shadow.appendChild(style);
    }

    domRender() {
        this.sideBarBackdrop = document.createElement('div');
        this.sideBarUl = document.createElement('ul');
        this.sideBarPortalLi = document.createElement('li');
        this.sideBarReact1Li = document.createElement('li');
        this.sideBarPortalLink = document.createElement('a');
        this.sideBarReact1Link = document.createElement('a');

        this.sideBarBackdrop.className = 'side-bar';
        this.sideBarUl.className = 'side-bar-dropdown';

        this.sideBarPortalLink.textContent = 'Portal';
        this.sideBarReact1Link.textContent = 'React1';

        this.sideBarUl.setAttribute('id', 'side-bar');

        this.sideBarPortalLi.setAttribute('active-rule', '/sub-app-portal');
        this.sideBarReact1Li.setAttribute('active-rule', '/sub-app-react1');

        this.sideBarPortalLink.setAttribute('active-rule', '/sub-app-portal');
        this.sideBarReact1Link.setAttribute('active-rule', '/sub-app-react1');

        this.shadow.appendChild(this.sideBarBackdrop);
        this.sideBarBackdrop.appendChild(this.sideBarUl);
        this.sideBarUl.appendChild(this.sideBarPortalLi);
        this.sideBarUl.appendChild(this.sideBarReact1Li);
        this.sideBarPortalLi.appendChild(this.sideBarPortalLink);
        this.sideBarReact1Li.appendChild(this.sideBarReact1Link);
    }

    domEventInit() {
        window.addEventListener('popstate', this.activeChangeStyling.bind(this), false);
        this.sideBarUl.addEventListener('click', this.sideBarItemClick.bind(this), false);
    }

    sideBarItemClick(event) {
        let targetActive = event.target.getAttribute('active-rule')
        routeNavigation('sub-app', targetActive);
    }

    activeChangeStyling() {
        for (let i = 0; i < this.sideBarUl.childNodes.length; i++) {
            this.sideBarUl.childNodes[i].removeAttribute('class');

            if (this.sideBarUl.childNodes[i].getAttribute('active-rule') === location.pathname) {
                this.sideBarUl.childNodes[i].setAttribute('class', 'active');
            }
        }
    }
}

customElements.define('side-bar-component', SideBar);

export {
    SideBar
}
