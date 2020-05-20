import apisauce from 'apisauce';
import config from '../config';

const alpacaApi = (baseURL = config.ALPACA_URL) => {
    const api = apisauce.create({
        baseURL: config.ALPACA_URL,
        headers: {
            "APCA-API-KEY-ID": config.ALPACA_API_KEY,
            "APCA-API-SECRET-KEY": config.ALPACA_SECRET_KEY
        },
        timeout: 5000
    });

    const getAccount = () => api.get('v2/account')
    const getPostion = () => api.get('v2/positions')
    const newOrder = () => api.post('v2/orders',(request, response) => {
        // return console.log(request)
    })

    return{
        getAccount,
        getPostion,
        newOrder
    }
}

export default alpacaApi;