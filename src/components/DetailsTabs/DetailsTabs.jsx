import { useState, useEffect, Suspense } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { fetchCatalogById } from '../../redux/campers/operations.js';
import {selectActiveCamperId} from '../../redux/campers/selectors.js';
import Loader from '../../components/Loader/Loader';
import css from './DetailsTabs.module.css';
import BookingForm from '../BookingForm/BookingForm.jsx';

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
        <div>
          <h2>Features</h2>
          <p>Here are the features of the camper...</p>
        </div>
      );
    }
    if (activeTab === 'reviews') {
      return (
        <div>
          <h2>Reviews</h2>
          <p>Here are the reviews of the camper...</p>
        </div>
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
