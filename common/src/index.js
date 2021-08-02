import React from 'react';
import ReactWebComponent from 'react-web-component';
import {render} from 'react-dom';
import {RoutedApp} from './containers/auth/auth';

ReactWebComponent.create(<RoutedApp />, 'my-routed-component');

render(
    <div />, document.getElementById('app')
);
