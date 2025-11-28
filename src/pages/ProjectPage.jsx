export default function ProjectPage({ project, onBack }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 w-screen">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 px-6 py-3 bg-black/60 md:bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 md:mix-blend-difference"
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
        Back
      </button>

      <header className="relative h-96 overflow-hidden">
        <img
          src={project.src}
          alt={project.h2}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.h2}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300">{project.h5}</p>
          </div>
        </div>
      </header>

      <main className=" flex flex-col items-center w-screen px-8 py-16">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            About the project
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-4">
            {project.description}
          </p>
        </section>

        <section className="mb-12 flex flex-col gap-4">
          <h3 className="text-4xl font-bold text-white mb-6">Technologies</h3>
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
          <h3 className="text-4xl font-bold text-white mb-6">Liens</h3>

          {project.links.map((link) => {
            const [label, url] = link.split(": ");

            return (
              <p
                key={link}
                className="text-gray-300 text-sm md:text-xl mb-4 wrap-break-word pl-2 pr-2"
              >
                <strong className="font-bold">{label}:</strong>{" "}
                <span>{url}</span>
              </p>
            );
          })}
        </section>
      </main>
    </div>
  );
}
