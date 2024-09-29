import { useState, useEffect, Suspense,lazy } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { fetchCatalogById } from '../../redux/campers/operations.js';
import {selectActiveCamperId} from '../../redux/campers/selectors.js';
import Loader from '../../components/Loader/Loader';
import css from './DetailsTabs.module.css';
import BookingForm from '../BookingForm/BookingForm.jsx';
const ReviewsPage = lazy(() => import('../../pages/ReviewsPage/ReviewsPage'));

export default function DetailsNavigation() {
  const [activeTab, setActiveTab] = useState('features'); // Управляем текущей вкладкой
  const { id } = useParams();
  const dispatch = useDispatch();
const selectActive = useSelector(selectActiveCamperId);
console.log(selectActive);

  useEffect(() => {
    dispatch(fetchCatalogById(id));
  }, [dispatch, id]);

  function getClassActive(tabName) {
    return clsx(css.link, activeTab === tabName && css.active);
  }

  // Контент для вкладок "Features" и "Reviews"
  const renderTabContent = () => {
    if (activeTab === 'features') {
      return (
        <h1>dfgxfncg</h1>
      );
    }
    if (activeTab === 'reviews') {
      return (
        <ReviewsPage/>
      );
    }
  };

  return (
    <>
      <div className={css.navigation}>
        <ul className={css.wrap}>
          <li className={css.list}>
            <NavLink
              className={getClassActive('features')}
              onClick={() => setActiveTab('features')}
            >
              <p className={css.text}>Features</p>
            </NavLink>
          </li>

          <li className={css.list}>
            <NavLink
              className={getClassActive('reviews')}
              onClick={() => setActiveTab('reviews')}
            >
              <p className={css.text}>Reviews</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <div className={css.containerTabContent}>
          <div>{renderTabContent()}</div>
          <BookingForm />
        </div>
      </Suspense>
    </>
  );
}
