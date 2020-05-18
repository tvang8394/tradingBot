import apisauce from 'apisauce';
import config from '../config';

const alpacaApi = (baseURL = config.ALPACA_URL) => {
    const api = apisauce.create({
        baseURL: config.ALPACA_URL,
        headers: {
            "APCA-API-KEY-ID": config.API_KEY,
            "APCA-API-SECRET-KEY": config.SECRET_KEY
        },
        timeout: 5000
    });

    const getAccount = () => api.get('v2/account')
    const getPostion = () => api.get('v2/positions')

    return{
        getAccount,
        getPostion,
    }
}

export default alpacaApi;