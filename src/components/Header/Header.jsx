import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <NavLink to="/">
          <img className={css.logo} src={logo} alt="Logo" />
        </NavLink>
        <div className={css.menu}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/catalog">
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
