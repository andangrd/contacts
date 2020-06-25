import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './Screens';
import { Colors } from '../Themes';
import HomeScreen from '../screens/HomeScreen/Home.screen';
import ContacDetails from '../screens/ContactDetails/ContactDetails.screen';
import ContactDetailsEdit from '../screens/ContactDetailsEdit/ContactDetailsEdit.screen';
import AddNewContact from '../screens/AddNewContact/AddNewContact.screen';



const Stack = createStackNavigator();

export function StactNavigator(props) {
    return (
        <Stack.Navigator>

            <Stack.Screen name="root" options={ { title: 'Contacts' } } component={ HomeScreen } />
            <Stack.Screen name={ Screens.HomeScreen } options={ { title: 'Contacts' } } component={ HomeScreen } />
            <Stack.Screen
                name={ Screens.ContacDetails }
                component={ ContacDetails }

            />
            <Stack.Screen
                name={ Screens.ContactDetailsEdit }
                component={ ContactDetailsEdit }

            />
            <Stack.Screen
                name={ Screens.AddNewContact }
                component={ AddNewContact }

            />


        </Stack.Navigator>
    )
}


// added null since there is no mapDispatchToProps for now.
export default StactNavigator;