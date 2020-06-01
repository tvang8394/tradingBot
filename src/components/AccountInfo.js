import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as accountActions from "../redux/actions/accountActions";

class AccountInfo extends Component {
  componentDidMount() {
    this.props.actions.loadAccount().catch((e) => {
      alert("Loading Courses Failed" + e);
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h5>Equity: </h5>
            <p>{this.props.account.account.equity}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Buying Power: </h5>
            <p>{this.props.account.account.buying_power}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Portfolio: </h5>
          </div>
          <div className="col-6">{this.props.account.account.portfolio}</div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
