import React, { Component } from "react";
import "./App.css";
import alpacaApi from "../src/services/alpaca";
import { Button } from "reactstrap";
// import polygonApi from '../src/services/polygon';
import alpacaDataApi from '../src/services/alpaca_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      buying_power: 0,
      long_market_value: 0,
      portfolio_value: 0,
    };
  }
  componentDidMount() {
    console.log("fetch data from alpaca");

    const api = alpacaApi();
    api.getAccount().then((response) => {
      // console.log(response);

      if (response.ok) {
        this.setState({
          buying_power: response.data.buying_power,
          cash: response.data.cash,
          long_market_value: response.data.long_market_value,
          portfolio_value: response.data.portfolio_value,
        });
      }
    });

    const alpacaData = alpacaDataApi();
    alpacaData.getLastTrade('SPY').then((response) => {
      console.log(response)
    })

    // const polygon = polygonApi();
    // polygon.getQuote('SPY').then((response) => {
    //   console.log(response)
    // })
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
            <p className="buying">{this.state.buying_power}</p>
          </div>
          <div className="col">
            <h5>Market Value</h5>
            <p>{this.state.long_market_value}</p>
          </div>
          <div className="col">
            <h5>Profile Value</h5>
            <p>{this.state.portfolio_value}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
