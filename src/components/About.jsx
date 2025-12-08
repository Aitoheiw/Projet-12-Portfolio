// src/components/About.jsx
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#f5f5f7] dark:bg-neutral-700/50 pb-10 select-none mx-4 md:mx-6">
      <h2 className="text-3xl pb-10 pt-5 font-bold">{t.about.title}</h2>

      <div className="flex flex-col pb-10 text-xl md:text-2xl gap-5 font-bold pl-4 pr-4">
        <p>{t.about.text}</p>
        <p>{t.about.description}</p>
      </div>
    </section>
  );
}
