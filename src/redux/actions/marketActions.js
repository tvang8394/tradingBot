import * as types from "./actionTypes";
import * as alphaVanApi from "../../api/alphaVantageApi";

export function loadMarketSuccess(market) {
    return {
        type: types.LOAD_MARKET_SUCCESS,
        payload: market,
    };
}

export function loadMarket() {
    return async function (dispatch) {
        return alphaVanApi.getMarketData()
        .then(res => dispatch(loadMarketSuccess(res)))
        .catch(e => {
            throw e
        });
    }
};
