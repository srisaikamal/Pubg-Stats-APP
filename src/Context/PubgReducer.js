import { SEARCH_PLAYER, GET_LIFETIME_DATA, SET_LOADING } from "./Types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PLAYER: {
      return {
        ...state,
        lifetimeData: action.payload,
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
