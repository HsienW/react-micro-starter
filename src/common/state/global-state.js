const globalStateMiddleware = function(mainState) {
    if (mainState) {
        return mainState;
    }

    // 如果 main 沒有起來的話, 就自行註冊一個 state
    const initialState = {
        init: 'init'
    };

    return {
        setGlobalState: (key, value) => {
            initialState[key] = value;
        },
        getGlobalState: (key) => {
            return key ? initialState[key] : initialState;
        },
        onGlobalStateChange: (newState, prev) => {
            console.log('global state change', JSON.stringify(newState), JSON.stringify(prev));

            for (const key in newState) {
                initialState[key] = newState[key];
            }
        }
    };
};

export default globalStateMiddleware;
