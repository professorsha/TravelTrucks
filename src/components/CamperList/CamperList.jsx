import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper';
import css from './CamperList.module.css';
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from '../../redux/campers/selectors.js';
// import { selectFilteredCampers } from "../../redux/campers/slice";
import { InfinitySpin } from 'react-loader-spinner';

const CamperList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.camperList}>
      {/* {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFC531"
          ariaLabel="infinity-spin-loading"
        />
      )} */}
      {campers.map(camper => {
        return (
          <li key={camper.id} className={css.camperItem}>
            <Camper camper={camper} />
          </li>
        );
      })}
    </ul>
  );
};

export default CamperList;
