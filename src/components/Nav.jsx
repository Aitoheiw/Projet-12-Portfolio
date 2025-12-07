import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../hooks/useLanguage";

export default function Nav() {
  const { t } = useLanguage();
  const handleNavClick = () => {
    sessionStorage.removeItem("homeScroll");
  };

  return (
    <nav className="select-none">
      <LanguageSwitcher />
      <ul className="flex justify-end gap-12 text-xl text-shadow-zinc-800 dark:text-white font-bold hover:cursor-pointer mr-5">
        <li>
          <a
            href="#projects"
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            {t.nav.projects}
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            {t.nav.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
