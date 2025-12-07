import { useLanguage } from "../hooks/useLanguage";
export default function Header() {
  const { t } = useLanguage();
  return (
    <header className="mb-20 mt-10 flex flex-col items-center gap-5 select-none">
      <h1 className="text-3xl md:text-5xl font-bold  dark:text-white mb-4">
        Lucas Charlet
      </h1>
      <p className="dark:text-gray-400 text-lg">{t.header.subtitle}</p>
    </header>
  );
}
