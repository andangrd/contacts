import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import api from '../../config/index';
import { pathGenerator, baseUrl } from '../AppApi.service';

import { getSuggestion } from './Contact.service';

jest.mock('axios');

describe('homeApi', () => {

    jest.useFakeTimers()

    it('test axios get', async () => {

        const data = { error: true };
        axios.get.mockImplementationOnce(() => Promise.resolve(data))
        await getSuggestion('gar')
        expect(axios.get).toHaveBeenCalled();
    });

    it('test axios get', async () => {

        const data = {
            response: {
                data: { test: 'test' },
                status: 200
            }
        };
        axios.get.mockImplementationOnce(() => Promise.reject(data))
        return getSuggestion('gar').catch((error) => {
            console.log(error);

            expect(error).toEqual({ ...data.response.data, status: data.response.status })
        })
    });

});