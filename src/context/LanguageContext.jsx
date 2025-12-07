// src/context/LanguageContext.jsx
import { createContext, useEffect, useState } from "react";
import { translations } from "../data/translation";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) {
      setLang(stored);
      document.documentElement.lang = stored;
      return;
    }

    const browserLang = navigator.language || navigator.userLanguage;
    const initial = browserLang.startsWith("fr") ? "fr" : "en";
    setLang(initial);
    document.documentElement.lang = initial;
  }, []);

  const t = translations[lang] || translations.en;

  const changeLanguage = (lng) => {
    setLang(lng);
    document.documentElement.lang = lng;
    localStorage.setItem("lang", lng);
  };

  const value = { lang, setLang: changeLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
