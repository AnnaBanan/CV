import * as style from "../../../styles/education.module.scss";

const Education = () => {
  return (
    <div className={style.education}>
      <div className={style.content}>
        <h2>Education:</h2>
        <ol className={style.stepper}>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>
                since June 2023: Web Developer at Medienwerft GmbH, Remote
              </h3>
              <p>
                Developing modern frontend solutions for various demanding
                customers and products as e-commerce shops and other web
                platforms.
              </p>
              <p>
                Tech-Stack: Angular, Sass, Handlebars, HTML 5, CSS3, JavaScript,
                Gulp
              </p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>2019 – 2023: UI Developer at immowelt GmbH, Nuremberg</h3>
              <p>
                Implementation of the redesigned detail view and new features
                for the property search with a product team working with Angular
                and Scrum Additionally creating a company wide design system
                with the UI Team using Sass
              </p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>
                2016 – 2019: Apprenticeship as a media designer at immowelt
                GmbH, Nuremberg
              </h3>
              <p>HTML5, CSS3, Sass, Javascript fundamentals</p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>2015: educational year</h3>
              <p>
                Trainings (HTML, CSS), Volunteering in two agencies, Language
                School in London
              </p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>2014: A-levels at Ehrenbürg-Gymnasium Forchheim</h3>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
