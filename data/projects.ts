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
    image: "/images/project1.png",
    link: "",
  },
  {
    slug: "project-2",
    title: "Project Two",
    shortDescription: "API service example",
    techStack: ["Node.js", "Express"],
    image: "/images/project2.png",
    link: "",
  },
  {
    slug: "project-3",
    title: "Project Three",
    shortDescription: "Data engineering sample",
    techStack: ["Python", "Airflow"],
    image: "/images/project3.png",
    link: "",
  },
];

export default projects;
