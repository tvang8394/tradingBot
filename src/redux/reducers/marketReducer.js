import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function marketReducer(state = initialState.market, action) {
  switch (action.type) {
    
    case types.LOAD_MARKET_SUCCESS:
      console.log(action.payload["2020-05-29 14:21:00"])
      return action.payload;
    default:
      return state;
  }
}
