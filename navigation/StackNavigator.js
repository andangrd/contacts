import React from 'react';
import { TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './Screens';
import { Colors } from '../Themes';
import HomeScreen from '../screens/HomeScreen/Home.screen';



const Stack = createStackNavigator();

export function StactNavigator(props) {
    return (
        <Stack.Navigator>

            <Stack.Screen name="contact" options={ { title: 'Contacts' } } component={ HomeScreen } />
            <Stack.Screen name={ Screens.HomeScreen } options={ { title: 'Contacts' } } component={ HomeScreen } />



        </Stack.Navigator>
    )
}


// added null since there is no mapDispatchToProps for now.
export default StactNavigator;