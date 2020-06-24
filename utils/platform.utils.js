import { Platform } from 'react-native';

export const isAndroid = () => Platform.OS === "android";
export const isIOS = () => Platform.OS === "ios";
export const isNative = () =>
    Platform.OS === "android" || Platform.OS === "ios";
export const isTestingNative = () => {
    let OsVersion;
    try {
        OsVersion = Platform.Version;
    } catch (err) {
        OsVersion = undefined;
    }
    return !OsVersion;
};
export const isWeb = () => Platform.OS === "web";

export default {
    isAndroid,
    isIOS,
    isNative,
    isTestingNative,
    isWeb
};
