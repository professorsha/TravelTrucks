import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './CamperDetailsPage.module.css';
import { InfinitySpin } from 'react-loader-spinner';
import BookingForm from '../../components/BookingForm/BookingForm';
import CamperDetailsGallery from '../../components/CamperDetailsGallery/CamperDetailsGallery';

const CamperDetailsPage = () => {
  const { id } = useParams(); // Получаем id из URL
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    {/* {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFC531"
          ariaLabel="infinity-spin-loading"
        />
      )} */}
      <div className={css.details}>
        <h2>{camper.name}</h2>
        {/* <CamperDetailsGallery camper={camper}/> */}
        <img src={camper.gallery[0].thumb} alt={camper.name} width="400px" />
        <p>{camper.description}</p>
        <span>Price: &euro;{camper.price}</span>
        <div>
          <strong>Rating:</strong> {camper.rating} ({camper.reviews.length}{' '}
          reviews)
        </div>
        <div>
          <strong>Location:</strong> {camper.location}
        </div>
      </div>
      <BookingForm />
    </>
  );
};

export default CamperDetailsPage;
