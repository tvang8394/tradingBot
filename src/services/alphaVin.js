const url = new URL("https://www.alphavantage.co/query?");

let params = {
  function: "TIME_SERIES_INTRADAY",
  symbol: "SPY",
  interval: "1min",
  apikey: "QHLZFBMOR5Y557IF",
};
Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

async function alphaVin() {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data)
  const series = await data["Time Series (1min)"];

  return {
    series,
  };
  // console.log(series)
}

export default alphaVin;
