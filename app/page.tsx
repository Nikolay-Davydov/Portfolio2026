import profile from "../data/profile";
import styles from "./page.module.css";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroEyebrow}>
          <div className={styles.heroEyebrowLine} />
          <span className={styles.heroEyebrowText}>{profile.role}</span>
        </div>

        <h1 className={styles.heroName}>
          {first}
          <br />
          <span className={styles.heroNameItalic}>{last}</span>
        </h1>

        <p className={styles.heroRole}>{profile.summary}</p>
      </div>
    </section>
  );
}
