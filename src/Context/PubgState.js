import React, { useReducer } from "react";
import axios from "axios";
import PubgContext from "./PubgContext";

import PubgReducer from "./PubgReducer";
import { SEARCH_PLAYER, GET_LIFETIME_DATA, SET_LOADING } from "./Types";

const PubgState = (props) => {
  const API =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYWUzYTBiMC05OTljLTAxMzgtMjA2Yy0wMDNlYmUzZjc1OTkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTkzMTQ5Njg1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNyaXNhaWthbWFsMjAwIn0.kjsXOwLe6br41wNvDttkKNxpaV8yT5UUu_a9pnEi1Tc";

  const options = {
    headers: {
      Authorization: "Bearer " + API,
      Accept: "application/vnd.api+json",
    },
  };
  const initialState = {
    playername: "",
    lifetimeData: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(PubgReducer, initialState);

  //   Search player name

  const SearchPlayer = async (playername) => {
    setLoading();
    const {
      data: { data },
    } = await axios.get(
      `https://api.playbattlegrounds.com/shards/steam/players?filter[playerNames]=${playername}`,
      options
    );
    let sliceid = data[0].id;
    let sliced = sliceid.slice(8);
    if (sliced) {
      const {
        data: { data },
      } = await axios.get(
        `https://api.pubg.com/shards/steam/players/${sliced}/seasons/lifetime`,
        options
      );
      dispatch({
        type: SEARCH_PLAYER,
        payload: data,
      });
    }
  };

  // Get players life time data

  //   Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PubgContext.Provider
      value={{
        playername: state.playername,
        lifetimeData: state.lifetimeData,
        loading: state.loading,
        SearchPlayer,
      }}
    >
      {props.children}
    </PubgContext.Provider>
  );
};

export default PubgState;
