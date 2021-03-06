import React from 'react';
import ReactDOM from 'react-dom';
import { singleAppGlobalState } from '../../common/state/single-app-global-state';
import { PortalRootDom } from './root/root';
// import { listenRouterChange } from '../../main/src/config-sub-app-render';
import './public-path';

function renderPortalRoot(props) {
    const { container, routerBase, setGlobalState, getGlobalState, onStateChange } = props;
    ReactDOM.render(
        <PortalRootDom
            routerBase={routerBase}
            setGlobalState={setGlobalState}
            getGlobalState={getGlobalState}
            onStateChange={onStateChange}
        />,
        container ? container.querySelector('#portal-root') : document.querySelector('#portal-root')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {

    console.log('portal 我自己運行了');

    const routerBase = '/sub-app-portal';
    const { getGlobalState, setGlobalState } = singleAppGlobalState;
    const props = {routerBase, getGlobalState, setGlobalState};

    singleAppGlobalState.setGlobalState('init', 'portal 我自己運行了');

    renderPortalRoot(props);
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
    renderPortalRoot(props);
    // listenRouterChange();
}

/**
 * 每次切換 or 卸載進子專案都會 call unmount, 一般會在這裡銷毀子專案的 instance
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('portal-root'));
}
