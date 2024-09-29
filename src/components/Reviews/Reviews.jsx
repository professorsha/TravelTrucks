import sprite from "../../../public/images/icons.svg";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const { reviewer_name, reviewer_rating, comment } = reviews;

  const initial = reviewer_name[0].toUpperCase();

  const stars = Array.from(
    { length: 5 },
    (_, index) => index < reviewer_rating
  );

  return (
    <div className={css.reviewContainer}>
      <div className={css.user}>
        <div className={css.avatar}>
          <span>{initial}</span>
        </div>
        <div className={css.infoContainer}>
          <p>{reviewer_name}</p>
          <ul className={css.stars}>
            {stars.map((filled, index) => (
              <li key={index}>
                <svg className={css.star}>
                  <use
                    xlinkHref={`${sprite}#${
                      filled ? "iconStar" : "iconStar"
                    }`}
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className={css.comment}>{comment}</p>
      </div>
    </div>
  );
};

export default Reviews;