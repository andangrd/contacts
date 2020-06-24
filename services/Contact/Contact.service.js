import axios from 'axios';
import { generateConfig } from '../AppApi.service';

export const getContacts = async () => {

    return axios.get(
        '/contact',
        generateConfig({})
    )
        .then((res) => { return res.data.data })
        .catch((error) => {
            console.log(error)
            const errorData = (error.response && error.response.data) || {};
            const status = (error.response && error.response.status) || 'Error';

            const formattedErrorData = {
                ...errorData,
                status
            }

            throw formattedErrorData;
        });
};

export const getContactDetail = async (id) => {

    return axios.get(
        '/contact/' + id,
        generateConfig({})
    )
        .then((res) => { return res.data.data })
        .catch((error) => {
            console.log(error)

            throw formatErrorResponse(error)
        });
};

const formatErrorResponse = (error) => {
    const errorData = (error.response && error.response.data) || {};
    const status = (error.response && error.response.status) || 'Error';

    const formattedErrorData = {
        ...errorData,
        status
    }

    return formattedErrorData
}

export const updateContactDetail = async (data) => {
    const id = data.id;
    if (!id) throw formatErrorResponse({});

    delete data.id;
    return axios.put(
        '/contact/' + id,
        data,
        generateConfig({})
    )
        .then((res) => { return res.data.data })
        .catch((error) => {
            console.log(error)

            throw formatErrorResponse(error);
        });
};

export const addNewContact = async (data) => {
    console.log(data);

    return axios.post(
        '/contact',
        data,
        generateConfig({})
    )
        .then((res) => { return res.data.data })
        .catch((error) => {
            console.log(error)

            throw formatErrorResponse(error);
        });
};

export const deleteContactById = async (id) => {
    if (!id) throw formatErrorResponse({});

    return axios.delete(
        '/contact/' + id,
        generateConfig({})
    )
        .then((res) => { return res.data })
        .catch((error) => {
            console.log(error)

            throw formatErrorResponse(error);
        });
};
