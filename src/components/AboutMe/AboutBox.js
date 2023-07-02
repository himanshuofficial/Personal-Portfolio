import classes from './AboutBox.module.css';

const AboutBox = (props) => {
  return (
    <div className={classes.details}>
      {props.details.map((item) => {
        return (
          <div className={classes["detail-box"]}>
            <div classsName={classes.icon}>
              <img src={item.icon} alt='icon'/>
            </div>
            <div classsName={classes.name}>{item.name}</div>
            <div classsName={classes.details}>{item.details}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutBox;
