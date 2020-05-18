import apisauce from "apisauce";
import config from "../config";

const streamApi = (baseURL = config.STREAM_URL) => {
  const api = apisauce.create({
    baseURL: config.STREAM_URL,
    headers: {
      action: "authenticate",
      data: {
        key_id: config.API_KEY,
        secret_key: config.SECRET_KEY,
        // "APCA-API-KEY-ID": config.API_KEY,
        // "APCA-API-SECRET-KEY": config.SECRET_KEY,
      },
      timeout: 5000,
    },
  });
  const getLastTrade = (symbol) => api.get(`/last/stocks/${symbol}`);

  return {
    getLastTrade,
  };
};

export default streamApi;
