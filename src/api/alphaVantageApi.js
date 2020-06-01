import config from "../config";

export async function getMarketData() {
  const url = new URL(config.ALPHA_VANTAGE_URL);
  const marketData = [];
  let params = {
    function: "TIME_SERIES_INTRADAY",
    symbol: "SPY",
    interval: "1min",
    apikey: "QHLZFBMOR5Y557IF",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data)
  const series = await data["Time Series (1min)"];
  
  return {
    series,
  };
  // console.log(series)
}
