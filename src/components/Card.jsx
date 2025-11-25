import { useState } from "react";

export default function Card({ src, h2, h5, id, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick?.(id)}
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-w-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.(id)}
    >
      <img src={src} alt={h2} className="w-screen h-150 object-cover" />
      <div
        className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-80"
        }`}
      >
        <div className="absolute bottom-[calc(100%-55%)] w-full left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{h2}</h2>
          <h5 className="text-sm text-gray-200">{h5}</h5>
        </div>
      </div>
    </div>
  );
}
