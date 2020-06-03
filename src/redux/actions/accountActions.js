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

export function loadPositionSuccess(positions) {
    // console.log(positions)

    return {
        type: types.LOAD_POSITIONS_SUCCESS,
        payload: positions,
    };
}

export function loadPositions() {
    return async function (dispatch) {
        return alpacaApi.getPositions()
        .then(positions => {
            dispatch(loadPositionSuccess(positions));
        })
        .catch(e => {
            throw e;
        });
    }
}