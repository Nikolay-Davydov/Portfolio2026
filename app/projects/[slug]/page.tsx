import projects from "../../../data/projects";

type Props = { params: { slug: string } };

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {project.shortDescription}
      </p>
      <h3 className="mt-6 font-semibold">Tech</h3>
      <ul className="list-disc list-inside mt-2">
        {project.techStack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </main>
  );
}
