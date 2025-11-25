export default function About() {
  return (
    <section>
      <button
        onClick={() => window.history.back()}
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
      <h1 className="text-3xl mb-20 mt-10">About</h1>

      <div className="flex flex-col mb-10 text-2xl gap-5 font-bold">
        <p>
          My name is Lucas CHARLET. <br />
        </p>
        <p>I am a web developer specializing in front-end development.</p>
        <p>I have a passion for creating beautiful and functional websites.</p>
        <p>
          I am always learning new technologies and techniques to stay
          up-to-date with the latest industry trends.
        </p>
        <p>I started my journey in web development a few month ago.</p>
        <p>
          If you want to contact me, you can send me an email at:
          lucascharletttttt@gmail.com
        </p>
      </div>
    </section>
  );
}
