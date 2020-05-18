import apisauce from 'apisauce';
import config from '../config';

const alpacaDataApi = (baseURL = config.ALPACA_DATA_URL) => {
    const api = apisauce.create({
        baseURL: config.ALPACA_DATA_URL,
        headers: {
            "APCA-API-KEY-ID": config.API_KEY,
            "APCA-API-SECRET-KEY": config.SECRET_KEY,
            paper: true
        },
        timeout: 5000
    });
    const getLastTrade = (symbol) => api.get(`/last/stocks/${symbol}`)
    

    return{
        getLastTrade
    }
}

export default alpacaDataApi;