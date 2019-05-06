import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import {cardsData} from '../../data.js';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App cardsData={cardsData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
