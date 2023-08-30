import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__logo-container">
        <div className="header__logo"></div>
      </div>
      <nav className="header__menu">
        <NavLink to="/" className="header__menu-item">
          Главная
        </NavLink>
        <NavLink to="/" className="header__menu-item">
          Технология
        </NavLink>
        <NavLink to="/" className="header__menu-item">
          График полетов
        </NavLink>
        <NavLink to="/" className="header__menu-item">
          О компании
        </NavLink>
        <NavLink to="/" className="header__menu-item">
          Контакты
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
