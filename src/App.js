import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import MainBody from "./components/MainBody";

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
      symbol: "SPY",
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid header">
          <Header symbol={this.state.symbol} />
        </div>
        <div className="container-fluid">
          <MainBody />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
