import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';
import { getContacts, getContactDetail, updateContactDetail } from '../../../services/Contact/Contact.service'


// ------------------------------------
// Constants
// ------------------------------------
const GET_CONTACT_LIST = 'CONTACT/GET_CONTACT_LIST';
const GET_CONTACT_DETAILS = 'CONTACT/GET_CONTACT_DETAILS';
const UPDATE_CONTACT_DETAILS = 'CONTACT/GET_CONTACT_DETAILS';

export const actionTypes = {
    GET_CONTACT_LIST,
    GET_CONTACT_DETAILS,
    UPDATE_CONTACT_DETAILS
};

// ------------------------------------
// Action
// ------------------------------------
// export const getContactList = createAction(GET_CONTACT_LIST, (list) => Promise.resolve(list));
export const getContactList = createAction(GET_CONTACT_LIST, getContacts);
export const getContactDetails = createAction(GET_CONTACT_DETAILS, getContactDetail);
export const updateContact = createAction(UPDATE_CONTACT_DETAILS, updateContactDetail);

export const actions = {
    getContactList,
    getContactDetails,
    updateContact
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
        age: ''
    },
};


const setIsLoading = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const getContactListSuccessHandler = (state, action) => {

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


const updateContactDetailSuccessHandler = (state, action) => {
    return {
        ...state,
        contactDetails: action.payload,
        isLoading: false,
    }
};

const updateContactDetailErrorHandler = (state) => ({
    ...state,
    isLoading: false,
});

// type to reducers
export default typeToReducer({
    [GET_CONTACT_LIST]: {
        FULFILLED: getContactListSuccessHandler,
        PENDING: setIsLoading,
        REJECTED: getContactListErrorHandler
    },
    [GET_CONTACT_DETAILS]: {
        FULFILLED: getContactDetailSuccessHandler,
        PENDING: setIsLoading,
        REJECTED: getContactDetailErrorHandler
    },
    [UPDATE_CONTACT_DETAILS]: {
        FULFILLED: updateContactDetailSuccessHandler,
        PENDING: setIsLoading,
        REJECTED: updateContactDetailErrorHandler
    },
}, initialState);