import SkillBar from "./SkillBar";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    {
      name: "Javascript",
      percentage: 45,
    },
    {
      name: "HTML",
      percentage: 12,
    },
    {
      name: "CSS",
      percentage: 45,
    },
    {
      name: "React",
      percentage: 45,
    },
    {
      name: "Angular",
      percentage: 12,
    },
    {
      name: "Vue",
      percentage: 34,
    },
    {
      name: "Python",
      percentage: 34,
    },
  ];

  return (
    <section id="skills" className={classes["skills-section"]}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>My Skills</h1>
        </div>
        <h3>Here is my skills to represent my Expertise 🎯💪</h3>
        <div className={classes.skills}>
          <SkillBar skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
