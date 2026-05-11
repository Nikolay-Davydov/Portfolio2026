export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project One",
    shortDescription: "A demo frontend project built with Next.js",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/placeholder-1.svg",
    link: "",
  },
  {
    slug: "project-2",
    title: "Project Two",
    shortDescription: "API service example",
    techStack: ["Node.js", "Express"],
    image: "/images/placeholder-2.svg",
    link: "",
  },
  {
    slug: "project-3",
    title: "Project Three",
    shortDescription: "Data engineering sample",
    techStack: ["Python", "Airflow"],
    image: "/images/avatar.svg",
    link: "",
  },
];

export default projects;
