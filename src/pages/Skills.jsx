import ReturnBnt from "../components/ReturnBnt";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SkillCards from "../components/SkillCards";
import skills from "../data/skills";
export default function Skills() {
  return (
    <section className="flex gap-10 flex-wrap justify-center mt-10 md:mt-50">
      <ReturnBnt />
      <main>
        {skills.map((skill, index) => (
          <SkillCards
            key={index}
            {...skill}
            title={skill.title}
            src={skill.src}
          />
        ))}
      </main>
      <ScrollToTopButton />
    </section>
  );
}
