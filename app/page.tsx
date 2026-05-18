import profile from "../data/profile";
import styles from "./page.module.css";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
        <h2 className="sectionTitle">About</h2>
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
        <h2 className="sectionTitle">Projects</h2>
        <div className="mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="resume" className="container mx-auto p-6">
        <h2 className="sectionTitle">Resume</h2>
      </section>

      <section id="contact" className="container mx-auto p-6">
        <h2 className="sectionTitle">Contact</h2>
        <div className="mt-6 flex flex-col gap-4">
          {profile.links.email && (
            
             <a href={`mailto:${profile.links.email}`}
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              📧 {profile.links.email}
            </a>
          )}
          {profile.links.github && (
            
              <a href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              🐙 GitHub
            </a>
          )}
          {profile.links.linkedin && (
            
              <a href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              💼 LinkedIn
            </a>
          )}
        </div>
      </section>
    </>
  );
}
