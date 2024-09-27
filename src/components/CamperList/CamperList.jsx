import { useState } from 'react';
import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper';
import css from './CamperList.module.css';
import {
  selectError,
  selectIsLoading,
  selectCampers,
} from '../../redux/campers/selectors';
import { InfinitySpin } from 'react-loader-spinner';

const CamperList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

  // Локальное состояние для отслеживания количества отображаемых элементов
  const [visibleCampers, setVisibleCampers] = useState(4); // Начальное количество элементов

  // Обработчик для кнопки "Load More"
  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 5); // Увеличиваем на 5 элементов
  };

  return (
    <div>
      {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFC531"
          ariaLabel="infinity-spin-loading"
        />
      )}

      <ul className={css.camperList}>
        {campers.slice(0, visibleCampers).map((camper) => (
          <li key={camper.id} className={css.camperItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>

      {/* Если есть ещё элементы для отображения, показываем кнопку "Load More" */}
      {visibleCampers < campers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}

      {error && <p className={css.error}>Error loading campers: {error}</p>}
    </div>
  );
};

export default CamperList;
