import React from 'react';
import ReactDOM from 'react-dom';
import { singleAppGlobalState } from '../../common/state/single-app-global-state';
import { globalActiveListener } from '../../common/listener/global-active-listener';
import { React1RootDom } from './root/root';
import './public-path';

function renderReact1Root(props) {
    const { container, routerBase, setGlobalState, getGlobalState, onStateChange } = props;
    ReactDOM.render(
        <React1RootDom
            routerBase={routerBase}
            setGlobalState={setGlobalState}
            getGlobalState={getGlobalState}
            onStateChange={onStateChange}
        />, container ? container.querySelector('#react1-root') : document.querySelector('#react1-root')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    console.log('react1 我自己運行了');

    const routerBase = '/sub-app-react1';
    const { getGlobalState, setGlobalState } = singleAppGlobalState;
    const props = { routerBase, getGlobalState, setGlobalState };

    singleAppGlobalState.setGlobalState('init', 'react1 我自己運行了');
    globalActiveListener.initAllAction();

    renderReact1Root(props);
}

/**
 * bootstrap 只會再 init 的時候 call 一次, 之後重新加載會直接 call mount hook
 * 通常這個 bootstrap hook 是用來做一些 global 變數的 init, 像是不會再 unmount 被清掉的 catch
 */
export async function bootstrap() {
    console.log('react app bootstrap is work');
}

/**
 * 每次加載進子專案都會 call mount, 一般 render 也會在這邊 call
 */
export async function mount(props) {
    renderReact1Root(props);
}

/**
 * 每次切換 or 卸載進子專案都會 call unmount, 一般會在這裡銷毀子專案的 instance
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('react1-root'));
}
