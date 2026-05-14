import profile from "../data/profile";
import styles from "./page.module.css";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <>
      <section id="home" className={styles.hero}>
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

      <section id="about" className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="mt-2 text-sm text-gray-600">{profile.role}</p>
        <p className="mt-4 text-gray-700">{profile.summary}</p>

        <h3 className="mt-6 font-semibold">Skills</h3>
        <ul className="list-disc list-inside mt-2">
          {profile.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section id="projects" className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Projects</h2>
      </section>

      <section id="resume" className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Resume</h2>
      </section>

      <section id="contact" className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        {profile.links.email && <p>Email: {profile.links.email}</p>}
        {profile.links.github && <p>GitHub: {profile.links.github}</p>}
        {profile.links.linkedin && <p>LinkedIn: {profile.links.linkedin}</p>}
      </section>
    </>
  );
}
