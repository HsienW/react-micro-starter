class Player extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        
    `
        this.shadow.appendChild(style);
    }

// <div id="player">
// <div className="cover">
// <div className="lrc">
// <div className="line"></div>
// </div>
// </div>
// <div className="progressContainer">
// <div className="buffer"></div>
// <div className="progress"></div>
// </div>
// <div className="detail">
// <div className="title"></div>
// </div>
// <div className="controls">
// <i className="icon repeat material-icons">repeat</i>
// <i className="icon repeat-one material-icons">repeat_one</i>
// <i className="icon shuffle material-icons">shuffle</i>
// <i className="icon prev material-icons">skip_previous</i>
// <i className="icon play material-icons">play_circle_filled</i>
// <i className="icon pause material-icons">pause_circle_filled</i>
// <i className="icon next material-icons">skip_next</i>
// <i className="icon volume material-icons">volume_up</i>
// <input type="range" className="volume" min="0" max="100" step="1" value="100" />
//
// </div>
// </div>

    domRender() {
        this.playerBody = document.createElement('div');
        this.coverArea = document.createElement('div');
        this.coverLRC = document.createElement('div');
        this.coverLine = document.createElement('div');

        this.progressArea = document.createElement('div');
        this.progressBuffer = document.createElement('div');
        this.progressLine = document.createElement('div');

        this.detailArea = document.createElement('div');
        this.detailSongName = document.createElement('div');

        this.controlArea = document.createElement('div');
        this.controlRepeat = document.createElement('i');
        this.controlRepeatOne = document.createElement('i');
        this.controlShuffle = document.createElement('i');
        this.controlPrevious = document.createElement('i');
        this.controlPlay = document.createElement('i');
        this.controlPause = document.createElement('i');
        this.controlNext = document.createElement('i');
        this.controlVolume = document.createElement('i');
        this.controlVolumeRange = document.createElement('input');

        // this.sideBarUl = document.createElement('ul');
        // this.sideBarPortalLi = document.createElement('li');
        // this.sideBarReact1Li = document.createElement('li');
        // this.sideBarPortalLink = document.createElement('a');
        // this.sideBarReact1Link = document.createElement('a');
        //
        // this.sideBarBackdrop.className = 'side-bar';
        // this.sideBarUl.className = 'side-bar-menu';
        //
        // this.sideBarPortalLink.textContent = 'Portal';
        // this.sideBarReact1Link.textContent = 'React1';
        //
        // this.sideBarUl.setAttribute('id', 'side-bar');
        //
        // this.sideBarPortalLi.setAttribute('active-rule', '/sub-app-portal');
        // this.sideBarReact1Li.setAttribute('active-rule', '/sub-app-react1');
        //
        // this.sideBarPortalLink.setAttribute('active-rule', '/sub-app-portal');
        // this.sideBarReact1Link.setAttribute('active-rule', '/sub-app-react1');
        //
        // this.shadow.appendChild(this.sideBarBackdrop);
        // this.sideBarBackdrop.appendChild(this.sideBarUl);
        // this.sideBarUl.appendChild(this.sideBarPortalLi);
        // this.sideBarUl.appendChild(this.sideBarReact1Li);
        // this.sideBarPortalLi.appendChild(this.sideBarPortalLink);
        // this.sideBarReact1Li.appendChild(this.sideBarReact1Link);
    }

    domEventInit() {
        this.sideBarUl.addEventListener('click', this.sideBarItemClick.bind(this), false);
    }
}

customElements.define('side-bar-component', Player);

export {
    Player
}
