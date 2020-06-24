import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.diiEggShell,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
        // flex: 1,
        // justifyContent: 'space-around'
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 50
    },
    searchField: {
        marginVertical: 30,
        marginHorizontal: 70,
    },
    dishIsItContainerLogo: {
        marginTop: 10,
        marginBottom: 10,
    },
    dishIsItLogo: {
        textAlign: 'center',
        transform: [{ rotate: '210deg' }, { scaleX: -1 }],
        color: Colors.diiLightSalmon
    },
});
