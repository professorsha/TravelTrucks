import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <NavLink className={css.logo} to="/">
          Travel<span className={css.logo_accent}>Trucks</span>
        </NavLink>
        <div className={css.menu}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
