import { useState } from "react";
import ReturnBnt from "../components/ReturnBnt";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-6"
      aria-labelledby="contact-title"
    >
      <ReturnBnt />
      <h2
        id="contact-title"
        className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10"
      >
        Contact
      </h2>
      <p className="text-gray-300 mb-4">
        Tu peux m’envoyer un message via ce formulaire. Je reviendrai vers toi
        dès que possible.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm"
      >
        {/* Champs cachés pour Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Ne pas remplir ce champ : <input name="bot-field" />
          </label>
        </p>

        <label className="flex flex-col gap-1 text-sm text-gray-200">
          Nom
          <input
            type="text"
            name="name"
            required
            className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-gray-200">
          Email
          <input
            type="email"
            name="email"
            required
            className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-gray-200">
          Message
          <textarea
            name="message"
            rows="4"
            required
            className="px-3 h-62 py-2 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
        >
          Envoyer
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-2">
            Merci pour ton message, il a bien été envoyé ✨
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">
            Oups, une erreur s’est produite. Tu peux réessayer un peu plus tard.
          </p>
        )}
      </form>
    </section>
  );
}
