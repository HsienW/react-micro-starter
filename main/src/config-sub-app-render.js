import React from 'react';
import ReactDOM from 'react-dom';
import '../../common/components/side-bar/side-bar';
import '../../common/components/header-bar/header-bar';
import './style/main.scss';

function SubAppViewport(props) {
    const {loading} = props;

    return (
        <div>
            {loading ? <h4>Loading...</h4> : null}
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
};
