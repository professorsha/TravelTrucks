import css from './CatalogPage.module.css';
import { fetchCatalog } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors.js';
import { InfinitySpin } from 'react-loader-spinner';
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

  return (
    <main className={css.container}>
      <aside className={css.list}>
        <FilterForm></FilterForm>
      </aside>
      {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFC531"
          ariaLabel="infinity-spin-loading"
        />
      )}
      <div className={css.listCampers}>
        <CamperList campers={campers} />
      </div>
    </main>
  );
};
export default CatalogPage;
