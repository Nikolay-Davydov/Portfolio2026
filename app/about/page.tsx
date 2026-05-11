import Header from "../../components/Header";
import Footer from "../../components/Footer";
import profile from "../../data/profile";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {profile.role}
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {profile.summary}
        </p>

        <h3 className="mt-6 font-semibold">Skills</h3>
        <ul className="list-disc list-inside mt-2">
          {profile.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
