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

export default {
    baseUrl,
    generateConfig
};
