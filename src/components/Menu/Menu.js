import "./Menu.css";
import "../../assets/styles/common.css";
// import "../HeaderCommon/HeaderCommon";
import usePopupClose from "../../hooks/usePopupClose";

import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <menu className={`menu ${isOpen ? "open" : ""} }`}>
        {isOpen && (
          <nav className="menu__container">
            <button type="button" className="menu__close-button link" onClick={onClose} />
            <ul className="menu__content">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `menu__link link ${isActive && "active"}`
                  }
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    `menu__link link ${isActive && "active"}`
                  }
                >
                  Технология
                </NavLink>
                <NavLink
                  to="/schedules"
                  className={({ isActive }) =>
                    `menu__link link ${isActive && "active"}`
                  }
                >
                  График полетов
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `menu__link link ${isActive && "active"}`
                  }
                >
                  О компании
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `menu__link link ${isActive && "active"}`
                  }
                >
                   Контакты
                </NavLink>
            </ul>
          </nav>
        )}
      </menu>
    </div>
  );
}

export default Menu;
