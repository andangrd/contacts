import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from './Home.screen';


it(`renders correctly`, () => {
  jest.useFakeTimers()
  const tree = renderer.create(< HomeScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
