import {routeNavigation} from '../../util/route-navigation';
import {pubSub} from '../../pub-sub/pub-sub';
// import {subAppInfo} from '../../../main/src/config-sub-app-info';

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
        this.domEventInit();
        pubSub.doSubscribe('onload', this.activeChangeStyling.bind(this));
        pubSub.doSubscribe('route-change', this.activeChangeStyling.bind(this));
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .side-bar {
            background: #ffffff;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            border-right: 1px solid #d9d9d9;
        }
        
        .side-bar ul {
            padding: 10px;
            margin: 0;
        }
        
        .side-bar i {
            margin-right: 10px;
        }
        
        .side-bar li {
            cursor:pointer;
            list-style-type: none;
        }
        
        .side-bar ul li a {
            color: #8c8c8c
            text-decoration: none;
            font-size: 15px;
            display: block;
            padding: 12px 15px;
            transition: all 0.15s;
            position: relative;
        }
        
        .side-bar>ul.side-bar-menu>li.active>a,
        .side-bar>ul>li>ul.side-bar-menu>li.active>a,
        .side-bar>ul>li>ul>li>ul.side-bar-menu>li.active>a,
        .side-bar>ul>li>ul>li>ul>li>ul.side-bar-menu>li.active>a,
        .side-bar>ul>li>ul>li>ul>li>ul>li>ul.side-bar-menu>li.active>a {
            background-color: #e6f7ff;
            color: #1890ff;
        }
        
        .side-bar>ul>li>ul,
        .side-bar>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul,
        .side-bar>ul>li>ul>li>ul>li>ul>li>ul {
            display: none;
        }
        
        .side-bar>ul>li.active>ul.side-bar-menu,
        .side-bar>ul>li>ul>li.active>ul.side-bar-menu,
        .side-bar>ul>li>ul>li>ul>li.active>ul.side-bar-menu,
        .side-bar>ul>li>ul>li>ul>li>ul>li.active>ul.side-bar-menu {
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
            font-size: 14px;
            display: inline-block;
            padding-right: 3px;
            vertical-align: middle;
            font-weight: 900;
            transition: 0.15s;
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
            transition: 0.15s;
        }
        
        .side-bar::-webkit-scrollbar-thumb:hover {
            background: #d5b14c;
            transition: 0.15s;
        }
    `
        this.shadow.appendChild(style);
    }

    domRender() {
        this.sideBarBody = document.createElement('div');
        this.sideBarUl = document.createElement('ul');
        this.sideBarPortalLi = document.createElement('li');
        this.sideBarReact1Li = document.createElement('li');
        this.sideBarPortalLink = document.createElement('a');
        this.sideBarReact1Link = document.createElement('a');

        this.sideBarBody.className = 'side-bar';
        this.sideBarUl.className = 'side-bar-menu';

        this.sideBarPortalLink.textContent = 'Portal';
        this.sideBarReact1Link.textContent = 'React1';

        this.sideBarUl.setAttribute('id', 'side-bar');

        this.sideBarPortalLi.setAttribute('active-rule', '/sub-app-portal');
        this.sideBarReact1Li.setAttribute('active-rule', '/sub-app-react1');

        this.sideBarPortalLink.setAttribute('active-rule', '/sub-app-portal');
        this.sideBarReact1Link.setAttribute('active-rule', '/sub-app-react1');

        this.shadow.appendChild(this.sideBarBody);
        this.sideBarBody.appendChild(this.sideBarUl);
        this.sideBarUl.appendChild(this.sideBarPortalLi);
        this.sideBarUl.appendChild(this.sideBarReact1Li);
        this.sideBarPortalLi.appendChild(this.sideBarPortalLink);
        this.sideBarReact1Li.appendChild(this.sideBarReact1Link);
    }

    domEventInit() {
        this.sideBarUl.addEventListener('click', this.sideBarItemClick.bind(this), false);
    }

    sideBarItemClick(event) {
        let targetActive = event.target.getAttribute('active-rule');
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

customElements.define('side-bar-container', SideBar);

export {
    SideBar
}
