import React, { Component } from "react";
import alpacaApi from "../services/alpaca";

export default class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
    };
  }
  componentDidMount() {
    // console.log("fetch data from alpaca");

    const api = alpacaApi();
    api.getAccount().then((response) => {
      // console.log(response.data)
      if (response.ok) {
        this.setState({
          buying_power: response.data.buying_power,
          cash: response.data.cash,
          long_market_value: response.data.long_market_value,
          equity: response.data.portfolio_value,
        });
      }
    });
    api.getPostion().then((response) => {
      console.log(response.data[0]);

      this.setState({
        portfolio: response.data.map((stock) => (
          <div key={stock["asset_id"]}>
            <h6>Asset: {stock["symbol"]}</h6>
            <h6>Avg Entry: {stock["avg_entry_price"]}</h6>
            <h6>Shares: {stock["qty"]}</h6>
          </div>
        )),
      });
    });
    
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h5>Equity: </h5>

            <p>{this.state.equity}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Buying Power: </h5>
            <p>{this.state.buying_power}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Portfolio: </h5>
          </div>
          <div className="col-6">{this.state.portfolio}</div>
        </div>
      </React.Fragment>
    );
  }
}
