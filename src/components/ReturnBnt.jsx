export default function ReturnBnt() {
  return (
    <button
      onClick={() => window.history.back()}
      className="fixed top-8 left-2 md:left-8 z-50 px-3 md:px-6 py-3 bg-zinc-200 dark:bg-white/10 hover:bg-white/20 dark:text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
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
  );
}
