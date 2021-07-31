import {routeNavigation} from '../../util/route-navigation';

class Auth extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.domStyling();
        this.domRender();
        this.domEventInit();
    }

    domStyling() {
        let style = document.createElement('style');
        style.textContent = `
        .auth-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            width: 100%;
            height: 100%;
            background-color: rgba(51, 51, 51, 0.8);
        }
        .auth-page {
            width: 420px;
            padding: 8% 0 0;
            margin: auto;
            z-index: 99;
        }
        .form {
            font-family: 'Roboto', sans-serif;
            position: relative;
            z-index: 1;
            background: #FFFFFF;
            max-width: 420px;
            margin: 0 auto 0;
            padding: 45px;
            text-align: center;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
            border-radius: 4px
        }
        .input {
            font-family: 'Roboto', sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 0.75rem;
            padding: 10px 15px;
            box-sizing: border-box;
            font-size: 0.75rem;
            border-radius: 4px
        }
        .button {
            text-transform: uppercase;
            outline: 0;
            background: #1890ff;
            width: 100%;
            border: 0;
            padding: 10px 15px;
            color: #FFFFFF;
            font-size: 0.8rem;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
            border-radius: 4px
        }
        .form button:hover,.form button:active,.form button:focus {
            opacity: 0.8
        }
        .form .form-title {
            margin: 0 0 0.8rem 0;
            color: rgba(0, 0, 0, 0.65);
            font-size: 1.75rem;
            font-weight: 700;
        }
        .form .form-sub-title {
            margin: 0.8rem; 0 0;
            color: rgba(0, 0, 0, 0.45);
            font-size: 0.85rem;
        }
        .form .description {
            margin: 0.8rem; 0 0;
            color: rgba(0, 0, 0, 0.45);
            font-size: 0.75rem;
        }
        .form .description a {
            color: #4CAF50;
            text-decoration: none;
        }
        .container {
            position: relative;
            z-index: 1;
            max-width: 300px;
            margin: 0 auto;
        }
        .container:before, .container:after {
            content: '';
            display: block;
            clear: both;
        }
        .container .info {
            margin: 50px auto;
            text-align: center;
        }
        .container .info h1 {
            margin: 0 0 15px;
            padding: 0;
            font-size: 36px;
            font-weight: 300;
            color: #1a1a1a;
        }
        .container .info span {
            color: #4d4d4d;
            font-size: 12px;
        }
        .container .info span a {
            color: #000000;
            text-decoration: none;
        }
        .container .info span .fa {
            color: #EF3B3A;
        }
    `
        this.shadow.appendChild(style);
    }

    domRender() {
        this.authBackdrop = document.createElement('div');
        this.authPage = document.createElement('div');
        this.authFormViewport = document.createElement('div');
        this.authFormTitle = document.createElement('div');
        this.authFormSubtitle = document.createElement('p');
        this.authForm = document.createElement('div');
        this.authInputAccount = document.createElement('input');
        this.authInputPassword = document.createElement('input');
        this.authLoginButton = document.createElement('button');
        this.authDescription = document.createElement('p');

        this.authBackdrop.className = 'auth-backdrop';
        this.authPage.className = 'auth-page';
        this.authFormViewport.className = 'form';
        this.authFormTitle.className = 'form-title';
        this.authFormSubtitle.className = 'form-sub-title';
        this.authInputAccount.className = 'input';
        this.authInputPassword.className = 'input';
        this.authLoginButton.className = 'button';
        this.authDescription.className = 'description';
        this.authLoginButton.innerHTML = 'Login';
        this.authFormTitle.textContent = 'React Micro Starter'
        this.authFormSubtitle.textContent = 'You can enter any account and password!'
        this.authDescription.textContent = 'This description'

        this.authInputAccount.setAttribute('type', 'text');
        this.authInputPassword.setAttribute('type', 'password');

        this.authInputAccount.setAttribute('placeholder', 'Account');
        this.authInputPassword.setAttribute('placeholder', 'Password');

        this.authInputAccount.setAttribute('id', 'input-account');
        this.authInputPassword.setAttribute('id', 'input-password');

        this.shadow.appendChild(this.authBackdrop);
        this.authBackdrop.appendChild(this.authPage);
        this.authPage.appendChild(this.authFormViewport);
        this.authFormViewport.appendChild(this.authForm);
        this.authForm.appendChild(this.authFormTitle);
        this.authForm.appendChild(this.authFormSubtitle);
        this.authForm.appendChild(this.authInputAccount);
        this.authForm.appendChild(this.authInputPassword);
        this.authForm.appendChild(this.authLoginButton);
        this.authForm.appendChild(this.authDescription);
    }

    domEventInit() {
        this.authInputAccount.addEventListener('input', (event) => {
            this.authInputAccount.textContent = event.target.value;
        }, false);
        this.authInputPassword.addEventListener('input', (event) => {
            this.authInputPassword.textContent = event.target.value;
        }, false);
        this.authLoginButton.addEventListener('click', this.login.bind(this.authForm), false);
    }

    login() {
        console.log(this.querySelector('#input-account').value);
        console.log(this.querySelector('#input-password').value);
        const account = this.querySelector('#input-account').value;
        const userInfo = {
            account: account ? account : 'default',
            userName: account ? account : 'default',
            token: 'default-token'
        };
        sessionStorage.setItem('user-info', JSON.stringify(userInfo));
        routeNavigation('feature', '/portal-page1');
    }
}

customElements.define('auth-component', Auth);

export {
    Auth
}
