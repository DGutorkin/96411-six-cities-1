import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

import {cardsData} from '../../data.js';

Enzyme.configure({adapter: new Adapter()});

it(`Card is clickable`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<PlaceCard
    premium={cardsData[0].premium}
    image={cardsData[0].image}
    price={cardsData[0].price}
    bookmarked={cardsData[0].bookmarked}
    rating={cardsData[0].rating}
    name={cardsData[0].name}
    type={cardsData[0].type}
    onClickBookmark={clickHandler}
  />);

  const bookmarkBtn = card.find(`button`);
  expect(bookmarkBtn.length).toEqual(1);
  bookmarkBtn.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
