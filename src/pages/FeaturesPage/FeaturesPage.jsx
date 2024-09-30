import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogById } from '../../redux/campers/operations.js';
import { selectActiveCamperId } from '../../redux/campers/selectors.js';
import css from './FeaturesPage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import Equipment from '../../components/Equipment/Equipment.jsx';
const capitalizeFirstLetter = string => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FeaturePage = () => {
  const { id } = useParams();
  const selectedActive = useSelector(selectActiveCamperId);
  console.log(selectedActive);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogById(id));
  }, [dispatch, id]);

  if (!selectedActive) {
    return <Loader />; // Если данные ещё не загружены, показываем загрузочный индикатор
  }

  return (
    <>
    <Equipment camper={selectedActive}/>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.detailsWrap}>
        <li className={css.details}>
          <p className={css.text}>Form</p>
          <span className={css.value}>
            {capitalizeFirstLetter(selectedActive.form)}
          </span>
        </li>
        <li className={css.details}>
          <p className={css.text}>Length</p>
          <span className={css.value}>{selectedActive.length}</span>
        </li>
        <li className={css.details}>
          <p className={css.text}>Width</p>
          <span className={css.value}>{selectedActive.width}</span>
        </li>
        <li className={css.details}>
          <p className={css.text}>Height</p>
          <span className={css.value}>{selectedActive.height}</span>
        </li>
        <li className={css.details}>
          <p className={css.text}>Tank</p>
          <span className={css.value}>{selectedActive.tank}</span>
        </li>
        <li className={css.details}>
          <p className={css.text}>Consumption</p>
          <span className={css.value}>{selectedActive.consumption}</span>
        </li>
      </ul>
    </>
  );
};
export default FeaturePage;
