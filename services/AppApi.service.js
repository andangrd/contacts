/*
    NOTE: Please maintain needed endpoint/service versions in /api.manifest
*/
import config from '../config/api.config';

// map environment variables 
const apiProtocol = config.api.protocol || 'http';
const apiBaseURL = config.api.baseAddress && config.api.baseAddress.replace(/\/$/, '');
const apiKey = config.api.appApiKey;
// base url
export const baseUrl = () => {
    return `${apiProtocol}://${apiBaseURL}`;
};

const baseConfig = {
    baseURL: baseUrl(),
    timeout: 20000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
};


// config generator for config
export const generateConfig = ({ headers, params, others }) => {
    const currentHeader = {
        ...baseConfig.headers,
        ...headers
    };

    return ({
        ...baseConfig,
        headers: currentHeader,
        params: params ? params : {},
        ...others
    });
};

// define each API endpoints as a constant
// use proper method (get, post, put, delete, etc)
// export const getProfile = () => {
//     return AccessToken.get()
//         .then(token => axios.get(
//             pathGenerator('/profile'),
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const sendPaymentRequest = (body) => {
//     return AccessToken.get()
//         .then(token => axios.post(
//             pathGenerator('/payments'),
//             body,
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const removePaymentRequest = (paymentId) => {
//     return AccessToken.get()
//         .then(token => axios.delete(
//             pathGenerator(`/payments/${paymentId}`),
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const updatePaymentRequest = (param) => {
//     const { payId, body } = param;
//     return AccessToken.get()
//         .then(token => axios.patch(
//             pathGenerator(`/payments/sender/${payId}`),
//             body,
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const removeBillRequest = (billId) => {
//     return AccessToken.get()
//         .then(token => axios.delete(
//             pathGenerator(`/payments/bill/${billId}`),
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const sendReminderPayMent = (payId, body) => {
//     return AccessToken.get()
//         .then(token => axios.patch(
//             pathGenerator(`/payments/remind/${payId}`),
//             body,
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };

// export const savePaymentPreferences = (body) => {
//     return AccessToken.get()
//         .then(token => axios.put(
//             pathGenerator('/loanPreference'),
//             body,
//             generateConfig({
//                 headers: authorizationHeader(token)
//             })
//         ));
// };
// return all API endpoints constants

export default {
    baseUrl,
    generateConfig
};
