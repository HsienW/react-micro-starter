import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import renderSubAppPortalContainer from './render-sub-app';

const loader = loading => renderSubAppPortalContainer({ loading });

registerMicroApps(
    [
        {
            name: 'sub-app-portal',
            entry: '//localhost:3001',
            container: '#sub-app-viewport',
            activeRule: '/sub-app-portal',
            loader,
            props: {
                routerBase: '/sub-app-portal'
            }
        },
        {
            name: 'sub-app-react1',
            entry: '//localhost:3002',
            container: '#sub-app-viewport',
            activeRule: '/sub-app-react1',
            loader,
            props: {
                routerBase: '/sub-app-react1'
            }
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

setDefaultMountApp('/sub-app-portal');
start();
