import config from "../config";

const Alpaca = require("@alpacahq/alpaca-trade-api");

export const alpacaApiPacket = new Alpaca({
  keyId: config.ALPACA_API_KEY,
  secretKey: config.ALPACA_SECRET_KEY,
  paper: true,
  usePolygon: false,
});

// alpacaApiPacket.createOrder({
//   symbol: 'SPY', // any valid ticker symbol
//   qty: 1,
//   side: "buy",
//   type: "market" ,
//   time_in_force:"gtc"
//   limit_price: number,
//   stop_price: number,
//   client_order_id: string,
// });
