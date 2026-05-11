import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <p className="mt-4">You can download my resume here:</p>
        <a
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          href="/resume.pdf"
          download
        >
          Скачать резюме (PDF)
        </a>
      </main>
      <Footer />
    </>
  );
}
