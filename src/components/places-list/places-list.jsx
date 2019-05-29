import React from "react";
import PropTypes from "prop-types";

import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.offers.map((offer) => {
        return <PlaceCard
          id={offer.id}
          premium={offer.premium}
          image={offer.image}
          price={offer.price}
          bookmarked={offer.bookmarked}
          rating={offer.rating}
          name={offer.name}
          type={offer.type}
          handleClick={this._handleClick}
          key={offer.id}
        />;
      })}
    </div>;
  }

  _handleClick(activeCardID) {
    this.setState({activeCard: activeCardID});
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  handleMouseOverPlace: PropTypes.func
};

export default PlacesList;
