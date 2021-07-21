import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../../../common/components/auth/auth';
import './root.scss';

const Login = () => {
    return <auth-component/>;
};

const Home = () => {
    return <h2>Portal Home</h2>;
};

const Demo = () => {
    return <h2>Portal Demo</h2>;
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
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`${routerBase}/login`}>Login</Link>
                            </li>
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
                        <Route path={`${routerBase}/login`}>
                            <Login/>
                        </Route>
                        <Route path={`${routerBase}/home`}>
                            <Home/>
                        </Route>
                        <Route path={`${routerBase}/demo`}>
                            <Demo/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
