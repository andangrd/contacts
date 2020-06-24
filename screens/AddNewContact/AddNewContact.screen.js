import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ScrollView } from 'react-native-gesture-handler';

import { Colors } from '../../Themes';
import styles from './AddNewContact.style';


import { actions as ContactReducerActions } from '../../redux/Reducers/Contact/Contact.reducer';
import { getContacts } from '../../services/Contact/Contact.service';



const AddNewContact = (props) => {

    const { saveNewContact, newContactData, getContacts, navigation } = props;

    const [formData, setFormData] = React.useState({});

    const saveNewContactCallBack = () => saveNewContact(formData).then(() => {
        getContacts();
        navigation.goBack();
    });

    const handleChange = (key, value) => {
        const contactDetailsCopy = { ...formData };
        contactDetailsCopy[key] = value;
        setFormData(contactDetailsCopy);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Contact',
            headerRight: () => (<View style={ { marginRight: 10 } }>
                <Button
                    onPress={ saveNewContactCallBack }
                    title="Save"
                    color={ Colors.diiDarkSeaGreen }
                />
            </View>
            ),
        });
    }, [navigation, formData]);

    return (< View style={ styles.container } >

        <ScrollView keyboardShouldPersistTaps='handled' >
            <View style={ styles.contactContainer }>
                <Text style={ styles.accountName }
                > Input New Contact Data
                </Text>
            </View>

            <RenderDetails newContactData={ newContactData } handleChange={ handleChange } />
        </ScrollView>
    </View >);
}


const RenderDetails = ({ newContactData, handleChange }) => {

    return (<View style={ styles.formContainer } >
        {
            Object.keys(newContactData).map((fieldName, i) => (
                <Input
                    key={ fieldName + i }
                    label={ fieldName }
                    defaultValue={ newContactData[fieldName].toString() }
                    onChangeText={ text => handleChange(fieldName, text) }
                />
            ))
        }
    </View>)
}

const mapStateToProps = state => ({
    newContactData: state.contact.newContactData,
    isLoading: state.contact.isLoading
});

const mapDispatchToProps = {
    saveNewContact: ContactReducerActions.saveNewContact,
    getContacts: ContactReducerActions.getContactList,
}

// added null since there is no mapDispatchToProps for now.
export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);