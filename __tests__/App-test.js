import * as React from "react";

import { act, create } from "react-test-renderer";

import App from "../App";


jest.mock("expo", () => ({
  Linking: {
    makeUrl: () => "/"
  },
  SplashScreen: {
    preventAutoHide: () => 'preventAutoHide',
    hide: () => 'hide',
  },
}));
jest.mock("@react-navigation/stack", () => ({
  createStackNavigator: () => ({
    Navigator: () => "Navigator",
    Screen: () => "Screen"
  })
}));
jest.mock("../navigation/BottomTabNavigator", () => "BottomTabNavigator");
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');


describe("App", () => {
  jest.useFakeTimers();
  let component;

  // keys are date and order-of-test based, so just removed them
  const filterKeys = (state) => {
    if (state.routes) {
      return {
        ...state,
        routes: state.routes.map((route) => {
          const { key, ...others } = route
          return filterKeys(others);
        }),
      }
    }
    return state;
  };

  it(`renders the loading screen`, async () => {
    // act is used to prevent snapshot returning null
    await act(async () => {
      component = create(<App />);
    });
    expect(component).toMatchSnapshot();
  });
});