// import {routeNavigation} from '../../util/route-navigation';

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
        this.domEventInit();
        this.domActiveStylingInit();
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

        this.shadow.appendChild(this.sideBarBackdrop);
        this.sideBarBackdrop.appendChild(this.sideBarUl);
        this.sideBarUl.appendChild(this.sideBarPortalLi);
        this.sideBarUl.appendChild(this.sideBarReact1Li);
        this.sideBarPortalLi.appendChild(this.sideBarPortalLink);
        this.sideBarReact1Li.appendChild(this.sideBarReact1Link);
    }


    // $(document).ready(function() {
// 	$("#accordian a").click(function() {
// 		var link = $(this);
// 		var closest_ul = link.closest("ul");
// 		var parallel_active_links = closest_ul.find(".active")
// 		var closest_li = link.closest("li");
// 		var link_status = closest_li.hasClass("active");
// 		var count = 0;

// 		closest_ul.find("ul").slideUp(function() {
// 			if (++count == closest_ul.find("ul").length){
// 				parallel_active_links.removeClass("active");
// 				parallel_active_links.children("ul").removeClass("show-dropdown");
// 				link.not().children("ul").removeClass(".active");
// 			}
// 		});

// 		if (!link_status) {
// 				closest_li.children("ul").slideDown().addClass("show-dropdown");
// 				closest_li.addClass("active");
// 		}

// 	})
// });

    domEventInit() {
        this.sideBarPortalLi.addEventListener('click', this.sideBarItemClick.bind(this.sideBarPortalLink), false);
        this.sideBarReact1Li.addEventListener('click', this.sideBarItemClick.bind(this.sideBarReact1Link), false);
    }

    sideBarItemClick() {
        console.log('測試測試測試測試測試測試測試測試');
    }

    // console.log(this);
    // this.setAttribute('class', 'active');

    domActiveStylingInit() {
        this.sideBarUl.addEventListener('click', () => {
            console.log(this);
            // this.setAttribute('class', 'active');
        }, false);
    }

// <a onClick={() => {routeNavigation('sub-app', '/sub-app-portal');}}>To Portal</a>

}

customElements.define('side-bar-component', SideBar);

export {
    SideBar
}
