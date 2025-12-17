import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";

export default function Card({ src, h2, p, translations, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const { lang } = useLanguage();

  const t = translations?.[lang] || { h2, p };

  return (
    <li className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-w-100">
      <Link
        to={`/projects/${id}`}
        className="focus:border-4 focus:border-blue-500 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-w-100 focus:outline-none block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          alt=""
          className="w-screen h-150 object-cover"
          loading="lazy"
        />

        <div
          className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-80"
          }`}
        >
          <div
            className="absolute bottom-[calc(100%-55%)] w-full left-0 right-0 p-6 
          text-white bg-black/30 backdrop-blur-md rounded-lg"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2">{t.h2}</h2>
            <p className="text-sm md:text-xl text-gray-200">{t.p}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
