// src/components/LanguageSwitcher.jsx
import { useLanguage } from "../hooks/useLanguage";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const changeLang = (lng) => {
    setLang(lng);
    console.log(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLang("en")}
        className={`px-2 py-1 text-xs rounded transition ${
          lang === "en"
            ? "font-bold underline dark:text-white"
            : "text-gray-400 dark:hover:text-white hover:text-zinc-800"
        }`}
      >
        EN
      </button>

      <span className="text-gray-500">|</span>

      <button
        onClick={() => changeLang("fr")}
        className={`px-2 py-1 text-xs rounded transition ${
          lang === "fr"
            ? "font-bold underline dark:text-white"
            : "text-gray-400 dark:hover:text-white hover:text-zinc-800"
        }`}
      >
        FR
      </button>

      <span className="text-gray-500">|</span>

      <button
        onClick={() => changeLang("ko")}
        className={`px-2 py-1 text-xs rounded transition ${
          lang === "ko"
            ? "font-bold underline dark:text-white"
            : "text-gray-400 dark:hover:text-white hover:text-zinc-800"
        }`}
      >
        KO
      </button>
    </div>
  );
}
