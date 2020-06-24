import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { connect } from 'react-redux';

import {
  actions as AuthenticationActions
} from '../redux/Reducers/Authentication/Authentication.reducer';

import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import LoginScreen from '../screens/LoginScreen/Login.screen';
import LinksScreen from '../screens/LinkScreen/Links.screen';
import HomeScreen from '../screens/HomeScreen/Home.screen';
import AccountDetailsScreen from '../screens/AcoountDetailsScreen/AccountDetails.screen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export function BottomTabNavigator({ navigation, route, isTokenExist, ...resProps }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  React.useEffect(() => {
    isTokenExist();
  }, []);

  return (
    <BottomTab.Navigator initialRouteName={ INITIAL_ROUTE_NAME }>

      <BottomTab.Screen
        name="ShareRecipe"
        component={ (resProps.isLoggedIn) ? LinksScreen : LoginScreen }
        options={ {
          title: 'My Recipes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="th-list" />,
        } }
      />
      <BottomTab.Screen
        name="Home"
        component={ HomeScreen }
        options={ {
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="search" />,
        } }
      />
      <BottomTab.Screen
        name="Profile"
        component={ (resProps.isLoggedIn) ? AccountDetailsScreen : LoginScreen }
        options={ {
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="user" />,
        } }
      />
    </BottomTab.Navigator >
  );
}

export function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Search':
      return 'Get the best Recipes';
    case 'ShareRecipe':
      return 'Share Recipe';
    case 'Profile':
      return 'User Profile';
    case 'Login':
      return 'User Login';
  }
}


const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

const mapDispatchToProps = {
  isTokenExist: AuthenticationActions.isTokenExist
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigator);