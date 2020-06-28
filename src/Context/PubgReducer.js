import { SEARCH_PLAYER, SET_LOADING, ERRORS } from "./Types";

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
    case ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
