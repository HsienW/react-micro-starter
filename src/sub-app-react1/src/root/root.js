import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
    return <h2>React1 Home</h2>;
};

const Demo = () => {
    return <h2>React1 Demo</h2>;
};

export const React1RootDom = (props) => {
    const { routerBase, getGlobalState } = props;

    console.log(getGlobalState('init'));

    return (
        <div>
            <h2>React1 root dom is working!</h2>
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

