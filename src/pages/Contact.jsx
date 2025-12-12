import { useState } from "react";
import ReturnBnt from "../components/ReturnBnt";
import { useLanguage } from "../hooks/useLanguage";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const data = {
      "form-name": form.getAttribute("name"),
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

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleInvalid = (e) => {
    const { validity, type } = e.target;

    if (validity.valueMissing) {
      e.target.setCustomValidity(t.contact.errors.required);
    } else if (type === "email" && validity.typeMismatch) {
      e.target.setCustomValidity(t.contact.errors.email);
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };

  return (
    <section
      id="contact"
      className="w-screen h-screen mx-auto lg:pt-6 flex flex-col gap-6 bg-white dark:bg-zinc-800"
      aria-labelledby="contact-title"
    >
      <div className="max-w-5xl w-full mx-auto h-full lg:h-fit lg:pb-6 px-6 flex flex-col gap-6 dark:bg-zinc-800 lg:rounded-3xl">
        <ReturnBnt />

        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-bold dark:text-white mb-4 mt-10"
        >
          {t.contact.title}
        </h2>

        <p className="dark:text-gray-300 mb-4">{t.contact.description}</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-zinc-100 dark:bg-white/5 p-6 rounded-xl backdrop-blur-sm"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Ne pas remplir ce champ : <input name="bot-field" />
            </label>
          </p>

          <label className="flex flex-col gap-1 text-sm dark:text-gray-200 2xl:text-xl">
            {t.contact.name}
            <input
              type="text"
              name="name"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              className="px-3 py-2 rounded-lg dark:bg-black/30 border dark:border-white/10 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm dark:text-gray-200 2xl:text-xl">
            {t.contact.email}
            <input
              type="email"
              name="email"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              className="px-3 py-2 rounded-lg dark:bg-black/30 border dark:border-white/10 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm dark:text-gray-200 2xl:text-xl">
            {t.contact.message}
            <textarea
              name="message"
              rows="4"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              className="px-3 h-62 py-2 rounded-lg dark:bg-black/30 border dark:border-white/10 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            {t.contact.submit}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">{t.contact.sucess}</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">{t.contact.failed}</p>
          )}
        </form>
      </div>
    </section>
  );
}
