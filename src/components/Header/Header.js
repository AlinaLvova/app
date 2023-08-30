import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { MENU_ICON_SCREEN_WIDTH } from "../../utils/constants";

function Header(onClickMenuButton) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  const handleOpenMenu = () => {
    onClickMenuButton();
  };

  return (
    <div className="header">
      <div className="header__logo" />

      {width < MENU_ICON_SCREEN_WIDTH ? (
        <button
          type="button"
          className="header__menu-button button-style link"
          onClick={handleOpenMenu}
        ></button>
      ) : (
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
      )}
    </div>
  );
}

export default Header;
