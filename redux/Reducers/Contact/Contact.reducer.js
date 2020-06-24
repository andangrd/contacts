import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';
import { getContacts, getContactDetail } from '../../../services/Contact/Contact.service'


// ------------------------------------
// Constants
// ------------------------------------
const GET_CONTACT_LIST = 'CONTACT/GET_CONTACT_LIST';
const GET_ACCOUNT_DETAILS = 'CONTACT/GET_ACCOUNT_DETAILS';

export const actionTypes = {
    GET_CONTACT_LIST,
    GET_ACCOUNT_DETAILS
};

// ------------------------------------
// Action
// ------------------------------------
// export const getContactList = createAction(GET_CONTACT_LIST, (list) => Promise.resolve(list));
export const getContactList = createAction(GET_CONTACT_LIST, getContacts);
export const getContactDetails = createAction(GET_ACCOUNT_DETAILS, getContactDetail);

export const actions = {
    getContactList,
    getContactDetails
};


// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = {
    contactList: [],
    isLoading: false,
    contactDetails: {
        id: '',
        firstName: '',
        lastName: '',
        age: '',
        photo: 'http://localhost/img.jpg'
    },
};


const setIsLoading = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const getContactListSuccessHandler = (state, action) => {
    console.log(action);

    return {
        ...state,
        contactDetails: {
            ...initialState.contactDetails
        },
        isLoading: false,
        contactList: action.payload
    }
};

const getContactListErrorHandler = (state) => ({
    ...state,
    contactList: [],
    contactDetails: {
        ...initialState.contactDetails
    },
    isLoading: false,
});

const getContactDetailSuccessHandler = (state, action) => {
    console.log(action);

    return {
        ...state,
        contactDetails: action.payload,
        isLoading: false,
    }
};

const getContactDetailErrorHandler = (state) => ({
    ...state,
    contactDetails: {
        ...initialState.contactDetails
    },
    isLoading: false,
});

// type to reducers
export default typeToReducer({
    [GET_CONTACT_LIST]: {
        FULFILLED: getContactListSuccessHandler,
        PENDING: setIsLoading,
        REJECTED: getContactListErrorHandler
    },
    [GET_ACCOUNT_DETAILS]: {
        FULFILLED: getContactDetailSuccessHandler,
        PENDING: setIsLoading,
        REJECTED: getContactDetailErrorHandler
    },
    // [SET_QUERY]: {
    //     FULFILLED: setQueryHandler
    // }
}, initialState);