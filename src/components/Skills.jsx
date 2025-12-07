import SkillCards from "../components/SkillCards";
import skills from "../data/skills";
import { useLanguage } from "../hooks/useLanguage";

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section className=" mt-4 pb-20  pt-10 select-none mx-4 md:mx-6 bg-[#f5f5f7] dark:bg-neutral-700/50">
      <h2 className="text-3xl mb-10 mt-5 font-bold">{t.skills}</h2>
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
