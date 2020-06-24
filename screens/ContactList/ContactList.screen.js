import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem } from 'react-native-elements';

import styles from './ContactList.style';


import { actions as ContactReducerActions } from '../../redux/Reducers/Contact/Contact.reducer';

const _listItemPressCallback = (props, item) => {
    return props.navigation.push('ContactDetatils', {
        itemId: item.id
    })
}

const ContactList = (props) => {

    const { getContacts, contactList } = props

    React.useEffect(() => {
        getContacts();
    }, [])

    const _listItemPressCallback = (props, item) => {
        return props.navigation.push('contactdetails', {
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
                    onPress={ () => _listItemPressCallback(props, contactDetail) }
                    bottomDivider
                />
            ))
        }
    </View >);
}


const mapStateToProps = state => ({
    contactList: state.contact.contactList,
    isLoading: state.contact.isLoading
});

const mapDispatchToProps = {
    getContacts: ContactReducerActions.getContactList,
}

// added null since there is no mapDispatchToProps for now.
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);