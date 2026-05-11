import ContactLinks from "../../components/ContactLinks";

export default function ContactPage() {
  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-4">You can reach me via the following channels:</p>
      <div className="mt-4">
        <ContactLinks />
      </div>
    </main>
  );
}
