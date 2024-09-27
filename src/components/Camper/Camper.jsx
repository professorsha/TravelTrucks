import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './Camper.module.css';
import { setActiveCamperId } from '../../redux/campers/slice.js';

const Camper = ({ camper }) => {
  const dispatch = useDispatch();

  // Обработчик для клика по кнопке "Show more"
  const handleDetails = () => {
    dispatch(setActiveCamperId(camper.id)); // Устанавливаем активный ID
  };

  return (
    <div className={css.camper}>
      <img
        className={css.image}
        src={camper.gallery[0].thumb}
        alt=""
        width="292px"
        height="320px"
      />
      <div className={css.info}>
        <div className={css.textContainer}>
          <div>
            <h3 className={css.title}>{camper.name}</h3>
            <span className={css.price}>&euro;{camper.price}</span>
            <svg width="32px" height="32px" className={css.favorite}>
              <use href="/images/icons.svg#iconHeart"></use>
            </svg>
          </div>
          <div>
            <svg width="32px" height="32px">
              <use href="../../../public/images/icons.svg#"></use>
            </svg>
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
            <svg width="32px" height="32px">
              <use href="../../../public/images/icons.svg#"></use>
            </svg>
            <span>{camper.location}</span>
          </div>
          <p>{camper.description}</p>
        </div>
      </div>

      {/* Переход по ссылке */}
      <NavLink to={`/catalog/${camper.id}`}>
        <button type="button" className={css.button} onClick={handleDetails}>
          Show more
        </button>
      </NavLink>
    </div>
  );
};

export default Camper;
