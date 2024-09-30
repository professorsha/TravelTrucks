import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './CamperDetailsPage.module.css';
import CamperDetailsGallery from '../../components/CamperDetailsGallery/CamperDetailsGallery';
import Loader from '../../components/Loader/Loader';
import DetailsTabs from '../../components/DetailsTabs/DetailsTabs';
import { FaStar } from 'react-icons/fa';
import { IoMapOutline } from 'react-icons/io5';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const camper = useSelector(selectActiveCamperId);
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);
  // Запрос на получение данных по id
  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        ); // Запрос на бэкенд
        setCamper(response.data); // Сохраняем данные
        setIsLoading(false);
      } catch (err) {
        setError(err + 'Failed to fetch camper details');
        setIsLoading(false);
      }
    };

    fetchCamperDetails();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.titlePage}>
        <div className={css.info}>
          <h2>{camper.name}</h2>
          <div className={css.details}>
            <div className={css.reviews}>
              <FaStar className={css.activeStar} />
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <IoMapOutline className={css.map} />
              <span>{camper.location}</span>
            </div>
          </div>
          <h2 className={css.title}>&euro;{camper.price}</h2>
        </div>
        <CamperDetailsGallery camper={camper} />
        <p>{camper.description}</p>
      </div>
      <DetailsTabs />
    </div>
  );
};

export default CamperDetailsPage;
