import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case types.LOAD_ACCOUNT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
