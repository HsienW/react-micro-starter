import React, {useState} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {routeNavigation} from '../../../common/util/route-navigation';
import '../../../common/components/auth/auth';
import './root.scss';

const Login = () => {
    return <auth-component/>;
};

const PortalPage1 = () => {
    return <h2>Portal Page 1</h2>;
};

const PortalPage2 = () => {
    return <h2>Portal Page 2</h2>;
};

export const PortalRootDom = (props) => {
    const {routerBase, setGlobalState, getGlobalState} = props;
    const defaultValue = getGlobalState('init');
    const [testValue, changeValue] = useState(defaultValue);

    const click = (handler) => {
        const newValue = Math.floor(Math.random() * 9) + 1;
        changeValue(newValue);
        console.log(getGlobalState('init'));
        return handler({init: newValue});
    };

    return (
        <div>
            <h2 className='portal-root-title'>Portal root dom is working!</h2>
            <div>test: {testValue}</div>
            <button onClick={() => click(setGlobalState)}>test</button>
            <HashRouter basename={routerBase}>
                <ul>
                    <li>
                        <a onClick={() => {routeNavigation('feature', '/portal-page1');}}>Portal Page1</a>
                    </li>
                    <li>
                        <a onClick={() => {routeNavigation('feature', '/portal-page2');}}>Portal Page2</a>
                    </li>
                    <li>
                        <a onClick={() => {routeNavigation('sub-app', '/sub-app-react1');}}>To React1</a>
                    </li>
                </ul>
                <Switch>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                    <Route path={'/portal-page1'}>
                        <PortalPage1/>
                    </Route>
                    <Route path={'/portal-page2'}>
                        <PortalPage2/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};
