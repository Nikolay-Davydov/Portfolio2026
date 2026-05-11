import Header from "../../components/Header";
import Footer from "../../components/Footer";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
