import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useCallback } from 'react';
import css from './Camper.module.css';
import { setActiveCamperId } from '../../redux/campers/slice.js';
import { selectFavorite } from '../../redux/favorites/selectors.js';
import { toggleFavorites } from '../../redux/favorites/slice.js';
import EquipmentsList from '../EquipmentsList/EquipmentsList.jsx';

const Camper = ({ camper }) => {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  // Мемоизация для проверки избранного
  const isFavorite = useMemo(() => favorites.some((f) => f.id === camper.id), [favorites, camper.id]);

  // Мемоизированный обработчик клика по сердечку
  const handleFavoriteClick = useCallback(() => {
    dispatch(toggleFavorites(camper));
  }, [dispatch, camper]);

  // Мемоизированный обработчик для "Show more"
  const handleDetails = useCallback(() => {
    dispatch(setActiveCamperId(camper.id));
  }, [dispatch, camper.id]);

  return (
    <>
      <img
        className={css.image}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292px"
        height="320px"
      />
      <div className={css.info}>
        <div className={css.textContainer}>
          <div className={css.headerInfo}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.headerInfoRight}>
              <h2 className={css.title}>&euro;{camper.price}</h2>
              <button
                className={css.heart}
                onClick={handleFavoriteClick}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <svg
                  width="24px"
                  height="24px"
                  className={isFavorite ? css.filledHeart : css.emptyHeart}
                >
                  <use href="/images/icons.svg#iconHeart" />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.details}>
            <div className={css.reviews}>
              <FaStar className={css.activeStar} />
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <svg width="16px" height="16px">
                <use href="/images/icons.svg#iconMap"></use>
              </svg>
              <span>{camper.location}</span>
            </div>
          </div>
        </div>
        <p>{camper.description}</p>
        <EquipmentsList/>
        <NavLink to={`/catalog/${camper.id}`} target="blank">
          <button type="button" className={css.button} onClick={handleDetails}>
            Show more
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Camper;
