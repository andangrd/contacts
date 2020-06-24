import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ScrollView } from 'react-native-gesture-handler';

import { Colors } from '../../Themes';
import styles from './ContactDetailsEdit.style';


import { actions as ContactReducerActions } from '../../redux/Reducers/Contact/Contact.reducer';



const ContactDetailsEdit = (props) => {

    const { getContactDetails, contactDetails, route, navigation, updateContact } = props;
    const { contactId } = route.params;

    const [formData, setFormData] = React.useState({});

    const updateContactDetails = () => updateContact(formData).then(() => navigation.goBack());

    const handleChange = (key, value) => {
        const contactDetailsCopy = { ...contactDetails };
        contactDetailsCopy[key] = value;
        setFormData(contactDetailsCopy);
    };

    React.useEffect(() => {
        (contactId != '0') && getContactDetails(contactId);
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Contact Detail',
            headerRight: () => (<View style={ { marginRight: 10 } }>
                <Button
                    onPress={ updateContactDetails }
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

            <RenderDetails contactDetails={ contactDetails } handleChange={ handleChange } />
        </ScrollView>
    </View >);
}


const RenderDetails = ({ contactDetails, handleChange }) => {
    const restrictedData = ['photo', 'id'];

    return (<View style={ styles.formContainer } >
        {
            Object.keys(contactDetails).map((fieldName, i) => (
                !restrictedData.includes(fieldName)
                && <Input
                    key={ fieldName + i }
                    label={ fieldName }
                    defaultValue={ contactDetails[fieldName].toString() }
                    onChangeText={ text => handleChange(fieldName, text) }
                />
            ))
        }
    </View>)
}

const mapStateToProps = state => ({
    contactDetails: state.contact.contactDetails,
    isLoading: state.contact.isLoading
});

const mapDispatchToProps = {
    getContactDetails: ContactReducerActions.getContactDetails,
    updateContact: ContactReducerActions.updateContact
}

// added null since there is no mapDispatchToProps for now.
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsEdit);