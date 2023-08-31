import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { MENU_ICON_SCREEN_WIDTH } from "../../utils/constants";

function Header({onMenuButtonClick}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  const handleOpenMenu = () => {
    onMenuButtonClick();
  };

  return (
    <div className="header">
      <NavLink to="/" className="header__logo link" />
      {width < MENU_ICON_SCREEN_WIDTH ? (
        <button
          type="button"
          className="header__menu-button button-style link"
          onClick={handleOpenMenu}
        ></button>
      ) : (
        <nav className="header__menu">
          <NavLink to="/" className="header__menu-item link">
            Главная
          </NavLink>
          <NavLink to="/" className="header__menu-item link">
            Технология
          </NavLink>
          <NavLink to="/" className="header__menu-item link">
            График полетов
          </NavLink>
          <NavLink to="/" className="header__menu-item link">
            О компании
          </NavLink>
          <NavLink to="/" className="header__menu-item link">
            Контакты
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Header;
