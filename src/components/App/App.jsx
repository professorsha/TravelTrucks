import './App.module.css';
import Layout from '../Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";

import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage')
);
const ReviewsPage = lazy(() => import('../../pages/ReviewsPage/ReviewsPage'));
export default function App() {
  const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}>
              {/* <Route path="features" element={<FeaturesPage />} /> */}
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
