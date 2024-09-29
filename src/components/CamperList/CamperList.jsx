// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Camper from '../Camper/Camper';
// import css from './CamperList.module.css';
// import {
//   selectError,
//   selectIsLoading,
//   selectCampers,
// } from '../../redux/campers/selectors';
// import {
//   selectImageEquipments,
//   selectImageType,
// } from '../../redux/filters/selectors';
// import { InfinitySpin } from 'react-loader-spinner';

// const CamperList = () => {
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const campers = useSelector(selectCampers);
//   // Получаем выбранные фильтры из слайса filters
//   const selectedEquipments = useSelector(selectImageEquipments);
//   const selectedType = useSelector(selectImageType);
//   // const gallery = useSelector(selectGallery);
//   //  Проверяем, что данные "Campers" из состояния Redux загружены
//   // console.log('Campers:', campers);
//   // console.log('Is Loading:', isLoading);
//   // console.log('gallery:', gallery);
// // Фильтрация "Campers" по выбранным фильтрам
// const filteredCampers = campers.filter(camper => {
//   // Фильтрация по выбранному оборудованию (если фильтры выбраны)
//   const matchEquipments = selectedEquipments.length
//     ? selectedEquipments.every(equipment => camper.imageEquipments.includes(equipment))
//     : true;  // Если фильтры не выбраны, не фильтруем

//   // Фильтрация по типу (если выбран тип)
//   const matchType = selectedType
//     ? camper.imageType === selectedType
//     : true;  // Если тип не выбран, не фильтруем

//   return matchEquipments && matchType;  // Кампер должен удовлетворять обоим условиям
// });
//   // Локальное состояние для отслеживания количества отображаемых элементов
//   const [visibleCampers, setVisibleCampers] = useState(4); // Начальное количество элементов

//   // Обработчик для кнопки "Load More"
//   const handleLoadMore = () => {
//     setVisibleCampers(prevVisibleCampers => prevVisibleCampers + 4); // Увеличиваем на 5 элементов
//   };

//   return (
//     <>
//       {/* {isLoading && !error && (
//         <InfinitySpin
//           visible={true}
//           width="200"
//           color="#FFC531"
//           ariaLabel="infinity-spin-loading"
//         />
//       )} */}

// <ul className={css.camperList}>
//       {filteredCampers.map(camper => (
//         <li key={camper.id} className={css.camperItem}>
//           <Camper camper={camper} />
//         </li>
//       ))}
//     </ul>

//       {/* Если есть ещё элементы для отображения, показываем кнопку "Load More" */}
//       {visibleCampers < campers.length && (
//         <button onClick={handleLoadMore} className={css.loadMoreBtn}>
//           Load More
//         </button>
//       )}

//       {error && <p className={css.error}>Error loading campers: {error}</p>}
//     </>
//   );
// };

// export default CamperList;

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
// import { InfinitySpin } from 'react-loader-spinner';
import Loader from '../Loader/Loader';

const CamperList = () => {
  const campers = useSelector(selectCampers); // Получаем список "Campers"
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // Получаем выбранные фильтры из слайса filters
  const selectedEquipments = useSelector(selectImageEquipments);
  const selectedType = useSelector(selectImageType);

  // Фильтрация "Campers" по выбранным фильтрам
  const filteredCampers = campers.filter(camper => {
    // Фильтрация по выбранному оборудованию (если фильтры выбраны)
    const matchEquipments = selectedEquipments.length
      ? selectedEquipments.every(equipment => camper[equipment] === true) // Проверка по булевым значениям
      : true; // Если фильтры не выбраны, не фильтруем

    // Фильтрация по типу (если выбран тип)
    const matchType = selectedType
      ? camper.form === selectedType // Обратите внимание, что используется поле "form"
      : true; // Если тип не выбран, не фильтруем

    return matchEquipments && matchType; // Кампер должен удовлетворять обоим условиям
  });

  return (
    <>
      {isLoading && !error && (
        <Loader/>
      )}
      <ul className={css.camperList}>
        {filteredCampers.map(camper => (
          <li key={camper.id} className={css.camperItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CamperList;
