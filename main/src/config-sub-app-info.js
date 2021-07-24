const subAppInfo = [
    {
        name: 'sub-app-portal',
        entry: process.env.REACT_APP_PORTAL_ENV,
        activeRule: '/sub-app-portal',
        container: '#portal-root',
    },
    {
        name: 'sub-app-react1',
        entry: process.env.REACT_APP_REACT1_ENV,
        activeRule: '/sub-app-react1',
        container: '#react1-root',
    }
];

export {
    subAppInfo
};

