import React from 'react';
import { render } from 'react-dom';

function PortalRootDom(props) {
    const { loading } = props;

    return (
        <div>
            {loading ? <h4>Loading...</h4> : null}
            <div id='sub-app-viewport' />
        </div>
    );
}

function renderSubAppPortalRoot({ loading }) {
    const container = document.getElementById('sub-app-container');
    render(<PortalRootDom loading={loading} />, container);
}

export default renderSubAppPortalRoot;
