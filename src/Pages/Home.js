import React, { useState, useContext } from "react";
import NavBar from "../Components/NavBar";
import { TextField, Button, CircularProgress } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import PubgContext from "../Context/PubgContext";
import TabsData from "../Components/TabsData";
const useStyles = makeStyles({
  h1: {
    textAlign: "center",
    fontSize: "1.6rem",
  },
  labels: {
    display: "block",
    marginBottom: "1rem",
  },
  formgroup: {
    margin: "0 auto",
    textAlign: "center",
  },
  playernameinput: {
    width: "320px",
  },
  button: {
    backgroundImage: "linear-gradient(to right, #f39c12, #f39c12);",
  },
  loading: {
    marginTop: "3rem",
    color: "#f39c12",
  },
  pubgicon: {
    display: "block",
    marginTop: "6rem",
    margin: "0 auto",
  },
});
const Home = () => {
  const pubgContext = useContext(PubgContext);

  const { SearchPlayer, loading } = pubgContext;

  const [playername, setPlayername] = useState("");
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    if (playername === "") {
      return null;
    } else {
      SearchPlayer(playername);
    }
  };

  return (
    <>
      <NavBar />
      <img
        src={require("../Images/pubg.png")}
        alt="Pubg Icon"
        className={classes.pubgicon}
      />
      <h1 className={classes.h1}>Search for Pubg player data</h1>

      <form onSubmit={onSubmit}>
        <div className={classes.formgroup}>
          <label className={classes.labels} htmlFor="playername">
            Player Name: (Only Steam Data Available)
          </label>

          <TextField
            className={classes.playernameinput}
            id="outlined-basic"
            label="Player Name (CASE-SENSITIVE)"
            variant="outlined"
            onChange={(e) => setPlayername(e.target.value)}
            value={playername}
          />
          <p style={{ fontSize: ".8rem" }}>
            (Make sure it matches your Game Name)
          </p>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onSubmit}
          >
            Search
          </Button>
        </div>
      </form>
      {!loading ? (
        <center>
          <h1>Stats for {playername}</h1>
          <TabsData />
        </center>
      ) : (
        <center>
          <CircularProgress className={classes.loading} />
        </center>
      )}
    </>
  );
};

export default Home;
