import css from './CatalogPage.module.css';
import { fetchCatalog } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors.js';

import CamperList from '../../components/CamperList/CamperList.jsx';
// import CamperFilterList from '../../components/CamperFilterList/CamperFilterList.jsx';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
  // Проверяем, что данные "Campers" из состояния Redux загружены
  // console.log('Campers:', campers);
  // console.log('Is Loading:', isLoading);
  // console.log('Error:', error);

  return (
    <section className={css.container}>
      <aside className={css.listFilters}>
        <FilterForm></FilterForm>
      </aside>
      <div className={css.listCampers}>
        <CamperList />
      </div>
    </section>
  );
};
export default CatalogPage;
