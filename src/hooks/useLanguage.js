// src/hooks/useLanguage.js
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return ctx;
}
