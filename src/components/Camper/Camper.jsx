// src/components/Contact/Contact.jsx
import { useDispatch } from 'react-redux';
import css from './Camper.module.css';
// import { deleteContact } from "../../redux/contacts/operations";
// import { MdDeleteForever } from "react-icons/md";
// import { setActiveContactId, toggleModal } from "../../redux/contacts/slice";
// import { FaPhoneAlt, FaUser } from "react-icons/fa";

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
      <div className={css.data}>
        <h3 className={css.title}>{camper.name}</h3>
        <p className={css.info}>
          {/* <FaPhoneAlt className={css.infoIcon} />  */}
          {camper.price}
        </p>
        <p></p>
      </div>
      {/* <button className={css.button} type="button" onClick={handleEdit}>
        <MdModeEdit className={css.pencil} />
      </button> */}
      {/* <button className={css.bin} type="button" onClick={handleDelete}>
        Delete
      </button> */}
    </div>
  );
};

export default Camper;
