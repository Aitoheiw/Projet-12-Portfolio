export default function ProjectPage({ project, onBack }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 w-screen">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
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
        Retour
      </button>

      <div className="relative h-96 overflow-hidden">
        {/* <img
          src={project.src}
          alt={project.h2}
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">{project.h2}</h1>
            <p className="text-xl text-gray-300">{project.h5}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            À propos du projet
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {project.description}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={project.p1}
              alt="Screenshot 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={project.p2}
              alt="Screenshot 2"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
