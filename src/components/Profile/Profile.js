import { Fragment } from "react";
import classes from "./Profile.module.css";
import Html from "../Images/html.png";
import Angular from "../Images/angular.png";
import Js from "../Images/javascript.png";
import Waving from "../Images/waving.png";
import react from "../Images/react.png"
import Linkdin from "../Images/linkdin.png"
import github from "../Images/github.png"

const Profile = () => {
  const skills = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Angular,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: react,
      title: "React"
    }
  ];
  return (
    <Fragment>
      <section id="home" className={classes.home}>
        <div class={classes.container}>
          <div className={classes["left-content"]}>
            <div className={classes["hero-text"]}>
              <h1>Front-End React Developer</h1>
              <img src={Waving} alt="waving_hand" />
              <p>
                Hi, I'm Himanshu Sharma.
                <div>
                  A passionate Front-end React Developer based in Himachal,
                  India. 📍
                </div>
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/coderhimanshu"
                >
                  <img src={Linkdin} title="Linkedin" alt="linkdin" />
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/himanshuofficial"
                >
                  <img src={github} title="Linkedin" alt="linkdin" />
                </a>
              </span>
            </div>
            <div className={classes.skills}>
              <p>Tech Stack</p>
              <div className={classes.logos}>
                <ul>
                  {skills.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={`${classes["right-content"]} ${classes["image"]}`}>
            <div className={classes.image}></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
