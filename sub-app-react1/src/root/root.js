import React, { useState } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {routeNavigation} from '../../../common/util/route-navigation';

const React1Page1 = () => {
    return <h2>React1 Page1</h2>;
};

const React1Page2 = () => {
    return <h2>React1 Page2</h2>;
};

export const React1RootDom = (props) => {
    const { routerBase, setGlobalState, getGlobalState } = props;
    const defaultValue = getGlobalState('init');
    const [testValue, changeValue] = useState(defaultValue);

    const click = (handler) => {
        const newValue = Math.floor(Math.random() * 5) + 1;
        changeValue(newValue);
        console.log(getGlobalState('init'));
        return handler({ init: newValue });
    };

    console.log(getGlobalState('init'));

    return (
        <div>
            <h2>React1 root dom is working!</h2>
            <div>test: {testValue}</div>
            <button onClick={() => click(setGlobalState)}>test</button>
            <HashRouter basename={routerBase}>
                <ul>
                    <li>
                        <a onClick={() => {routeNavigation('feature', '/react1-page1');}}>React1 Page1</a>
                    </li>
                    <li>
                        <a onClick={() => {routeNavigation('feature', '/react1-page2');}}>React1 Page2</a>
                    </li>
                    <li>
                        <a onClick={() => {routeNavigation('sub-app', '/sub-app-portal');}}>To Portal</a>
                    </li>
                </ul>
                <Switch>
                    <Route path={'/react1-page1'}>
                        <React1Page1/>
                    </Route>
                    <Route path={'/react1-page2'}>
                        <React1Page2/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

