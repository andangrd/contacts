import { Platform } from 'react-native';
import { isAndroid, isIOS, isNative, isTestingNative, isWeb } from './platform.utils';


describe('Platform utils ', () => {

    describe('isAndroid ', () => {
        test('Should return true if correct os', () => {
            Platform.OS = 'android';

            expect(isAndroid()).toBe(true);
        });
        test('Should return false if correct os', () => {
            Platform.OS = 'ios';

            expect(isAndroid()).toBe(false);
        });
    });

    describe('isIOS ', () => {
        test('Should return true if correct os', () => {
            Platform.OS = 'ios';

            expect(isIOS()).toBe(true);
        });
        test('Should return false if correct os', () => {
            Platform.OS = 'android';

            expect(isIOS()).toBe(false);
        });
    });
    describe('isNative ', () => {
        test('Should return true if correct native os is android', () => {
            Platform.OS = 'android';

            expect(isNative()).toBe(true);
        });
        test('Should return true if correct native os is ios', () => {
            Platform.OS = 'ios';

            expect(isNative()).toBe(true);
        });
        test('Should return false if correct native os is web', () => {
            Platform.OS = 'web';

            expect(isNative()).toBe(false);
        });
    });
    describe('isWeb ', () => {
        test('Should return true if correct os', () => {
            Platform.OS = 'web';

            expect(isWeb()).toBe(true);
        });
        test('Should return false if correct os', () => {
            Platform.OS = 'ios';

            expect(isWeb()).toBe(false);
        });
    });
    describe('isTestingNative ', () => {
        test('Should return true if correct os', () => {
            Platform.Version = 8.2;

            expect(isTestingNative()).toBe(true);
        });
    });
})