import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as marketActions from "../redux/actions/marketActions";

class MarketData extends Component {
    componentDidMount() {
        this.props.actions.loadMarket().catch((e) => {
            alert("Loading Courses Failed" + e);
          });
    }
    render() {
        return (
            <div>
                {console.log(this.props.market)}
            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(MarketData);
