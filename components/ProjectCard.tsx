import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  image?: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-4 border rounded bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {project.shortDescription}
      </p>
      <div className="mt-3 text-xs text-gray-500">
        {project.techStack.join(", ")}
      </div>
      <div className="mt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>
      </div>
    </article>
  );
}
