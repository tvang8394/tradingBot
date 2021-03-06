import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function marketReducer(state = initialState.market, action) {
  switch (action.type) {
    
    case types.LOAD_MARKET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
