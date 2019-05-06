/**
 * Парсер страницы с объявлениями
 * @function parsePlaces
 * @return {Array} - возвращает массив данных для рендеринга объявлений
 */
export const parsePlaces = () => {
  return [...document.querySelectorAll(`.place-card`)].map((card) => {
    const bookmarkBtn = card.querySelector(`.place-card__bookmark-button`);
    const ratingWidth = card.querySelector(`.rating__stars span:first-child`).style.width;
    const imgSrc = card.querySelector(`.place-card__image`).src;
    return {
      premium: card.querySelector(`.place-card__mark`) ? true : false,
      image: imgSrc.replace(window.location.href, ``),
      price: parseInt(card.querySelector(`.place-card__price-value`).innerText.replace(`€`, ``), 10),
      bookmarked: bookmarkBtn.classList.contains(`place-card__bookmark-button--active`) ? true : false,
      rating: parseInt(ratingWidth.replace(`%`, ``), 10),
      name: card.querySelector(`.place-card__name a`).innerText,
      type: card.querySelector(`.place-card__type`).innerText
    };
  });
};
