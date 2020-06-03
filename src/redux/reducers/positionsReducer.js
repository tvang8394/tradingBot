import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState.orders, action) {
  switch (action.type) {

    case types.LOAD_POSITIONS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
