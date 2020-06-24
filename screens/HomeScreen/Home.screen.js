

// import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Home.screen.style';


export function HomeScreen(props) {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer } keyboardShouldPersistTaps='handled' >
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
