import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

import {offers} from '../../mocks/offers.js';

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      id={offers[0].id}
      premium={offers[0].premium}
      image={offers[0].image}
      price={offers[0].price}
      bookmarked={offers[0].bookmarked}
      rating={offers[0].rating}
      name={offers[0].name}
      type={offers[0].type}
      isActive={true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
