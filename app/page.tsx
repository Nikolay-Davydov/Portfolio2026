import profile from "../data/profile";

export default function Home() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">Hi, I&apos;m {profile.name}</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{profile.summary}</p>
    </section>
  );
}
