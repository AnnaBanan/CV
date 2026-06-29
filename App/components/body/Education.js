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
                since May 2026: Angular Frontend Developer at Mindmonopol,
                Remote
              </h3>
              <p>
                Further development of existing software solutions and
                implementation of new features. Also migrated the test
                infrastructure of a component library from Karma/Jasmine to
                Vitest.
              </p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>
                Aug 2025 – April 2026: Frontend Developer at Raiys, Remote
              </h3>
              <p>
                Conception and development of modern Angular projects for
                practice management software with patient management and a
                digital anamnesis form. Implementation of new features and
                apps with API integration as well as real-time communication
                via SignalR and GraphQL. Focus on high code quality through
                automated testing (Jest, Playwright). Implementation of
                responsive, highly usable interfaces with multi-language
                support.
              </p>
            </div>
          </li>
          <li className={style.stepper__item}>
            <div className={style.stepper__content}>
              <h3>
                June 2023 – Aug 2025: Web Developer at Medienwerft GmbH,
                Remote
              </h3>
              <p>
                Developing modern frontend solutions and implementing
                e-commerce shops and web platforms in close collaboration with
                customers (incl. the Sales Shop feature for Kion). Fast
                onboarding into new topics, proactive communication and
                structured implementation of requirements.
              </p>
              <p>Tech-Stack: Angular, TypeScript, Sass, HTML5, CSS3, Jest</p>
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
