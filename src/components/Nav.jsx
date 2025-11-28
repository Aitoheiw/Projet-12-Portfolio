import { Link } from "react-router-dom";

export default function Nav() {
  const handleNavClick = () => {
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
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
