import profile from "../data/profile";
import styles from "./page.module.css";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { techIcons } from "../data/techIcons";

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

      <section id="about" className="container mx-auto px-16 py-16">
        <h2 className="sectionTitle">About</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "64px",
            alignItems: "center",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Левая колонка — текст */}
          <div
            style={{
              borderLeft: "2px solid var(--royal-mid)",
              paddingLeft: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "var(--text)",
                lineHeight: "2",
                letterSpacing: "0.02em",
                marginBottom: "20px",
              }}
            >
              I&apos;m a Frontend Developer with an engineering background and a
              passion for building clean, modern web interfaces. After years in
              technical fields, I transitioned into web development — completing
              a Full Stack program at Netology and contributing to real projects
              including Guider.pro, a web catalog for Costa Rica.
            </p>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: "2",
                letterSpacing: "0.02em",
              }}
            >
              I built this portfolio to showcase my skills and experience with
              modern frameworks. I enjoy turning ideas into functional,
              well-structured web applications.
            </p>
          </div>

          {/* Правая колонка — скилы */}
          <div>
            <p
              style={{
                fontFamily: "Courier New, monospace",
                fontSize: "10px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--royal)",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Tech Stack
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {profile.skills.map((skill) => {
                const techData = techIcons[skill];
                if (!techData) return null;
                const Icon = techData.icon;
                return (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      padding: "16px 8px",
                      border: "1px solid var(--border)",
                      borderRadius: "13px",
                      background: "var(--surface)",
                    }}
                  >
                    <Icon size={32} color={techData.color} />
                    <span
                      style={{
                        fontSize: "9px",
                        color: "var(--muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New, monospace",
                        textAlign: "center",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto p-6">
        <h2 className="sectionTitle">Projects</h2>
        <div className="mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-16 py-16">
        <h2 className="sectionTitle">Contact</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Левая — Education */}
          <div>
            <p
              style={{
                fontFamily: "Courier New, monospace",
                fontSize: "10px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--royal)",
                marginBottom: "24px",
              }}
            >
              Education
            </p>
            {profile.education.map((edu) => (
              <div
                key={edu.institution}
                style={{
                  borderLeft: "2px solid var(--border)",
                  paddingLeft: "20px",
                  marginBottom: "28px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "16px",
                    color: "var(--royal)",
                    marginBottom: "4px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "Courier New, monospace",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "var(--royal-mid)",
                  }}
                >
                  {edu.institution} · {edu.period}
                </p>
              </div>
            ))}
          </div>

          {/* Правая — Contact + CV */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--royal)",
                  marginBottom: "24px",
                }}
              >
                Get in touch
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {profile.links.email && (
                  <a
                    href={`mailto:${profile.links.email}`}
                    style={{
                      fontFamily: "Courier New, monospace",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      color: "var(--royal)",
                      textDecoration: "none",
                    }}
                  >
                    📧 {profile.links.email}
                  </a>
                )}
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "Courier New, monospace",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      color: "var(--royal)",
                      textDecoration: "none",
                    }}
                  >
                    🐙 GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "Courier New, monospace",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      color: "var(--royal)",
                      textDecoration: "none",
                    }}
                  >
                    💼 LinkedIn
                  </a>
                )}
              </div>
            </div>

            <div
              style={{
                padding: "20px",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                background: "var(--surface)",
              }}
            >
              <p
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "12px",
                }}
              >
                Download CV
              </p>
              <span
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "8px 20px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                PDF — Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
