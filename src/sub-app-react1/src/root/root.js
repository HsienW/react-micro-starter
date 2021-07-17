import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
    return <h2>React1 Home</h2>;
};

const Demo = () => {
    return <h2>React1 Demo</h2>;
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
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`${routerBase}/home`}>Home</Link>
                            </li>
                            <li>
                                <Link to={`${routerBase}/demo`}>Demo</Link>
                            </li>
                            <li>
                                <Link to={'/sub-app-portal'}>Back Portal</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path={`${routerBase}/home`}>
                            <Home />
                        </Route>
                        <Route path={`${routerBase}/demo`}>
                            <Demo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

