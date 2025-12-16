import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";

export default function Nav() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    sessionStorage.removeItem("homeScroll");
    setIsOpen(false);
  };

  return (
    <nav className=" relative">
      {/* 🔹 Desktop menu */}
      <ul className="hidden md:flex justify-end gap-12 text-xl font-bold dark:text-white md:mr-5">
        <li>
          <a href="#about" className="nav-link">
            {t.about.title}
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            {t.nav.projects}
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            {t.skills}
          </a>
        </li>

        <li>
          <Link to="/contact" onClick={handleNavClick} className="nav-link">
            {t.nav.contact}
          </Link>
        </li>
      </ul>

      {/* 🍔 Burger button (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl dark:text-white fixed top-6 right-6 z-1000"
        aria-label="Menu"
      >
        ☰
      </button>

      {/* 📱 Mobile menu */}
      {isOpen && (
        <ul className="fixed top-12 right-0 mt-4 flex flex-col gap-6 bg-white dark:bg-neutral-900 shadow-xl p-6 rounded-lg text-lg font-bold z-50">
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              {t.about.title}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              {t.skills}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              {t.nav.projects}
            </a>
          </li>

          <li>
            <Link to="/contact" onClick={handleNavClick}>
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
