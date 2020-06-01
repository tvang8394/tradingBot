import * as types from "./actionTypes";
import * as alpacaApi from "../../api/alpacaApi";

export function loadAccountSuccess(account) {
    return {
        type: types.LOAD_ACCOUNT_SUCCESS,
        payload: account,
    };
}

export function loadAccount() {
    return function (dispatch) {
        return alpacaApi.getAccount()
        .then(account => {
            dispatch(loadAccountSuccess(account));
        })
        .catch(e => {
            throw e;
        });
    }
}
