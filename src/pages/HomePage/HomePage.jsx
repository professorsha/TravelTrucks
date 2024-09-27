import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.description}>
        You can find everything you want in our catalog
      </p>
      <button type="submit" className={css.button}>
       <NavLink to="/catalog">View Now</NavLink> 
      </button>
    </div>
  );
};
export default HomePage;
