import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from '../../Themes';

export const buttonStyle = {
    marginTop: 10,
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
}

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    ...Platform.select({
        web: {
            container: {
                flex: 1,
                padding: 30,
                paddingTop: 0
            },
        }
    }),
    contentContainerStyle: {
        paddingLeft: 10
    },
    spinnerContainer: {
        textAlign: "center"
    }
});
