import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import allReducers from "store/reducers";

export default ({ children, initialState = {} }) => {
    const store = createStore(
        allReducers,
        initialState,
        (Boolean(window.__REDUX_DEVTOOLS_EXTENSION__) ?
            compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
            ) : applyMiddleware(thunk))
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}