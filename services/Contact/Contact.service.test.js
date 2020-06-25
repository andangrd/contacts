import axios from 'axios';
import { baseUrl } from '../AppApi.service';

import { getContacts } from './Contact.service';

jest.mock('axios');

describe('contact', () => {

    jest.useFakeTimers()

    it('test axios get', async () => {

        const data = { error: true };
        axios.get.mockImplementationOnce(() => Promise.resolve(data))
        await getContacts()
        expect(axios.get).toHaveBeenCalled();
    });
});