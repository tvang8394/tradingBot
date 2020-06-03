import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import MarketData from "./MarketData";
import Levels from "./Levels";
import OrderComponent from "./OrderComponent";
class MainBody extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 border">
          <AccountInfo />
        </div>
        <div className="col border">
          <MarketData />
          <Levels />
        </div>
        <div className="col-3 border">
          Alerts When Levels are Reached
          <OrderComponent />
        </div>
      </div>
    );
  }
}

export default MainBody;
