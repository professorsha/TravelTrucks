import { NavLink } from 'react-router-dom';
import star from '../../images/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import css from './Camper.module.css';
import { setActiveCamperId } from '../../redux/campers/slice.js';
import { selectActiveCamperId } from '../../redux/campers/selectors.js';
const Camper = ({ camper }) => {
  const dispatch = useDispatch();
  const active = useSelector(selectActiveCamperId);
  // Обработчик для клика по кнопке "Show more"
  const handleDetails = () => {
    dispatch(setActiveCamperId(camper.id)); // Устанавливаем активный ID
  };
  // console.log({selectActiveCamperId});

  return (
    <>
      <img
        className={css.image}
        src={camper.gallery[0].original}
        alt=""
        width="292px"
        height="320px"
      />
      <div className={css.info}>
        <div className={css.textContainer}>
          <div className={css.headerInfo}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.headerInfoRight}>
              <h2 className={css.title}>&euro;{camper.price}</h2>
              <svg width="24px" height="24px" className={css.favorite}>
                <use href="/images/icons.svg#iconHeart"></use>
              </svg>
            </div>
          </div>
          <div className={css.details}>
            <div className={css.reviews}>
              <svg width="16px" height="16px">
                <use href="/images/icons.svg#iconStar"></use>
              </svg>
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
