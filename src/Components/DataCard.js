import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const DataCard = ({ title, value, icon }) => {
  let color;

  if (title === "WINS") {
    color = "#27ae60";
  } else if (title === "LOSSES") {
    color = "#2c3e50";
  } else if (title === "KILLS") {
    color = "#e74c3c";
  } else if (title === "HEADSHORTS") {
    color = "#d35400";
  } else if (title === "WEAPONS AQUIRED") {
    color = "#0fbcf9";
  } else if (title === "TOP 10's") {
    color = "#ffa801";
  } else if (title === "REVIVES") {
    color = "#ff3f34";
  } else if (title === "KILL DISTANCE") {
    color = "#575fcf";
  } else if (title === "TIME SURVIVED") {
    color = "#2c2c54";
  }

  const useStyles = makeStyles({
    root: {
      minWidth: 250,
      boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.75)`,
      borderBottom: `8px solid ${color}`,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Life Time Data of Player
        </Typography>
        <Typography variant="h5" component="h2">
          {icon} <br />
          {title}
        </Typography>
        <Typography variant="h3" component="h3">
          <CountUp start={0} end={value} separator="," />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DataCard;
