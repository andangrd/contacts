import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../Themes';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './ContactDetails.style';


import { actions as ContactReducerActions } from '../../redux/Reducers/Contact/Contact.reducer';



const ContactDetails = (props) => {

    const { getContactDetails, contactDetails, route, navigation } = props;
    const { contactId } = route.params;

    React.useEffect(() => {
        (contactId != '0') && getContactDetails(contactId);
    }, [])


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Contact Detail',
            headerRight: () => (
                <View style={ { marginRight: 10 } }>
                    <Button
                        onPress={ () => navigation.push('contactdetailsedit', {
                            contactId
                        }) }
                        title="Edit"
                        color={ Colors.diiLightSalmon }
                    />
                </View>

            ),
        });
    }, [navigation]);
    console.log(contactDetails.photo);

    return (< View style={ styles.container } >

        <ScrollView keyboardShouldPersistTaps='handled' >
            <View style={ styles.contactContainer }>
                <Image
                    resizeMode="cover"
                    style={ styles.imageProfile }
                    source={ { uri: contactDetails.photo } }
                />
                <Text style={ styles.accountName }
                    testID={ `name-account-detail` }
                    accessibilityLabel={ `name-account-detail` }
                >
                    { contactDetails.firstName + ' ' + contactDetails.lastName }
                </Text>
            </View>

            <RenderDetails contactDetails={ contactDetails } />
        </ScrollView>
    </View >);
}


const RenderDetails = ({ contactDetails }) => {
    const restrictedData = ['photo', 'id'];

    return (<View >
        {
            Object.keys(contactDetails).map((fieldName, i) => (
                !restrictedData.includes(fieldName)
                && <ListItem
                    key={ fieldName + i }
                    title={ fieldName }
                    titleStyle={ styles.titleStyle }
                    subtitle={ contactDetails[fieldName].toString() }
                    subtitleStyle={ styles.subtitleStyle }
                    contentContainerStyle={ styles.contentContainerStyle }
                    bottomDivider
                />
            ))
        }
    </View>)
}

// ContactDetails.navigationOptions = screenProps => ({

// })

const mapStateToProps = state => ({
    contactDetails: state.contact.contactDetails,
    isLoading: state.contact.isLoading
});

const mapDispatchToProps = {
    getContactDetails: ContactReducerActions.getContactDetails,
}

// added null since there is no mapDispatchToProps for now.
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);