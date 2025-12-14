// src/components/About.jsx
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="bg-[#f5f5f7] dark:bg-neutral-700/50 pb-10 mx-4 md:mx-6"
    >
      <h2 className="text-3xl pb-10 pt-5 font-bold select-none">
        {t.about.title}
      </h2>

      <div className="flex flex-col pb-10 text-xl md:text-2xl gap-5 font-bold pl-4 pr-4">
        <p className="select-none">{t.about.text}</p>
        <p className="select-none">{t.about.description}</p>
        <p className="select-none">{t.about.ambition}</p>
        <p>
          Linkedin :
          <a
            href="https://www.linkedin.com/in/lucas-charlet-0a0183231/"
            target="_blank"
          >
            https://www.linkedin.com/in/lucas-charlet-0a0183231/
          </a>
        </p>
      </div>
    </section>
  );
}
