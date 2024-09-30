import css from './EquipmentsList.module.css';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from '../../redux/campers/selectors';
import Equipment from '../../components/Equipment/Equipment';

export default function EquipmentsList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);
  // console.log();

  return (
    <>
      <ul className={css.badgesContainer}>
        {isLoading && !error && <Loader />}

        {campers.map(camper => {
          return (
            <li key={camper.id} className={css.camperItem}>
              <Equipment camper={camper} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
