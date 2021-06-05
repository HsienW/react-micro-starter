import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import renderSubAppPortalContainer from './render-sub-app/render-sub-app-portal';

renderSubAppPortalContainer({ loading: true });
const loader = loading => renderSubAppPortalContainer({ loading });

registerMicroApps(
    [
        {
            name: 'sub-app-portal',
            entry: '//localhost:3001/',
            container: '#sub-app-viewport',
            loader,
            activeRule: '/sub-app-portal',
        }
    ],
    {
        beforeLoad: [
            app => {
                console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
            },
        ],
        beforeMount: [
            app => {
                console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            },
        ],
        afterUnmount: [
            app => {
                console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            },
        ],
    },
);

setDefaultMountApp('/');
start();
