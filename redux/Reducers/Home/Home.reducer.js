import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';
// import { getSuggestion } from '../../../services/Home/Home.service'


// ------------------------------------
// Constants
// ------------------------------------
const SET_WELCOME_MESSAGE = 'HOME/SET_WELCOME_MESSAGE';
const SET_QUERY = 'HOME/SET_QUERY';
const GET_AUTOCOMPLETE_DATA = 'HOME/GET_AUTOCOMPLETE_DATA';

export const actionTypes = {
    SET_WELCOME_MESSAGE,
    SET_QUERY,
    GET_AUTOCOMPLETE_DATA
};

// ------------------------------------
// Action
// ------------------------------------
export const setWelcomeMessage = createAction(SET_WELCOME_MESSAGE);
export const setQuery = createAction(SET_QUERY, (query) => Promise.resolve(query));
// export const getAutocompleteData = createAction(GET_AUTOCOMPLETE_DATA, getSuggestion);

export const actions = {
    setWelcomeMessage,
    setQuery,
    // getAutocompleteData
};


// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = {
    welcomeMessage: 'Open up the code for this screen, bro',
    query: '',
    autoCompleteData: []
};

const setWelcomeMessageHandler = (state, action) => ({
    ...state,
    welcomeMessage: action.payload
});

const setQueryHandler = (state, action) => ({
    ...state,
    query: action.payload
});

const getAutocompleteDataHandler = (state, action) => ({
    ...state,
    autoCompleteData: action.payload
});

const getAutoComleteError = (state) => ({
    ...state,
    autoCompleteData: []
});

// type to reducers
export default typeToReducer({
    // [GET_AUTOCOMPLETE_DATA]: {
    //     FULFILLED: getAutocompleteDataHandler,
    //     REJECTED: getAutoComleteError
    // },
    [SET_WELCOME_MESSAGE]: setWelcomeMessageHandler,
    [SET_QUERY]: {
        FULFILLED: setQueryHandler
    }
}, initialState);