import config from "../config";
import { handleError, handleResponse } from "./apiUtils";

export async function getMarketData() {
  const url = new URL(config.ALPHA_VANTAGE_URL);
  let params = {
    function: "TIME_SERIES_INTRADAY",
    symbol: "SPY",
    interval: "1min",
    apikey: "QHLZFBMOR5Y557IF",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return await fetch(url)
    .then(handleResponse)
    .then((data) => data["Time Series (1min)"])
    .then(time => {
      let keys = Object.keys(time)
      let currentTime = keys[0]
      return time[currentTime]
    })
    .catch(handleError);
}
