import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {offers} from '../../mocks/offers.js';

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main offers={offers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
