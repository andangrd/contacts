import Images from './Images';

describe('robot_dev image', () => {
    const actual = Images.robot_prod;
    const expected = require('../assets/images/robot-dev.png');

    test(`robot_dev expected robot-dev.png`, () => {
        expect(actual).toBe(expected);
        expect(actual).not.toBeNull();
        expect(actual).toBeDefined();
        expect(actual).not.toBeUndefined();
    });
});

describe('robot_prod image', () => {
    const actual = Images.robot_prod;
    const expected = require('../assets/images/robot-prod.png');

    test(`robot_prod expected robot-prod.png`, () => {
        expect(actual).toBe(expected);
        expect(actual).not.toBeNull();
        expect(actual).toBeDefined();
        expect(actual).not.toBeUndefined();
    });
});
