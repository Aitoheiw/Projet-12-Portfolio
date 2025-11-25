import Card from "./Card";
import projet from "../data/projet";

export default function Cards({ onCardClick }) {
  return (
    <section>
      <div className="flex flex-col gap-12">
        {projet.map((slide, index) => (
          <Card key={index} {...slide} id={index} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
