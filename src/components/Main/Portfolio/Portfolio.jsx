import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import link from "../../../images/link_pic.svg";

const Portfolio = (props) => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link
            to="https://logowaz.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__project">Статичный сайт</p>
            <img
              src={link}
              alt="знак перехода на проект"
              className="portfolio__link-pic"
            />
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link
            to="https://logowaz.github.io/russian-travel/"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__project">Адаптивный сайт</p>
            <img
              src={link}
              alt="знак перехода на проект"
              className="portfolio__link-pic"
            />
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link
            to="https://logowaz25.nomoredomainsmonster.ru/#/signin"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__project">Одностраничное приложение</p>
            <img
              src={link}
              alt="знак перехода на проект"
              className="portfolio__link-pic"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
