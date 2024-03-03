import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__line"></div>
        <div className="footer__contacts">
          <p className="footer__copyright">&copy;&nbsp;2024</p>
          <div className="footer__links">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/Logowaz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;