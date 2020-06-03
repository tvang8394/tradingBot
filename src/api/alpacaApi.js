import config from '../config';
import { handleResponse, handleError } from "./apiUtils";

export async function getAccount() {
    return fetch(config.ALPACA_ACCOUNT_URL + "/v2/account",
        {
            method: "GET",
            headers: {
               "APCA-API-KEY-ID": config.ALPACA_API_KEY,
               "APCA-API-SECRET-KEY": config.ALPACA_SECRET_KEY 
            }
        }).then(handleResponse)
        .catch(handleError)
}

export async function getPositions() {
    return fetch(config.ALPACA_ACCOUNT_URL + "/v2/positions",
    {
        method: "GET",
        headers: {
            "APCA-API-KEY-ID": config.ALPACA_API_KEY,
            "APCA-API-SECRET-KEY": config.ALPACA_SECRET_KEY 
         }
    }).then(handleResponse)
    .catch(handleError)
}