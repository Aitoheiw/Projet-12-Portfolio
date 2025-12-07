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
            ? "font-bold underline text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>

      <span className="text-gray-500">|</span>

      <button
        onClick={() => changeLang("fr")}
        className={`px-2 py-1 text-xs rounded transition ${
          lang === "fr"
            ? "font-bold underline text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        FR
      </button>

      <span className="text-gray-500">|</span>

      <button
        onClick={() => changeLang("ko")}
        className={`px-2 py-1 text-xs rounded transition ${
          lang === "ko"
            ? "font-bold underline text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        KO
      </button>
    </div>
  );
}
