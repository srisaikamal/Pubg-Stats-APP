import React, { useState, useContext } from "react";
import NavBar from "../Components/NavBar";
import { TextField, Button, CircularProgress } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import PubgContext from "../Context/PubgContext";
const useStyles = makeStyles({
  h1: {
    marginTop: "6rem",
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
});
const Home = () => {
  const pubgContext = useContext(PubgContext);

  const { SearchPlayer, loading } = pubgContext;

  const [playername, setPlayername] = useState("");
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();

    SearchPlayer(playername);
  };

  return (
    <>
      <NavBar />
      <h1 className={classes.h1}>Search for Pubg player data</h1>
      <form onSubmit={onSubmit}>
        <div className={classes.formgroup}>
          <label className={classes.labels} htmlFor="playername">
            Player Name:
          </label>
          <TextField
            className={classes.playernameinput}
            id="outlined-basic"
            label="Player Name"
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
      {loading ? (
        <center>
          <CircularProgress className={classes.loading} />
        </center>
      ) : (
        <center>
          <h1>Stats for {playername}</h1>
        </center>
      )}
    </>
  );
};

export default Home;
