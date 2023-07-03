import classes from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.container}>
        <h1>Contact</h1>
        <h3>Don't be Shy! Hit me up!👇</h3>
        <div className={classes.icons}>
          <div className={classes.iconbox}>
            <span>
              <i class="fa-solid fa-map-location-dot fa-bounce"></i>
            </span>
            <div className={classes.details}>
              <h3 className={classes.locationname}>Location</h3>
              <p>Bilaspur, Himachal 🌄</p>
            </div>
          </div>
          <div className={classes.iconbox}>
            <span>
              <i class="fa-solid fa-envelope-open-text fa-shake"></i>
            </span>
            <div className={classes.details}>
              <h3>Mail</h3>
              <a href="mailto:himanshuofficial2000@gmail.com">himanshuofficial@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
