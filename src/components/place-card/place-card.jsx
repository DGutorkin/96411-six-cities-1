import React from "react";
import PropTypes from "prop-types";

const PlaceCard = (props) => {

  const cardClassList = props.isActive
    ? `cities__place-card place-card active`
    : `cities__place-card place-card`;

  const activeBookmarkClass = `place-card__bookmark-button--active`;

  const bookmarkClassList = props.bookmarked
    ? `place-card__bookmark-button button ${activeBookmarkClass}`
    : `place-card__bookmark-button button`;

  return <article className={cardClassList}>
    {props.premium ? <div className="place-card__mark"> <span>Premium</span></div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={props.image} width="260" height="200" alt="Place image" onClick={() => {
          props.handleClick(props.id);
        }}/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClassList} onClick={ (evt) => evt.currentTarget.classList.toggle(activeBookmarkClass) } type="button">
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

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  premium: PropTypes.bool,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookmarked: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
};

export default PlaceCard;
