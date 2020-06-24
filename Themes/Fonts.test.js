import Fonts from './Fonts';

describe('Fonts Type', () => {
    //mock expected data
    const expectedType = {
        robotoRegular: 'roboto-regular',
        alataRegular: 'alata-regular'
    };

    const actualType = Fonts.type;
    Object.keys(actualType).forEach((key) => {
        const actual = actualType[key];
        const expected = expectedType[key];

        test(`Type '${key}' must be '${expected}'`, () => {
            expect(actual).toBe(expected);
            expect(actual).not.toBeNull();
            expect(actual).toBeDefined();
            expect(actual).not.toBeUndefined();
        });
    });

});

