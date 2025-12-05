import { Link } from "react-router-dom";

export default function Nav() {
  const handleNavClick = () => {
    sessionStorage.removeItem("homeScroll");
  };

  return (
    <nav className="select-none">
      <ul className="flex justify-end gap-12 text-xl text-white font-bold hover:cursor-pointer mr-5">
        <li>
          <a
            href="#projects"
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            Projects
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
