import { useState } from 'react';
import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper';
import css from './CamperList.module.css';
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from '../../redux/campers/selectors';
import {
  selectImageEquipments,
  selectImageType,
} from '../../redux/filters/selectors';
import Loader from '../Loader/Loader';

const CamperList = () => {
  const campers = useSelector(selectCampers); // Получаем список "Campers"
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const selectedEquipments = useSelector(selectImageEquipments);
  const selectedType = useSelector(selectImageType);

  // Локальное состояние для отслеживания количества отображаемых элементов
  const [visibleCampers, setVisibleCampers] = useState(4); // Показываем по 4 элемента

  // Фильтрация "Campers" по выбранным фильтрам
  const filteredCampers = campers.filter(camper => {
    // Фильтрация по выбранному оборудованию (если фильтры выбраны)
    const matchEquipments = selectedEquipments.length
      ? selectedEquipments.every(equipment => camper[equipment] === true)
      : true;

    // Фильтрация по типу (если выбран тип)
    const matchType = selectedType
      ? camper.form === selectedType
      : true;

    return matchEquipments && matchType;
  });

  // Обработчик для кнопки "Load More"
  const handleLoadMore = () => {
    setVisibleCampers(prevVisibleCampers => prevVisibleCampers + 4); // Увеличиваем количество отображаемых элементов на 4
  };

  return (
    <>
      {isLoading && !error && <Loader />}
      
      <ul className={css.camperList}>
        {filteredCampers.slice(0, visibleCampers).map(camper => (
          <li key={camper.id} className={css.camperItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>

      {/* Если есть ещё элементы для отображения, показываем кнопку "Load More" */}
      {visibleCampers < filteredCampers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}

      {error && <p className={css.error}>Error loading campers: {error}</p>}
    </>
  );
};

export default CamperList;
