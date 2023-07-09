import SkillBar from "./SkillBar";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    {
      name: "Javascript",
      percentage: 80,
    },
    {
      name: "HTML",
      percentage: 70,
    },
    {
      name: "CSS",
      percentage: 45,
    },
    {
      name: "React",
      percentage: 70,
    },
    {
      name: "Angular",
      percentage: 60,
    },
    {
      name: "Vue",
      percentage: 60,
    },
    {
      name: "Python",
      percentage: 50,
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
