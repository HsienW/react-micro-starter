import React from 'react';
import ReactDOM from 'react-dom';
// import {routeNavigation} from '../../common/util/route-navigation';
import '../../common/components/side-bar/side-bar';

function SubAppViewport(props) {
    const {loading} = props;

    return (
        <div>
            {loading ? <h4>Loading...</h4> : null}
            <side-bar-component/>
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
