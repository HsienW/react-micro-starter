import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './root.scss';

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
            <div className='react1-root-title'>React1 root dom is working!</div>
            <div>test: {testValue}</div>
            <button onClick={() => click(setGlobalState)}>test</button>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to={`${routerBase}/react1-page1`}>React1 Page1</Link>
                    </li>
                    <li>
                        <Link to={`${routerBase}/react1-page2`}>React1 Page2</Link>
                    </li>
                    <li>
                        <Link to={'/sub-app-portal'}>Go to Portal</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path={`${routerBase}/react1-page1`}>
                        <React1Page1/>
                    </Route>
                    <Route path={`${routerBase}/react1-page2`}>
                        <React1Page2/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

