import reducer, {
    actionTypes,
    initialState
} from './Contact.reducer';

describe('Contact Redux Reducer', () => {
    const spies = {
        goBack: jest.fn(),
        dispatch: jest.fn()
    };

    beforeEach(() => {
        spies.dispatch.mockClear();
        spies.goBack.mockClear();
    });

    describe('Reducer', () => {
        test('Should be a function.', () => {
            expect(reducer).toBeDefined();
        });

        test('Shoud initialize with a state', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        });

        test('Should return the previous state if an action was not matched.', () => {
            let state = reducer(undefined, {});
            expect(state).toEqual(initialState);
            state = reducer(state, { type: '@@@@@@@' });
            expect(state).toEqual(initialState);
        });
    });

});
