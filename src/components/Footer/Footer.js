import React from "react";
import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes["footer-content"]}>
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className={classes["footer-socials"]}>
            <a
              aria-label="linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/stefan-topalovic-dev/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/stefvndev"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
