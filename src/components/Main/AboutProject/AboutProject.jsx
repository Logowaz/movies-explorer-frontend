import React from "react";
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line"></div>
      <article className="about-project__text-container">
        <h2 className="about-project__item about-project__item_one">Дипломный проект включал 5 этапов</h2>
        <p className="about-project__text about-project__text_one">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h2 className="about-project__item about-project__item_two">На выполнение диплома ушло 5 недель</h2>
        <p className="about-project__text about-project__text_two">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
      <article className="about-project__schedule">
        <h2 className="about-project__schedule_backend">1 неделя</h2>
        <h2 className="about-project__schedule_frontend">4 недели</h2>
        <p className="about-project__schedule-name">Back-end</p>
        <p className="about-project__schedule-name">Front-end</p>
      </article>
    </section>
  )
};

export default AboutProject;
