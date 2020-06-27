import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.75)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DataCard = ({ title, value, icon }) => {
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
