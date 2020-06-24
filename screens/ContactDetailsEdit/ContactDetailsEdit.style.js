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

    ...Platform.select({
        web: {
            container: {
                flex: 1,
                backgroundColor: Colors.diiEggShell,
                padding: 30
            },
        },
        android: {
            container: {
                padding: 10,
                flex: 1,
                backgroundColor: Colors.diiEggShell,
            },
        }
    }),
    formContainer: {
        backgroundColor: '#fff',
        padding: 20
    },
    contactContainer: {
        paddingTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    imageProfile: {
        top: 0,
        width: 157,
        height: 157,
        borderRadius: 100,
        left: 0
    },
    accountName: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 38,
        color: Colors.white,
        marginTop: 30
    },
    contentContainerStyle: {
        paddingLeft: 10
    },
    titleStyle: {
        fontSize: 18,
        color: Colors.diiFieldGrey
    },
    subtitleStyle: {
        fontSize: 24,
        color: '#000'
    },
    spinnerContainer: {
        alignSelf: "center"
    },
    spinnerTextStyle: {
        color: '#000'
    },
    listContainer: {
        marginTop: 30
    },
});
