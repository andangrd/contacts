import axios from 'axios';
import { generateConfig } from '../AppApi.service';
const mockData = [
    {
        "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "age": 21,
        "photo": "N/A"
    },
    {
        "firstName": "Test",
        "lastName": "Test",
        "age": 9,
        "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        "id": "23ead070-b5b9-11ea-8b29-edbb8185346b"
    },
    {
        "firstName": "1fname",
        "lastName": "lname",
        "age": 13,
        "id": "5feda3b0-b5bc-11ea-8b29-edbb8185346b",
        "photo": "N/A"
    },
    {
        "firstName": "Test2l",
        "lastName": "Coba",
        "age": 21,
        "id": "787281e0-b5c0-11ea-8b29-edbb8185346b",
        "photo": "N/A"
    },
    {
        "firstName": "Test2",
        "lastName": "Test",
        "age": 10,
        "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        "id": "812a6910-b5c0-11ea-8b29-edbb8185346b"
    },
    {
        "firstName": "test134",
        "lastName": "coba",
        "age": 22,
        "id": "72862be0-b5c2-11ea-8b29-edbb8185346b",
        "photo": "N/A"
    },
    {
        "age": 22,
        "firstName": "Test",
        "lastName": "Coba",
        "id": "df5f7780-b5c2-11ea-8b29-edbb8185346b",
        "photo": "N/A"
    }
]
export const getContacts = async () => {
    return Promise.resolve(mockData);

    // return axios.get(
    //     '/contact',
    //     generateConfig({})
    // )
    //     .then((res) => { return res.data.data })
    //     .catch((error) => {
    //         console.log(error)
    //         const errorData = (error.response && error.response.data) || {};
    //         const status = (error.response && error.response.status) || 'Error';

    //         const formattedErrorData = {
    //             ...errorData,
    //             status
    //         }

    //         throw formattedErrorData;
    //     });
};

export const getContactDetail = async (id) => {
    console.log('HAHAHAHAHAHA ', id)

    return Promise.resolve(mockData[1]);
    return axios.get(
        '/contact/' + id,
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
