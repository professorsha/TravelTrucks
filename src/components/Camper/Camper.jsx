import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './Camper.module.css';
// import { deleteContact } from "../../redux/contacts/operations";
// import { MdDeleteForever } from "react-icons/md";
// import { setActiveContactId, toggleModal } from "../../redux/contacts/slice";

const Camper = ({ camper }) => {
  //   const dispatch = useDispatch();

  //   const handleDelete = () => {
  //     dispatch(deleteContact(id));
  //   };

  // const handleEdit = () => {
  //   dispatch(setActiveContactId(id));
  //   dispatch(toggleModal());
  // };

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
            <span className={css.price}>;&euro{camper.price}</span>
            <svg width="32px" height="32px" className={css.favorite}>
              <use href="/images/icons.svg#iconHeart"></use>
            </svg>
          </div>
          <div>
          <svg width="32px" height="32px">
              <use href="../../../public/images/icons.svg#"></use>
            </svg>
            <span>
              {camper.rating} ({camper.reviews.lenght}Reviews)
            </span>
            <svg width="32px" height="32px">
              <use href="../../../public/images/icons.svg#"></use>
            </svg>
            <span>{camper.location}</span>
          </div>
          <p>{camper.description}</p>
        </div>
      </div>
      <button type="submit" className={css.button}>
        <NavLink to={`/catalog/${camper.id}`}>Show more</NavLink>
      </button>
    </div>
  );
};

export default Camper;
