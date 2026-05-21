import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

export const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  JavaScript:       { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript:       { icon: SiTypescript, color: "#3178C6" },
  React:            { icon: SiReact,      color: "#61DAFB" },
  "Next.js":        { icon: SiNextdotjs,  color: "#000000" },
  "Node.js":        { icon: SiNodedotjs,  color: "#339933" },
  HTML:             { icon: SiHtml5,      color: "#E34F26" },
  CSS:              { icon: SiCss,        color: "#1572B6" },
  Git:              { icon: SiGit,        color: "#F05032" },
  Python:           { icon: SiPython,     color: "#3776AB" },
  "Tailwind CSS":   { icon: SiTailwindcss, color: "#06B6D4" },
};