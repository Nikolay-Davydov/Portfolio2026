import profile from "../data/profile";

export default function ContactLinks() {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href={`mailto:${profile.links.email}`}
          className="text-blue-600 hover:underline"
        >
          {profile.links.email}
        </a>
      </li>
      <li>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}
