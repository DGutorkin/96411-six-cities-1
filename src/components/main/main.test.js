import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {cardsData} from '../../data.js';

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main cardsData={cardsData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
