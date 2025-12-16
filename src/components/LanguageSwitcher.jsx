// src/components/LanguageSwitcher.jsx
import { useLanguage } from "../hooks/useLanguage";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const changeLang = (lng) => {
    setLang(lng);
    console.log(lng);
  };

  return (
    <ul className="flex items-center gap-2">
      <li>
        <button
          onClick={() => changeLang("en")}
          className={`px-2 py-1 text-xs rounded transition ${
            lang === "en"
              ? "font-bold underline dark:text-white"
              : "text-gray-600 dark:text-zinc-200 dark:hover:text-white hover:text-zinc-800"
          }`}
        >
          EN
        </button>
      </li>
      <span className="dark:text-gray-300" aria-hidden="true">
        |
      </span>
      <li>
        <button
          onClick={() => changeLang("fr")}
          className={`px-2 py-1 text-xs rounded transition ${
            lang === "fr"
              ? "font-bold underline dark:text-white"
              : "text-gray-600 dark:hover:text-white dark:text-zinc-200 hover:text-zinc-800"
          }`}
        >
          FR
        </button>
      </li>

      <span className="dark:text-gray-300" aria-hidden="true">
        |
      </span>
      <li>
        <button
          onClick={() => changeLang("ko")}
          className={`px-2 py-1 text-xs rounded transition ${
            lang === "ko"
              ? "font-bold underline dark:text-white"
              : "text-gray-600 dark:hover:text-white dark:text-zinc-200 hover:text-zinc-800"
          }`}
        >
          KO
        </button>
      </li>
    </ul>
  );
}
