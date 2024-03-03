import React from "react";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <section className="aboutme" id="about-me">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <article className="aboutme__biographi">
          <h3 className="aboutme__name">Игорь</h3>
          <h4 className="aboutme__job">Фронтенд-разработчик, 34 года</h4>
          <p className="aboutme__info">
          По&nbsp;професии&nbsp;&mdash; инженер.&nbsp;Закончил НГТУ им&nbsp;Р.Е. Алексеева.&nbsp;
          Женат, у&nbsp;меня две зачечательные дочки.&nbsp; Люблю спорт, особенно футбол.
          Всю жизнь интересовался техникой и&nbsp;IT-cферой, появилось большое
          желание освоить новую перспективную профессию,
          так я&nbsp;и&nbsp;попал на&nbsp;курс Фронтенд разработки Яндекс.Правктикума.
          </p>
          <a
            href="https://github.com/Logowaz"
            className="aboutme__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </article>
        <a
          href="https://vk.com/logowaz"
          alt="моё фото"
          className="aboutme__photo"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
