import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

import {offers} from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

it(`Card is clickable`, () => {
  const offer = offers.shift();
  const clickHandler = jest.fn();
  const card = mount(<PlaceCard
    id={offer.id}
    premium={offer.premium}
    image={offer.image}
    price={offer.price}
    bookmarked={offer.bookmarked}
    rating={offer.rating}
    name={offer.name}
    type={offer.type}
    handleClick={clickHandler}
    isActive={true}
  />);

  const image = card.find(`img`);
  expect(image.length).toEqual(1);
  image.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);

  // Вот эту штуку сделать нельзя, т.к. состоянием обладает только родительский
  // компонент. Либо писать e2e на родителя, либо не инспектировать тест
  // expect(placesList.state(`activeCard`)).toEqual(offer.id);
});
