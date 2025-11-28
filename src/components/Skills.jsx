import SkillCards from "../components/SkillCards";
import skills from "../data/skills";
export default function Skills() {
  return (
    <section className="mt-10 mb-20 border-t border-white pt-10">
      <h2 className="text-3xl mb-10 mt-5 font-bold">Skills</h2>
      <article className="flex gap-10 flex-wrap justify-center ">
        {skills.map((skill, index) => (
          <SkillCards
            key={index}
            {...skill}
            title={skill.title}
            src={skill.src}
          />
        ))}
      </article>
    </section>
  );
}
