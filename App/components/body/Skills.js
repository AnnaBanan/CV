import * as styles from "../../../styles/skills.module.scss";

const Skills = () => (
  <div className={styles.skills}>
    <div className="content">
      <h2>Skills</h2>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <h3>Advanced</h3>
          <p>Angular, RxJS, HTML5, Sass/SCSS</p>
        </div>
        <div className={styles.card}>
          <h3>Intermediate</h3>
          <p>TypeScript, NgRx SignalStore, Jest, Playwright, GraphQL, SignalR</p>
        </div>
        <div className={styles.card}>
          <h3>Discovering</h3>
          <p>NX Monorepo, Angular Material, Storybook</p>
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
          <p>Scrum</p>
        </div>
        <div className={styles.card}>
          <h3>Tools</h3>
          <p>Github, Gitlab, Jira, Confluence, Figma</p>
        </div>
        <div className={styles.card}>
          <h3>Additional</h3>
          <p>Responsive Web Design</p>
        </div>
        <div className={styles.card}>
          <h3>Language</h3>
          <p>
            German native speaker
            <br />
            English C1 level
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Skills;
