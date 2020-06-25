import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem } from 'react-native-elements';

import styles from './ContactList.style';
import { Colors } from '../../Themes';


import { actions as ContactReducerActions } from '../../redux/Reducers/Contact/Contact.reducer';


const ContactList = (props) => {

    const { getContacts, contactList, deleteContact, navigation } = props

    React.useEffect(() => {
        getContacts()
    }, [])


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<View style={ { marginRight: 10 } }>
                <Button
                    onPress={ () => navigation.navigate('addnewcontact') }
                    title="Add New"
                    color={ Colors.diiFacebookBlue }
                />
            </View>
            ),
        });
    }, [navigation]);

    const _listItemPressCallback = (props, item) => {
        return props.navigation.navigate('contactdetails', {
            contactId: item.id
        })
    }

    return (< View style={ styles.container } >
        {/* for web, need to add isLoading checking separately */ }
        { props.isLoading &&
            <View style={ styles.spinnerContainer } >
                <Spinner />
            </View>
        }
        {
            contactList.map((contactDetail, i) => (
                <ListItem
                    key={ i }
                    leftAvatar={ { source: { uri: contactDetail.photo } } }
                    title={ contactDetail.firstName }
                    contentContainerStyle={ styles.contentContainerStyle }
                    rightTitle={ <DeletButton
                        deleteContact={ deleteContact }
                        contactId={ contactDetail.id }
                        refreshScreen={ getContacts }
                    /> }
                    onPress={ () => _listItemPressCallback(props, contactDetail) }
                    bottomDivider
                />
            ))
        }
    </View >);
}

const DeletButton = (props) => {
    return (<Button
        color={ Colors.diiOrangeRed }
        title='Delete'
        onPress={ () => props.deleteContact(props.contactId).then(() => props.refreshScreen()) }
    />)
}


const mapStateToProps = state => ({
    contactList: state.contact.contactList,
    isLoading: state.contact.isLoading
});

const mapDispatchToProps = {
    getContacts: ContactReducerActions.getContactList,
    deleteContact: ContactReducerActions.deleteContact,
}

// added null since there is no mapDispatchToProps for now.
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);