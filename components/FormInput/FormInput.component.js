import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

// import styles from './FormInput.style';

const InputField = (props) => {

    const { label, errorMessage, onChangeText, ...restProps } = props;

    return (
        <View >
            { label && <FormLabel>{ label }</FormLabel> }
            <FormInput onChangeText={ onChangeText } { ...restProps } />
            { errorMessage && <FormValidationMessage>{ errorMessage }</FormValidationMessage> }
        </View>
    )
}

export default InputField
