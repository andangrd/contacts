import { combineReducers } from 'redux';
import Reducers from './Reducers';
import createStore from './CreateStore';

const appReducer = combineReducers({
    ...Reducers,
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_ALL_STATE') {
        return appReducer(undefined, action);
    }

    return appReducer(state, action);
};


export const store = createStore(rootReducer)

export default {
    store
}