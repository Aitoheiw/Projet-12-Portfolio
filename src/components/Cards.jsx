import Card from "./Card";
import projet from "../data/projet";

export default function Cards({ onCardClick }) {
  return (
    <section className=" items-center border-t border-white pt-10 flex-wrap select-none">
      <h2 className="text-3xl mb-10 mt-5 font-bold">Projects</h2>
      <div className="flex gap-12 justify-center flex-wrap">
        {projet.map((slide, index) => (
          <Card key={index} {...slide} id={index} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
