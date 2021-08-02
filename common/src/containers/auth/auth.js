import React from 'react';
import {
    MemoryRouter as Router,
    // Route,
    Link,
    // withRouter
} from 'react-router-dom';


export const RoutedApp = () => (
    <Router initialEntries={[ '/' ]}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
        </div>
    </Router>
);
