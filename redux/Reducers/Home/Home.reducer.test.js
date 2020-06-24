import reducer, {
    actionTypes,
    initialState
} from './Home.reducer';

describe('Home Redux Reducer', () => {
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

    describe('handle HOME/SET_WELCOME_MESSAGE', () => {
        test('HOME/SET_WELCOME_MESSAGE', () => {
            expect(reducer(initialState, {
                type: actionTypes.SET_WELCOME_MESSAGE,
                payload: 'abcd'
            })).toEqual({
                ...initialState,
                welcomeMessage: 'abcd'
            });
        });
    });

});
