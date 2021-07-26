import React from 'react';
import ReactDOM from 'react-dom';
import {routeNavigation} from '../../common/util/route-navigation';

function SubAppViewport(props) {
    const {loading} = props;

    return (
        <div>
            {loading ? <h4>Loading...</h4> : null}
            <nav>
                <ul>
                    <li>
                        <a onClick={() => {routeNavigation('sub-app', '/sub-app-portal');}}>To Portal</a>
                    </li>
                    <li>
                        <a onClick={() => {routeNavigation('sub-app', '/sub-app-react1');}}>To React1</a>
                    </li>
                </ul>
            </nav>
            <div id='sub-app-viewport'/>
        </div>
    );
}

function configSubAppRender({loading}) {
    const container = document.getElementById('sub-app-container');
    ReactDOM.render(<SubAppViewport loading={loading}/>, container);
}

export {
    configSubAppRender,
    // listenRouterChange
};
