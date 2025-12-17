import { useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useParams, useNavigate } from "react-router-dom";
import projet from "../data/projet";
import NotFound from "./404";

export default function ProjectPage({ project: propProject, onBack }) {
  const { lang } = useLanguage();
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project =
    propProject ?? (id !== undefined ? projet[Number(id)] : undefined);
  if (!project) {
    return <NotFound />;
  }

  const handleBack = onBack ?? (() => navigate(-1));

  const tr = project.translations?.[lang];

  const title = tr?.h2 || project.h2;
  const subtitle = tr?.h5 || project.h5;
  const description = tr?.description || project.description;
  const context = tr?.context || project.context;
  const objectives = tr?.Objectives || project.Objectives;
  const skills = tr?.SkillsDeveloped || project.SkillsDeveloped;
  const results = tr?.Results || project.Results;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 w-screen">
      <button
        onClick={handleBack}
        className="fixed top-8 left-8 z-50 px-6 py-3 bg-black/60 md:bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 md:mix-blend-difference hover:cursor-pointer "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {t.back}
      </button>

      <header className="relative h-96 overflow-hidden ">
        <img
          src={project.src}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300">{subtitle}</p>
          </div>
        </div>
      </header>

      <main className=" flex flex-col items-center w-screen px-8 py-16">
        <div id="wrapper" className="flex flex-col gap-16 max-w-4xl w-full ">
          <section className="border-b border-white">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.projects.about}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16">
              {description}
            </p>
          </section>

          <section className="border-b border-white">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.projects.context}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16">
              {context}
            </p>
          </section>

          <section className="border-b border-white">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.projects.objectives}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16">
              {objectives}
            </p>
          </section>

          <section className="border-b border-white">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.projects.skills}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16">
              {skills}
            </p>
          </section>

          <section className="border-b border-white">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.projects.results}
            </h2>
            <p className="text-gray-200 text-xl leading-relaxed mb-16">
              {results}
            </p>
          </section>
        </div>

        <section className="mb-16 mt-16 flex flex-col gap-4">
          <h3 className="text-4xl font-bold text-white mb-6">
            {t.projects.technologies}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="w-screen">
          <h3 className="text-4xl font-bold text-white mb-6">
            {t.projects.link}
          </h3>

          {project.links.map((link) => {
            const [label, url] = link.split(": ");

            return (
              <p
                key={link}
                className="text-gray-200 text-sm md:text-xl mb-4 wrap-break-word pl-2 pr-2"
              >
                <strong className="font-bold">{label}:</strong>{" "}
                <a href={url} target="_blank" className="text-gray-200">
                  {url}
                </a>
              </p>
            );
          })}
        </section>
      </main>
    </div>
  );
}
