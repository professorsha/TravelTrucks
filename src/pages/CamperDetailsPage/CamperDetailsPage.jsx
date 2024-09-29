import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './CamperDetailsPage.module.css';
import CamperDetailsGallery from '../../components/CamperDetailsGallery/CamperDetailsGallery';
import Loader from '../../components/Loader/Loader';
import DetailsTabs from '../../components/DetailsTabs/DetailsTabs';

const CamperDetailsPage = () => {
  const { id } = useParams(); // Получаем id из URL
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
        setError('Failed to fetch camper details');
        setIsLoading(false);
      }
    };

    fetchCamperDetails();
  }, [id]);

  if (isLoading) {
    return (
      <Loader
      />
    );
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
              <svg width="16px" height="16px">
                <use href="/images/star.svg"></use>
              </svg>
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <svg width="16px" height="16px">
                <use href="/images/icons.sv#iconMap"></use>
              </svg>
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

