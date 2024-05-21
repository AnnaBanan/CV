import * as styles from "../../../styles/skills.module.scss";

const Skills = () => (
  <div className={styles.skills}>
    <div className="content">
      <h2>Skills</h2>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <h3>Advanced</h3>
          <p>HTML5, CSS3, Sass</p>
        </div>
        <div className={styles.card}>
          <h3>Intermediate</h3>
          <p>
            Javascript, Angular, Typescript, Handlebars, Mustache, Storybook,
            npm
          </p>
        </div>
        <div className={styles.card}>
          <h3>Discovering</h3>
          <p>React, Core Web Vitals</p>
        </div>
        <div className={styles.card}>
          <h3>Observing</h3>
          <p>Accessibility, UX</p>
        </div>
      </div>
      <h2 className={styles.experiences}>Experiences</h2>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <h3>Working method</h3>
          <p>Scrum, Kanban</p>
        </div>
        <div className={styles.card}>
          <h3>Tools</h3>
          <p>
            Gitlab, Github, Jira, Confluence, Adobe Creative Cloud, MS Office
          </p>
        </div>
        <div className={styles.card}>
          <h3>Additional</h3>
          <p>Git Flow, Semantic Versioning</p>
        </div>
        <div className={styles.card}>
          <h3>Language</h3>
          <p>
            German native speaker
            <br />
            English B2 level
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Skills;
