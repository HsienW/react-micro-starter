function routeNavigation(type, route) {
    if (type === 'sub-app') {
        history.pushState(null, null, route);
        return;
    }
    if (type === 'feature') {
        location.hash = route;
        return;
    }

    throw new Error('Please check the param route type, it must be \'sub-app\' or \'feature\'.');
}

export {
    routeNavigation
}
