import Layout from './Layout';

describe('Layout test', () => {
    const actual = Layout.window.width;
    test(`window widht`, () => {
        expect(actual).not.toBeNull();
        expect(actual).toBeDefined();
        expect(actual).not.toBeUndefined();
        expect(actual).toBeTruthy();
        expect(actual).not.toBeFalsy();
    });
});

describe('Layout height', () => {
    const actual = Layout.window.height;
    test(`window height`, () => {
        expect(actual).not.toBeNull();
        expect(actual).toBeDefined();
        expect(actual).not.toBeUndefined();
        expect(actual).toBeTruthy();
        expect(actual).not.toBeFalsy();
    });
});
