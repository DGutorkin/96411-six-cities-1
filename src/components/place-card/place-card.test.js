import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

import {cardsData} from '../../data.js';

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      premium={cardsData[0].premium}
      image={cardsData[0].image}
      price={cardsData[0].price}
      bookmarked={cardsData[0].bookmarked}
      rating={cardsData[0].rating}
      name={cardsData[0].name}
      type={cardsData[0].type}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
