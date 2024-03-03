import React from "react";
import logo from "../../images/header_logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header({ loggedIn, handleToggleMenu }) {
  const location = useLocation();
  const pathname = location.pathname;
  const backgroundHeader = loggedIn && pathname !== '/' ? 'header__background_dark' : '';

  const headerFilmsClass = ({ isActive }) =>
    `header__films header__nav-hidden ${isActive ? "header__films_active" : ""}`;

  const headerSavedFilmsClass = ({ isActive }) =>
    `header__saved-films header__nav-hidden ${isActive ? "header__saved-films_active" : ""}`;

  const headerAccountClass = ({ isActive }) =>
    `header__account header__nav-hidden ${isActive ? "header__account_active" : ""}`;

  return (
    <header className="auth-container">
      <div className={`header ${backgroundHeader}`}>
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="лого смайла"
          />
        </Link>
        {loggedIn ? (
          <nav className="header__movies">
            <div className="header__films-place">
              <NavLink to="/movies" className={headerFilmsClass}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className={headerSavedFilmsClass}>Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className={headerAccountClass}>
              <p className="header__button-account">Аккаунт</p>
              <div className="header__account-icon"></div>
            </NavLink>
            <button className="header__menu" type="button" onClick={handleToggleMenu}>
              <span className="header__menu-icon"></span>
            </button>
          </nav>
        ) : (
          <div className="auth">
            <Link className="header__signup" to="/signup">
              Регистрация
            </Link>
            <Link className="header__signin" to="/signin">
              Войти
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;