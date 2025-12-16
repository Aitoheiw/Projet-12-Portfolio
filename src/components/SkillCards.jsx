export default function SkillCards({ title, src }) {
  return (
    <li className=" bg-gray-200 dark:bg-neutral-400/20 rounded-lg p-2 md:w-50 w-25 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300">
      <img
        src={src}
        alt=""
        className="h-25 md:h-50 object-contain"
        loading="lazy"
      />
      <p className="text-black dark:text-white font-bold lg:text-lg">{title}</p>
    </li>
  );
}
