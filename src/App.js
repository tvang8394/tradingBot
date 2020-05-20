import React, { Component } from "react";
import "./App.css";
import alpacaApi from "../src/services/alpaca";
import { Button } from "reactstrap";
// import polygonApi from '../src/services/polygon';
import alphaVin from "../src/services/alphaVin";
// const store = ConfigureStore();
import OrderComponent from "./components/orderComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      buying_power: 0,
      long_market_value: 0,
      portfolio_value: 0,
      current_price: 0,
      upper_level: 0,
      lower_level: 0,
      prev_close: [],
    };
  }
  componentDidMount() {
    // console.log("fetch data from alpaca");

    const api = alpacaApi();
    api.getAccount().then((response) => {

      if (response.ok) {
        this.setState({
          buying_power: response.data.buying_power,
          cash: response.data.cash,
          long_market_value: response.data.long_market_value,
          portfolio_value: response.data.portfolio_value,
        });
      }
    });
    // const alpacaPacket = alpacaApiPacket();

    // api.newOrder();

    const alphaVinStream = alphaVin();
    
    alphaVinStream.then((response) => {
      const data = response;
      const series = data["series"];
      const keys = Object.keys(series);
      // console.log(series);
      this.setState({
        prev_close: series[keys[0]]["4. close"],
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h5>Cash</h5>
            <p>{this.state.cash}</p>
            <Button>More Cash</Button>
          </div>
          <div className="col">
            <h5>Buying Power</h5>
            <p>{this.state.buying_power}</p>
          </div>
          <div className="col">
            <h5>Market Value</h5>
            <p>{this.state.long_market_value}</p>
          </div>
          <div className="col">
            <h5>Profile Value</h5>
            <p>{this.state.portfolio_value}</p>
          </div>
          <div className="col">
            <h5>Previous Price close</h5>
            <p>{this.state.prev_close}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <OrderComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
