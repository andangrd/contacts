import {
    BASE_ADDRESS,
    PROTOCOL,
    APP_API_KEY,
    NODE_ENV
} from 'react-native-dotenv';

const configs = {
    api: {
        baseAddress: BASE_ADDRESS,
        protocol: PROTOCOL,
        appApiKey: APP_API_KEY
    },
    // graphql: {
    //     baseAddress: GRAPHQL_SERVER_ADDRESS,
    //     protocol: GRAPHQL_SERVER_PROTOCOL,
    //     appApiKey: APP_API_KEY
    // },
    env: NODE_ENV
};

// a workaround to allow undefined environment variables
// in .env files. e.g: APP_API_KEY=null
// known issue: https://github.com/zetachang/react-native-dotenv/issues/10
configs.api = Object.keys(configs.api).reduce((acc, key) => {
    const item = configs.api[key];
    acc[key] = item === 'null' ? '' : item; // eslint-disable-line no-param-reassign
    return acc;
}, {});

export default configs;
