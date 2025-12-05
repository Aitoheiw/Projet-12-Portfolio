import { useState } from "react";
import ReturnBnt from "../components/ReturnBnt";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const data = {
      "form-name": form.getAttribute("name"), // "contact"
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

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
        You can send me a message using this form. I will get back to you as
        soon as possible.
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
          Name
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
          Send
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-2">
            Thank you for your message, it has been successfully sent ✨
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">
            Oops, something went wrong. You can try again a bit later.
          </p>
        )}
      </form>
    </section>
  );
}
