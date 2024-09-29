import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <NavLink className={css.logo} to="/">
          <svg width="136" height="15">
            <use href="/images/logo.svg" />
          </svg>
        </NavLink>
        <div className={css.menu}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
