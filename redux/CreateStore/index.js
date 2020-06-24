import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const loggerMiddleware = createLogger()

export default (rootReducer) => {
    const middleware = [
        thunk,
        // loggerMiddleware,
        promiseMiddleware
    ]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

    return store;
}