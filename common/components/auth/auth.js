class Auth extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
        this.style();
    }

    style() {
        let style = document.createElement('style');
        style.textContent = `
         .login-page {
            width: 360px;
            padding: 8% 0 0;
            margin: auto;
        }
        .form {
            position: relative;
            z-index: 1;
            background: #FFFFFF;
            max-width: 360px;
            margin: 0 auto 0;
            padding: 45px;
            text-align: center;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
            border-radius: 2px
        }
        .input {
            font-family: "Roboto", sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 0.75rem;
            padding: 10px 15px;
            box-sizing: border-box;
            font-size: 0.75rem;
            border-radius: 2px
        }
        .button {
            font-family: "Roboto", sans-serif;
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
            border-radius: 2px
        }
        .form button:hover,.form button:active,.form button:focus {
            opacity: 0.8
        }
        .form .form-title {
            margin: 0 0 1.2rem 0;
            color: #b3b3b3;
            font-size: 1.5rem;
        }
        .form .message {
            margin: 0.8rem; 0 0;
            color: #b3b3b3;
            font-size: 0.75rem;
        }
        .form .message a {
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
            content: "";
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
        body {
            background: #76b852; /* fallback for old browsers */
            background: -webkit-linear-gradient(right, #76b852, #8DC26F);
            background: -moz-linear-gradient(right, #76b852, #8DC26F);
            background: -o-linear-gradient(right, #76b852, #8DC26F);
            background: linear-gradient(to left, #76b852, #8DC26F);
            font-family: "Roboto", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    `
        this.shadow.appendChild(style);
    }

    render() {
        this.authPage = document.createElement('div');
        this.authFormViewport = document.createElement('div');
        this.authFormTitle = document.createElement('div');
        this.authForm = document.createElement('form');
        this.authInputUsername = document.createElement('input');
        this.authInputPassword = document.createElement('input');
        this.authLoginButton = document.createElement('button');
        this.authDescription = document.createElement('p');

        this.authPage.className = 'login-page';
        this.authFormViewport.className = 'form';
        this.authFormTitle.className = 'form-title';
        this.authInputUsername.className = 'input';
        this.authInputPassword.className = 'input';
        this.authLoginButton.className = 'button';
        this.authDescription.className = 'message';
        this.authLoginButton.innerHTML = 'Login';
        this.authFormTitle.textContent = 'Music Player Demo'
        this.authDescription.textContent = 'This app only for practice demo,  non-commercial'

        this.authInputUsername.setAttribute('type', 'text');
        this.authInputPassword.setAttribute('type', 'password');

        this.authInputUsername.setAttribute('placeholder', 'username');
        this.authInputPassword.setAttribute('placeholder', 'password');

        this.shadow.appendChild(this.authPage);
        this.authPage.appendChild(this.authFormViewport);
        this.authFormViewport.appendChild(this.authForm);
        this.authForm.appendChild(this.authFormTitle);
        this.authForm.appendChild(this.authInputUsername);
        this.authForm.appendChild(this.authInputPassword);
        this.authForm.appendChild(this.authLoginButton);
        this.authForm.appendChild(this.authDescription);
    }
}

customElements.define('auth-component', Auth);

export {
    Auth
}
