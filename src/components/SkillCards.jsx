export default function SkillCards({ title, src }) {
  return (
    <div className=" bg-slate-300 rounded-lg p-2 w-50 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300">
      <img src={src} alt={title} className="h-50 object-contain" />
      <h2 className="text-black font-bold lg:text-lg">{title}</h2>
    </div>
  );
}
