import { NavLink, useParams, Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { fetchCatalogById } from "../../redux/campers/operations.js";
import Loader from "../../components/Loader/Loader";
import css from "./DetailsTabs.module.css";

export default function DetailsNavigation() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function getClassActive({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  useEffect(() => {
    dispatch(fetchCatalogById(id));
  }, [dispatch, id]);

  return (
    <>
      <nav className={css.navigation}>
        <ul className={css.wrap}>
          <li className={css.list}>
            <NavLink
              className={getClassActive}
              to={`/catalog/${id}/features`}
            >
              <p className={css.text}>Features</p>
            </NavLink>
          </li>

          <li className={css.list}>
            <NavLink
              className={getClassActive}
              to={`/catalog/${id}/reviews`}
            >
              <p className={css.text}>Reviews</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

