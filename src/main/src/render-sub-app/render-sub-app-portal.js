import React from 'react';
import ReactDOM from 'react-dom';

function PortalRootViewport(props) {
    const { loading } = props;

    console.log('我沒拿到我沒拿到我沒拿到我沒拿到');
    console.log(props);
    return (
        <div>
            {loading ? <h4>Loading...</h4> : null}
            <div id='sub-app-viewport' />
        </div>
    );
}

function renderSubAppPortalContainer({ loading }) {
    const container = document.getElementById('sub-app-container');
    ReactDOM.render(<PortalRootViewport loading={loading} />, container);
}

export default renderSubAppPortalContainer;
