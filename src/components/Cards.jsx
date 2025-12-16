import Card from "./Card";
import projet from "../data/projet";
import { useLanguage } from "../hooks/useLanguage";

export default function Cards({ onCardClick }) {
  const { t } = useLanguage();
  return (
    <section className=" items-center bg-[#f5f5f7] dark:bg-neutral-700/50 mt-4 pt-10 flex- pb-20 mx-4 md:mx-6">
      <h2 id="projects" className="text-3xl mb-10 mt-5 font-bold">
        {t.nav.projects}
      </h2>
      <ul className="flex gap-12 justify-center flex-wrap mx-4 md:mx-6">
        {projet.map((slide, index) => {
          return (
            <Card key={index} {...slide} id={index} onClick={onCardClick} />
          );
        })}
      </ul>
    </section>
  );
}
