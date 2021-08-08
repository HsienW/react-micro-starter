import {loadingSpinStyle} from './loading-spin-style';

class LoadingSpin extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = loadingSpinStyle;
        this.shadow.appendChild(style);
    }

    domRender() {
        this.loadingSpinBody = document.createElement('div');
        this.spinArea = document.createElement('div');
        this.spinLoad = document.createElement('span');
        this.loadItemTop = document.createElement('i');
        this.loadItemRight = document.createElement('i');
        this.loadItemBottom = document.createElement('i');
        this.loadItemLeft = document.createElement('i');

        this.loadingSpinBody.className = 'loading-spin-backdrop hidden';
        this.spinArea.className = 'loading-spin-area';
        this.spinLoad.className = 'loading-spin-dot loading-spin-dot-spin';

        this.shadow.appendChild(this.loadingSpinBody);
        this.loadingSpinBody.appendChild(this.spinArea);
        this.spinArea.appendChild(this.spinLoad);
        this.spinLoad.appendChild(this.loadItemTop);
        this.spinLoad.appendChild(this.loadItemRight);
        this.spinLoad.appendChild(this.loadItemBottom);
        this.spinLoad.appendChild(this.loadItemLeft);
    }

    // domEventInit() {
    // }
}

customElements.define('loading-spin-container', LoadingSpin);

export {
    LoadingSpin
}
