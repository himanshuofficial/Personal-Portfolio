import { Fragment } from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const navbarOptions = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];
  return (
    <Fragment>
      <nav>
        <h1 className={classes.logo}>Himanshu's Portfolio</h1>
        <ul>
          {navbarOptions.map((option) => {
            return (
              <li>
                <a href={option.link}>{option.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
