import css from './CatalogPage.module.css';
import { fetchCatalog } from '../../redux/campers/operations.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import CamperList from '../../components/CamperList/CamperList.jsx';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

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
