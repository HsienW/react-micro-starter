class LoadingSpin extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .hidden {
            display: none;
        }
        
        .loading-spin-backdrop {
        }
        
        .loading-spin-area {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            width: 100%;
            height: 100%;
            background-color: rgba(51, 51, 51, 0.75);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .loading-spin-dot {
            position: relative;
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
        }
        
        .loading-spin-dot-spin {
            transform: rotate(45deg);
            animation: antRotate 1.2s infinite linear;
        }
        .loading-spin-dot i {
            width: 1rem;
            height: 1rem;
            border-radius: 100%;
            background-color: #1890ff;
            transform: scale(0.75);
            display: block;
            position: absolute;
            opacity: 0.3;
            animation: antSpinMove 1s infinite linear alternate;
            transform-origin: 50% 50%;
        }
        
        .loading-spin-dot i:nth-child(1) {
            left: 0;
            top: 0;
        }
        
        .loading-spin-dot i:nth-child(2) {
            right: 0;
            top: 0;
            animation-delay: 0.4s;
        }
        
        .loading-spin-dot i:nth-child(3) {
            right: 0;
            bottom: 0;
            animation-delay: 0.8s;
        }
        
        .loading-spin-dot i:nth-child(4) {
            left: 0;
            bottom: 0;
            animation-delay: 1.2s;
        }
        
        @keyframes antSpinMove {
            to {
                opacity: 1;
            }
        }
        
        @keyframes antRotate {
            to {
                transform: rotate(405deg);
            }
        }
    `
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
