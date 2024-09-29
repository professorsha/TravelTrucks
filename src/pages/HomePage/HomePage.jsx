import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const nav = useNavigate();
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <button
          type="button"
          className={css.button}
          onClick={() => nav('/catalog')}
        >
          View Now
        </button>
      </div>
    </section>
  );
};
export default HomePage;
