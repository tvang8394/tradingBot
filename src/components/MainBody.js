import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import MarketData from "./MarketData";

class MainBody extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 border">
          <AccountInfo />
        </div>
        <div className="col-6 border">
          <MarketData />
        </div>
        <div className="col-3 border">col-3</div>
      </div>
    );
  }
}

export default MainBody;
