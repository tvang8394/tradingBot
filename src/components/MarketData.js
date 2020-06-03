import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as marketActions from "../redux/actions/marketActions";

class MarketData extends Component {
  componentDidMount() {
    this.props.actions.loadMarket().catch((e) => {
      alert("Loading Courses Failed" + e);
    })
    setInterval( () => this.props.actions.loadMarket().catch((e) => {
      alert("Loading Courses Failed" + e);
    }), 30000)
  }
  render() {
    return (
      <div className="col">
        <h6>Closing Price: {this.props.market["4. close"]}</h6>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    market: state.market,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
