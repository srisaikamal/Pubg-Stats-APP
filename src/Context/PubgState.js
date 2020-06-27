import React, { useReducer } from "react";
import axios from "axios";
import PubgContext from "./PubgContext";

import PubgReducer from "./PubgReducer";
import { SEARCH_PLAYER, SET_LOADING } from "./Types";

const PubgState = (props) => {
  const options = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_API,
      Accept: "application/vnd.api+json",
    },
  };
  const initialState = {
    lifetimeData: null,
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
      console.log(data);
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
