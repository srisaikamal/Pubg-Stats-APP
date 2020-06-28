import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundImage: "linear-gradient(to right, #ff8008, #ffc837);",
  },
  logo: {
    margin: "0 auto",
    fontSize: "2.2rem",
    fontWeight: "700",
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.navbar}>
        <Typography variant="h2" className={classes.logo}>
          PUBG STATS FINDER
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
