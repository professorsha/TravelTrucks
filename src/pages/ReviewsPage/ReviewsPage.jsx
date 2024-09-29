import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogById } from '../../redux/campers/operations.js';
import { selectCamperById } from '../../redux/campers/selectors.js';
import Avatar from '@mui/material/Avatar';
import css from './ReviewsPage.module.css';

function stringAvatar(name) {
  const letters = name.split(' ');
  let initials = '';

  initials = `${letters[0][0]}`.toUpperCase();

  return {
    sx: {
      bgcolor: '#F2F4F7',
      width: '60px',
      height: '60px',
      borderRadius: '60px',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '1.33',
      color: '#E44848',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
    },
    children: initials,
  };
}
const renderStars = rating => {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`${css.star} ${
          i <= rating ? css.activeStar : css.inactiveStar
        }`}
      />
    );
  }

  return stars;
};
export default function ReviewsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(selectCamperById);
  console.log(selectedCamper);

  useEffect(() => {
    dispatch(fetchCatalogById(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      {selectedCamper !== null && (
        <>
          <ul className={css.reviews}>
            {selectedCamper.reviews.map((review, index) => (
              <li className={css.review} key={review.id || index}>
                <div className={css.nameWrap}>
                  <span>
                    <Avatar {...stringAvatar(review.reviewer_name)} />
                  </span>
                  <div>
                    <p className={css.name}>{review.reviewer_name}</p>
                    <div className={css.starsWrap}>
                      {renderStars(review.reviewer_rating)}
                    </div>
                  </div>
                </div>

                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
