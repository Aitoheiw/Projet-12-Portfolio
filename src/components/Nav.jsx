import { Link } from "react-router-dom";

export default function Nav() {
  const handleNavClick = () => {
    // On considère que c'est une nouvelle “session” de Home
    sessionStorage.removeItem("homeScroll");
  };

  return (
    <nav>
      <ul className="flex justify-end gap-12 text-xl text-white font-bold hover:cursor-pointer mr-5">
        <li>
          <Link
            to="/"
            onClick={handleNavClick}
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/Skills"
            onClick={handleNavClick}
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            onClick={handleNavClick}
            className="inline-block text-inherit transition duration-300 ease-in-out hover:underline hover:scale-150"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
