import React from "react";
import PropTypes from "prop-types";

const PlaceCard = (props) => {

  PlaceCard.propTypes = {
    premium: PropTypes.bool,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  const bookmarkClasses = [`place-card__bookmark-button`, `button`];
  if (props.bookmarked) {
    bookmarkClasses.push(`place-card__bookmark-button--active`);
  }

  return <article className="cities__place-card place-card">
    {props.premium ? <div className="place-card__mark"> <span>Premium</span></div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={props.image} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClasses.join(` `)} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{props.bookmarked ? `To` : `In`} bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: props.rating + `%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{props.name}</a>
      </h2>
      <p className="place-card__type">{props.type}</p>
    </div>
  </article>;
};
export default PlaceCard;
