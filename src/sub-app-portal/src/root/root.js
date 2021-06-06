import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
    return <h2>Portal Home</h2>;
};

const Demo = () => {
    return <h2>Portal Demo</h2>;
};

export const PortalRootDom = (props) => {
    const { routerBase } = props;

    return (
        <div>
            <h2>Portal root dom is working!</h2>
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
                                <Link to={'/sub-app-react1'}>Go to React1</Link>
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
